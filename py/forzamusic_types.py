# Typed models for the Forzamusic SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Album:
    artist: Optional[str] = None
    cover_art: Optional[str] = None
    genre: Optional[str] = None
    id: Optional[str] = None
    label: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None
    total_track: Optional[int] = None
    track: Optional[list] = None


@dataclass
class AlbumLoadMatch:
    id: str


@dataclass
class Lyric:
    language: Optional[str] = None
    lyric: Optional[str] = None
    song_id: Optional[str] = None
    success: Optional[bool] = None


@dataclass
class LyricLoadMatch:
    id: str


@dataclass
class Search:
    album: Optional[str] = None
    album_id: Optional[str] = None
    artist: Optional[str] = None
    cover_art: Optional[str] = None
    duration: Optional[int] = None
    genre: Optional[str] = None
    id: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None


@dataclass
class SearchListMatch:
    album: Optional[str] = None
    album_id: Optional[str] = None
    artist: Optional[str] = None
    cover_art: Optional[str] = None
    duration: Optional[int] = None
    genre: Optional[str] = None
    id: Optional[str] = None
    release_date: Optional[str] = None
    title: Optional[str] = None


@dataclass
class Song:
    album: Optional[str] = None
    album_id: Optional[str] = None
    artist: Optional[str] = None
    cover_art: Optional[str] = None
    duration: Optional[int] = None
    explicit: Optional[bool] = None
    genre: Optional[str] = None
    id: Optional[str] = None
    isrc: Optional[str] = None
    label: Optional[str] = None
    lyric: Optional[str] = None
    popularity: Optional[int] = None
    release_date: Optional[str] = None
    title: Optional[str] = None
    track_number: Optional[int] = None


@dataclass
class SongLoadMatch:
    id: str

