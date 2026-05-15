
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://forzamusic-api-official.vercel.app',

    auth: {
      prefix: 'Bearer',
    },

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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "cover_art",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "genre",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "label",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "release_date",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "total_track",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "track",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 8
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "lyric",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "song_id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "success",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 3
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "album_id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "artist",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "cover_art",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "duration",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "genre",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "release_date",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        }
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
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": "Shape of You",
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "album_id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "artist",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "cover_art",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "duration",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "explicit",
          "req": false,
          "type": "`$BOOLEAN`",
          "active": true,
          "index$": 5
        },
        {
          "name": "genre",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "isrc",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "label",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        },
        {
          "name": "lyric",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        },
        {
          "name": "popularity",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 11
        },
        {
          "name": "release_date",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 12
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 13
        },
        {
          "name": "track_number",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 14
        }
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
                    "reqd": true,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
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

