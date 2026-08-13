-- Typed models for the Forzamusic SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Album
---@field artist? string
---@field artists? table
---@field coverArt? string
---@field genre? string
---@field id? string
---@field label? string
---@field releaseDate? string
---@field title? string
---@field totalTracks? number
---@field tracks? table

---@class AlbumLoadMatch
---@field id string

---@class Lyric
---@field language? string
---@field lyrics? string
---@field songId? string
---@field success? boolean

---@class LyricLoadMatch
---@field id string

---@class Search
---@field album? string
---@field albumId? string
---@field artist? string
---@field artists? table
---@field coverArt? string
---@field duration? number
---@field genre? string
---@field id? string
---@field releaseDate? string
---@field title? string

---@class SearchListMatch
---@field album? string
---@field albumId? string
---@field artist? string
---@field artists? table
---@field coverArt? string
---@field duration? number
---@field genre? string
---@field id? string
---@field releaseDate? string
---@field title? string

---@class Song
---@field album? string
---@field albumId? string
---@field artist? string
---@field artists? table
---@field coverArt? string
---@field duration? number
---@field explicit? boolean
---@field genre? string
---@field id? string
---@field isrc? string
---@field label? string
---@field lyrics? string
---@field popularity? number
---@field releaseDate? string
---@field title? string
---@field trackNumber? number

---@class SongLoadMatch
---@field id string

local M = {}

return M
