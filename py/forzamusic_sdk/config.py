# Forzamusic SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "type": "`$STRING`",
          },
          {
            "name": "artists",
            "type": "`$ARRAY`",
          },
          {
            "name": "coverArt",
            "type": "`$STRING`",
          },
          {
            "name": "genre",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "label",
            "type": "`$STRING`",
          },
          {
            "name": "releaseDate",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "totalTracks",
            "type": "`$INTEGER`",
          },
          {
            "name": "tracks",
            "type": "`$ARRAY`",
          },
        ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "lyrics",
            "type": "`$STRING`",
          },
          {
            "name": "songId",
            "type": "`$STRING`",
          },
          {
            "name": "success",
            "type": "`$BOOLEAN`",
          },
        ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "albumId",
            "type": "`$STRING`",
          },
          {
            "name": "artist",
            "type": "`$STRING`",
          },
          {
            "name": "artists",
            "type": "`$ARRAY`",
          },
          {
            "name": "coverArt",
            "type": "`$STRING`",
          },
          {
            "name": "duration",
            "type": "`$INTEGER`",
          },
          {
            "name": "genre",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "releaseDate",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
        ],
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
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "Shape of You",
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
                  "res": "`body.results`",
                },
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "albumId",
            "type": "`$STRING`",
          },
          {
            "name": "artist",
            "type": "`$STRING`",
          },
          {
            "name": "artists",
            "type": "`$ARRAY`",
          },
          {
            "name": "coverArt",
            "type": "`$STRING`",
          },
          {
            "name": "duration",
            "type": "`$INTEGER`",
          },
          {
            "name": "explicit",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "genre",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "isrc",
            "type": "`$STRING`",
          },
          {
            "name": "label",
            "type": "`$STRING`",
          },
          {
            "name": "lyrics",
            "type": "`$STRING`",
          },
          {
            "name": "popularity",
            "type": "`$INTEGER`",
          },
          {
            "name": "releaseDate",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
          {
            "name": "trackNumber",
            "type": "`$INTEGER`",
          },
        ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
