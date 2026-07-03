# Album entity test

require "minitest/autorun"
require "json"
require_relative "../Forzamusic_sdk"
require_relative "runner"

class AlbumEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ForzamusicSDK.test(nil, nil)
    ent = testsdk.Album(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = album_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "album." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set FORZAMUSIC_TEST_ALBUM_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    album_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.album")))
    album_ref01_data = nil
    if album_ref01_data_raw.length > 0
      album_ref01_data = Helpers.to_map(album_ref01_data_raw[0][1])
    end

    # LOAD
    album_ref01_ent = client.Album(nil)
    album_ref01_match_dt0 = {
      "id" => album_ref01_data["id"],
    }
    album_ref01_data_dt0_loaded, err = album_ref01_ent.load(album_ref01_match_dt0, nil)
    assert_nil err
    album_ref01_data_dt0_load_result = Helpers.to_map(album_ref01_data_dt0_loaded)
    assert !album_ref01_data_dt0_load_result.nil?
    assert_equal album_ref01_data_dt0_load_result["id"], album_ref01_data["id"]

  end
end

def album_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "album", "AlbumTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ForzamusicSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["album01", "album02", "album03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["FORZAMUSIC_TEST_ALBUM_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "FORZAMUSIC_TEST_ALBUM_ENTID" => idmap,
    "FORZAMUSIC_TEST_LIVE" => "FALSE",
    "FORZAMUSIC_TEST_EXPLAIN" => "FALSE",
    "FORZAMUSIC_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["FORZAMUSIC_TEST_ALBUM_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["FORZAMUSIC_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["FORZAMUSIC_APIKEY"],
      },
      extra || {},
    ])
    client = ForzamusicSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["FORZAMUSIC_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["FORZAMUSIC_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
