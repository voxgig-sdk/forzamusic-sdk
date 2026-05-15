package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/forzamusic-sdk"
	"github.com/voxgig-sdk/forzamusic-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestLyricEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Lyric(nil)
		if ent == nil {
			t.Fatal("expected non-nil LyricEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := lyricBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "lyric." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set FORZAMUSIC_TEST_LYRIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		lyricRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.lyric", setup.data)))
		var lyricRef01Data map[string]any
		if len(lyricRef01DataRaw) > 0 {
			lyricRef01Data = core.ToMapAny(lyricRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = lyricRef01Data

		// LOAD
		lyricRef01Ent := client.Lyric(nil)
		lyricRef01MatchDt0 := map[string]any{}
		lyricRef01DataDt0Loaded, err := lyricRef01Ent.Load(lyricRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if lyricRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func lyricBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "lyric", "LyricTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read lyric test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse lyric test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"lyric01", "lyric02", "lyric03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("FORZAMUSIC_TEST_LYRIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"FORZAMUSIC_TEST_LYRIC_ENTID": idmap,
		"FORZAMUSIC_TEST_LIVE":      "FALSE",
		"FORZAMUSIC_TEST_EXPLAIN":   "FALSE",
		"FORZAMUSIC_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["FORZAMUSIC_TEST_LYRIC_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["FORZAMUSIC_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["FORZAMUSIC_APIKEY"],
			},
			extra,
		})
		client = sdk.NewForzamusicSDK(core.ToMapAny(mergedOpts))
	}

	live := env["FORZAMUSIC_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["FORZAMUSIC_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
