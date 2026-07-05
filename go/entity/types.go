// Typed models for the Forzamusic SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Album is the typed data model for the album entity.
type Album struct {
	Artist *string `json:"artist,omitempty"`
	CoverArt *string `json:"cover_art,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalTrack *int `json:"total_track,omitempty"`
	Track *[]any `json:"track,omitempty"`
}

// AlbumLoadMatch is the typed request payload for Album.LoadTyped.
type AlbumLoadMatch struct {
	Id string `json:"id"`
}

// Lyric is the typed data model for the lyric entity.
type Lyric struct {
	Language *string `json:"language,omitempty"`
	Lyric *string `json:"lyric,omitempty"`
	SongId *string `json:"song_id,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// LyricLoadMatch is the typed request payload for Lyric.LoadTyped.
type LyricLoadMatch struct {
	Id string `json:"id"`
}

// Search is the typed data model for the search entity.
type Search struct {
	Album *string `json:"album,omitempty"`
	AlbumId *string `json:"album_id,omitempty"`
	Artist *string `json:"artist,omitempty"`
	CoverArt *string `json:"cover_art,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Title *string `json:"title,omitempty"`
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	Album *string `json:"album,omitempty"`
	AlbumId *string `json:"album_id,omitempty"`
	Artist *string `json:"artist,omitempty"`
	CoverArt *string `json:"cover_art,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Song is the typed data model for the song entity.
type Song struct {
	Album *string `json:"album,omitempty"`
	AlbumId *string `json:"album_id,omitempty"`
	Artist *string `json:"artist,omitempty"`
	CoverArt *string `json:"cover_art,omitempty"`
	Duration *int `json:"duration,omitempty"`
	Explicit *bool `json:"explicit,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *string `json:"id,omitempty"`
	Isrc *string `json:"isrc,omitempty"`
	Label *string `json:"label,omitempty"`
	Lyric *string `json:"lyric,omitempty"`
	Popularity *int `json:"popularity,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Title *string `json:"title,omitempty"`
	TrackNumber *int `json:"track_number,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
