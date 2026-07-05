-- Typed models for the Forzamusic SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Album
---@field artist? string
---@field cover_art? string
---@field genre? string
---@field id? string
---@field label? string
---@field release_date? string
---@field title? string
---@field total_track? number
---@field track? table

---@class AlbumLoadMatch
---@field id string

---@class Lyric
---@field language? string
---@field lyric? string
---@field song_id? string
---@field success? boolean

---@class LyricLoadMatch
---@field id string

---@class Search
---@field album? string
---@field album_id? string
---@field artist? string
---@field cover_art? string
---@field duration? number
---@field genre? string
---@field id? string
---@field release_date? string
---@field title? string

---@class SearchListMatch
---@field album? string
---@field album_id? string
---@field artist? string
---@field cover_art? string
---@field duration? number
---@field genre? string
---@field id? string
---@field release_date? string
---@field title? string

---@class Song
---@field album? string
---@field album_id? string
---@field artist? string
---@field cover_art? string
---@field duration? number
---@field explicit? boolean
---@field genre? string
---@field id? string
---@field isrc? string
---@field label? string
---@field lyric? string
---@field popularity? number
---@field release_date? string
---@field title? string
---@field track_number? number

---@class SongLoadMatch
---@field id string

local M = {}

return M
