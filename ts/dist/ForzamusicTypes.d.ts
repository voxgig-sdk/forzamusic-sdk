export interface Album {
    artist?: string;
    artists?: any[];
    coverArt?: string;
    genre?: string;
    id?: string;
    label?: string;
    releaseDate?: string;
    title?: string;
    totalTracks?: number;
    tracks?: any[];
}
export interface AlbumLoadMatch {
    id: string;
}
export interface Lyric {
    id?: string;
    language?: string;
    lyrics?: string;
    songId?: string;
    success?: boolean;
}
export interface LyricLoadMatch {
    id: string;
}
export interface Search {
    album?: string;
    albumId?: string;
    artist?: string;
    artists?: any[];
    coverArt?: string;
    duration?: number;
    genre?: string;
    id?: string;
    releaseDate?: string;
    title?: string;
}
export interface SearchListMatch {
    limit?: number;
    offset?: number;
    query: string;
}
export interface Song {
    album?: string;
    albumId?: string;
    artist?: string;
    artists?: any[];
    coverArt?: string;
    duration?: number;
    explicit?: boolean;
    genre?: string;
    id?: string;
    isrc?: string;
    label?: string;
    lyrics?: string;
    popularity?: number;
    releaseDate?: string;
    title?: string;
    trackNumber?: number;
}
export interface SongLoadMatch {
    id: string;
}
