// Typed models for the Forzamusic SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Album {
  artist?: string
  artists?: any[]
  coverArt?: string
  genre?: string
  id?: string
  label?: string
  releaseDate?: string
  title?: string
  totalTracks?: number
  tracks?: any[]
}

export interface AlbumLoadMatch {
  id: string
}

export interface Lyric {
  language?: string
  lyrics?: string
  songId?: string
  success?: boolean
}

export interface LyricLoadMatch {
  id: string
}

export interface Search {
  album?: string
  albumId?: string
  artist?: string
  artists?: any[]
  coverArt?: string
  duration?: number
  genre?: string
  id?: string
  releaseDate?: string
  title?: string
}

export interface SearchListMatch {
  album?: string
  albumId?: string
  artist?: string
  artists?: any[]
  coverArt?: string
  duration?: number
  genre?: string
  id?: string
  releaseDate?: string
  title?: string
}

export interface Song {
  album?: string
  albumId?: string
  artist?: string
  artists?: any[]
  coverArt?: string
  duration?: number
  explicit?: boolean
  genre?: string
  id?: string
  isrc?: string
  label?: string
  lyrics?: string
  popularity?: number
  releaseDate?: string
  title?: string
  trackNumber?: number
}

export interface SongLoadMatch {
  id: string
}

