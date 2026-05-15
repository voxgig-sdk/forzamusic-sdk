# Forzamusic SDK configuration


def make_config():
    return {
        "main": {
            "name": "Forzamusic",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://forzamusic-api-official.vercel.app",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "album": {},
                "lyric": {},
                "search": {},
                "song": {},
            },
        },
        "entity": {
      "album": {
        "fields": [
          {
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "cover_art",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "genre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "label",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "release_date",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "total_track",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "track",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 8,
          },
        ],
        "name": "album",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "album_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/album/{albumId}",
                "parts": [
                  "api",
                  "album",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "albumId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "lyric": {
        "fields": [
          {
            "name": "language",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "lyric",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "song_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "success",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "lyric",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "song_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/lyrics/{songId}",
                "parts": [
                  "api",
                  "lyrics",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "songId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "name": "album",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "album_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "cover_art",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "duration",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "genre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "release_date",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
        ],
        "name": "search",
        "op": {
          "list": {
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
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": "Shape of You",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/search",
                "parts": [
                  "api",
                  "search",
                ],
                "select": {
                  "exist": [
                    "limit",
                    "offset",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "song": {
        "fields": [
          {
            "name": "album",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "album_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "artist",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "cover_art",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "duration",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "explicit",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "genre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "isrc",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "label",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "lyric",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "popularity",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "release_date",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "track_number",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 14,
          },
        ],
        "name": "song",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "song_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/song/{songId}",
                "parts": [
                  "api",
                  "song",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "songId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
