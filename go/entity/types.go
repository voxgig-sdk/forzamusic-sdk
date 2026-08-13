// Typed models for the Forzamusic SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/forzamusic-sdk/go/core"
)

// Album is the typed data model for the album entity.
type Album struct {
	Artist *string `json:"artist,omitempty"`
	Artists *[]any `json:"artists,omitempty"`
	CoverArt *string `json:"coverArt,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalTracks *int `json:"totalTracks,omitempty"`
	Tracks *[]any `json:"tracks,omitempty"`
}

// AlbumLoadMatch is the typed request payload for Album.LoadTyped.
type AlbumLoadMatch struct {
	Id string `json:"id"`
}

// Lyric is the typed data model for the lyric entity.
type Lyric struct {
	Language *string `json:"language,omitempty"`
	Lyrics *string `json:"lyrics,omitempty"`
	SongId *string `json:"songId,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// LyricLoadMatch is the typed request payload for Lyric.LoadTyped.
type LyricLoadMatch struct {
	Id string `json:"id"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Album *string `json:"album,omitempty"`
	AlbumId *string `json:"albumId,omitempty"`
	Artist *string `json:"artist,omitempty"`
	Artists *[]any `json:"artists,omitempty"`
	CoverArt *string `json:"coverArt,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
	Title *string `json:"title,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Album *string `json:"album,omitempty"`
	AlbumId *string `json:"albumId,omitempty"`
	Artist *string `json:"artist,omitempty"`
	Artists *[]any `json:"artists,omitempty"`
	CoverArt *string `json:"coverArt,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Song is the typed data model for the song entity.
type Song struct {
	Album *string `json:"album,omitempty"`
	AlbumId *string `json:"albumId,omitempty"`
	Artist *string `json:"artist,omitempty"`
	Artists *[]any `json:"artists,omitempty"`
	CoverArt *string `json:"coverArt,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Explicit *bool `json:"explicit,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	Isrc *string `json:"isrc,omitempty"`
	Label *string `json:"label,omitempty"`
	Lyrics *string `json:"lyrics,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	ReleaseDate *string `json:"releaseDate,omitempty"`
	Title *string `json:"title,omitempty"`
	TrackNumber *int `json:"trackNumber,omitempty"`
}

// SongLoadMatch is the typed request payload for Song.LoadTyped.
type SongLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
