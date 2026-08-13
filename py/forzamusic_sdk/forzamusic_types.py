# Typed models for the Forzamusic SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Album(TypedDict, total=False):
    artist: str
    artists: list
    coverArt: str
    genre: str
    id: str
    label: str
    releaseDate: str
    title: str
    totalTracks: int
    tracks: list


class AlbumLoadMatch(TypedDict):
    id: str


class Lyric(TypedDict, total=False):
    language: str
    lyrics: str
    songId: str
    success: bool


class LyricLoadMatch(TypedDict):
    id: str


class Search(TypedDict, total=False):
    album: str
    albumId: str
    artist: str
    artists: list
    coverArt: str
    duration: int
    genre: str
    id: str
    releaseDate: str
    title: str


class SearchListMatch(TypedDict, total=False):
    album: str
    albumId: str
    artist: str
    artists: list
    coverArt: str
    duration: int
    genre: str
    id: str
    releaseDate: str
    title: str


class Song(TypedDict, total=False):
    album: str
    albumId: str
    artist: str
    artists: list
    coverArt: str
    duration: int
    explicit: bool
    genre: str
    id: str
    isrc: str
    label: str
    lyrics: str
    popularity: int
    releaseDate: str
    title: str
    trackNumber: int


class SongLoadMatch(TypedDict):
    id: str
