// Typed models for the Forzamusic SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Album {
  artist?: string
  cover_art?: string
  genre?: string
  id?: string
  label?: string
  release_date?: string
  title?: string
  total_track?: number
  track?: any[]
}

export interface AlbumLoadMatch {
  id: string
}

export interface Lyric {
  language?: string
  lyric?: string
  song_id?: string
  success?: boolean
}

export interface LyricLoadMatch {
  id: string
}

export interface Search {
  album?: string
  album_id?: string
  artist?: string
  cover_art?: string
  duration?: number
  genre?: string
  id?: string
  release_date?: string
  title?: string
}

export type SearchListMatch = Partial<Search>

export interface Song {
  album?: string
  album_id?: string
  artist?: string
  cover_art?: string
  duration?: number
  explicit?: boolean
  genre?: string
  id?: string
  isrc?: string
  label?: string
  lyric?: string
  popularity?: number
  release_date?: string
  title?: string
  track_number?: number
}

export interface SongLoadMatch {
  id: string
}

