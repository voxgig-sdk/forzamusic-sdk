
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Forzamusic',
        slug: "forzamusic",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://forzamusic-api-official.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      album: {
      },

      lyric: {
      },

      search: {
      },

      song: {
      },

    }
  }


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
              "parts": [
                "api",
                "album",
                "{id}"
              ],
              "rename": {
                "param": {
                  "albumId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "api",
                "lyrics",
                "{id}"
              ],
              "rename": {
                "param": {
                  "songId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "api",
                "search"
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
              }
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
              "parts": [
                "api",
                "song",
                "{id}"
              ],
              "rename": {
                "param": {
                  "songId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

