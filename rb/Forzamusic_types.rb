# frozen_string_literal: true

# Typed models for the Forzamusic SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Album entity data model.
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] artists
#   @return [Array, nil]
#
# @!attribute [rw] coverArt
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] totalTracks
#   @return [Integer, nil]
#
# @!attribute [rw] tracks
#   @return [Array, nil]
Album = Struct.new(
  :artist,
  :artists,
  :coverArt,
  :genre,
  :id,
  :label,
  :releaseDate,
  :title,
  :totalTracks,
  :tracks,
  keyword_init: true
)

# Request payload for Album#load.
#
# @!attribute [rw] id
#   @return [String]
AlbumLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Lyric entity data model.
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] lyrics
#   @return [String, nil]
#
# @!attribute [rw] songId
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
Lyric = Struct.new(
  :language,
  :lyrics,
  :songId,
  :success,
  keyword_init: true
)

# Request payload for Lyric#load.
#
# @!attribute [rw] id
#   @return [String]
LyricLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] album
#   @return [String, nil]
#
# @!attribute [rw] albumId
#   @return [String, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] artists
#   @return [Array, nil]
#
# @!attribute [rw] coverArt
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Search = Struct.new(
  :album,
  :albumId,
  :artist,
  :artists,
  :coverArt,
  :duration,
  :genre,
  :id,
  :releaseDate,
  :title,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] album
#   @return [String, nil]
#
# @!attribute [rw] albumId
#   @return [String, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] artists
#   @return [Array, nil]
#
# @!attribute [rw] coverArt
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
SearchListMatch = Struct.new(
  :album,
  :albumId,
  :artist,
  :artists,
  :coverArt,
  :duration,
  :genre,
  :id,
  :releaseDate,
  :title,
  keyword_init: true
)

# Song entity data model.
#
# @!attribute [rw] album
#   @return [String, nil]
#
# @!attribute [rw] albumId
#   @return [String, nil]
#
# @!attribute [rw] artist
#   @return [String, nil]
#
# @!attribute [rw] artists
#   @return [Array, nil]
#
# @!attribute [rw] coverArt
#   @return [String, nil]
#
# @!attribute [rw] duration
#   @return [Integer, nil]
#
# @!attribute [rw] explicit
#   @return [Boolean, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] isrc
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] lyrics
#   @return [String, nil]
#
# @!attribute [rw] popularity
#   @return [Integer, nil]
#
# @!attribute [rw] releaseDate
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] trackNumber
#   @return [Integer, nil]
Song = Struct.new(
  :album,
  :albumId,
  :artist,
  :artists,
  :coverArt,
  :duration,
  :explicit,
  :genre,
  :id,
  :isrc,
  :label,
  :lyrics,
  :popularity,
  :releaseDate,
  :title,
  :trackNumber,
  keyword_init: true
)

# Request payload for Song#load.
#
# @!attribute [rw] id
#   @return [String]
SongLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

