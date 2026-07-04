<?php
declare(strict_types=1);

// Typed models for the Forzamusic SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Album entity data model. */
class Album
{
    public ?string $artist = null;
    public ?string $cover_art = null;
    public ?string $genre = null;
    public ?string $id = null;
    public ?string $label = null;
    public ?string $release_date = null;
    public ?string $title = null;
    public ?int $total_track = null;
    public ?array $track = null;
}

/** Request payload for Album#load. */
class AlbumLoadMatch
{
    public string $id;
}

/** Lyric entity data model. */
class Lyric
{
    public ?string $language = null;
    public ?string $lyric = null;
    public ?string $song_id = null;
    public ?bool $success = null;
}

/** Request payload for Lyric#load. */
class LyricLoadMatch
{
    public string $id;
}

/** Search entity data model. */
class Search
{
    public ?string $album = null;
    public ?string $album_id = null;
    public ?string $artist = null;
    public ?string $cover_art = null;
    public ?int $duration = null;
    public ?string $genre = null;
    public ?string $id = null;
    public ?string $release_date = null;
    public ?string $title = null;
}

/** Match filter for Search#list (any subset of Search fields). */
class SearchListMatch
{
    public ?string $album = null;
    public ?string $album_id = null;
    public ?string $artist = null;
    public ?string $cover_art = null;
    public ?int $duration = null;
    public ?string $genre = null;
    public ?string $id = null;
    public ?string $release_date = null;
    public ?string $title = null;
}

/** Song entity data model. */
class Song
{
    public ?string $album = null;
    public ?string $album_id = null;
    public ?string $artist = null;
    public ?string $cover_art = null;
    public ?int $duration = null;
    public ?bool $explicit = null;
    public ?string $genre = null;
    public ?string $id = null;
    public ?string $isrc = null;
    public ?string $label = null;
    public ?string $lyric = null;
    public ?int $popularity = null;
    public ?string $release_date = null;
    public ?string $title = null;
    public ?int $track_number = null;
}

/** Request payload for Song#load. */
class SongLoadMatch
{
    public string $id;
}

