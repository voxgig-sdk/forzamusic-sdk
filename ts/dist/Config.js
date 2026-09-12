"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Forzamusic',
        slug: "forzamusic",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://forzamusic-api-official.vercel.app",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            album: {},
            lyric: {},
            search: {},
            song: {},
        }
    };
    entity = {
        "album": {
            "fields": [
                {
                    "name": "artist",
                    "short": "Primary artist",
                    "type": "`$STRING`"
                },
                {
                    "name": "artists",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "uri",
                    "name": "coverArt",
                    "type": "`$STRING`"
                },
                {
                    "name": "genre",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier of the album",
                    "type": "`$STRING`"
                },
                {
                    "name": "label",
                    "short": "Record label",
                    "type": "`$STRING`"
                },
                {
                    "format": "date",
                    "name": "releaseDate",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "Album title",
                    "type": "`$STRING`"
                },
                {
                    "name": "totalTracks",
                    "short": "Total number of tracks",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tracks",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "album",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "album_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/album/{albumId}",
                            "rename": {
                                "param": {
                                    "albumId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "album"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "album",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "lyric": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "language",
                    "short": "Language of the lyrics",
                    "type": "`$STRING`"
                },
                {
                    "name": "lyrics",
                    "short": "Full lyrics of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "songId",
                    "type": "`$STRING`"
                },
                {
                    "name": "success",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "lyric",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "song_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/lyrics/{songId}",
                            "rename": {
                                "param": {
                                    "songId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "lyrics"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "lyrics",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search": {
            "fields": [
                {
                    "name": "album",
                    "short": "Album name",
                    "type": "`$STRING`"
                },
                {
                    "name": "albumId",
                    "short": "Album identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "artist",
                    "short": "Primary artist of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "artists",
                    "short": "List of all artists involved",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "uri",
                    "name": "coverArt",
                    "short": "URL to cover art image",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration",
                    "short": "Duration in seconds",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "genre",
                    "short": "Primary genre",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier of the song",
                    "type": "`$STRING`"
                },
                {
                    "format": "date",
                    "name": "releaseDate",
                    "short": "Release date of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "Title of the song",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "Shape of You",
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/search",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "search"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "offset",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "api",
                                "search"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "song": {
            "fields": [
                {
                    "name": "album",
                    "short": "Album name",
                    "type": "`$STRING`"
                },
                {
                    "name": "albumId",
                    "short": "Album identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "artist",
                    "short": "Primary artist of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "artists",
                    "short": "List of all artists involved",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "uri",
                    "name": "coverArt",
                    "short": "URL to cover art image",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration",
                    "short": "Duration in seconds",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "explicit",
                    "short": "Whether the song contains explicit content",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "genre",
                    "short": "Primary genre",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "Unique identifier of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "isrc",
                    "short": "International Standard Recording Code",
                    "type": "`$STRING`"
                },
                {
                    "name": "label",
                    "short": "Record label",
                    "type": "`$STRING`"
                },
                {
                    "name": "lyrics",
                    "short": "Full lyrics of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "popularity",
                    "short": "Popularity score (0-100)",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date",
                    "name": "releaseDate",
                    "short": "Release date of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "Title of the song",
                    "type": "`$STRING`"
                },
                {
                    "name": "trackNumber",
                    "short": "Track number on album",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "song",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "song_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/song/{songId}",
                            "rename": {
                                "param": {
                                    "songId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "song"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "song",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map