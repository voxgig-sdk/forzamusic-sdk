-- Forzamusic SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Forzamusic",
      slug = "forzamusic",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://forzamusic-api-official.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["album"] = {},
        ["lyric"] = {},
        ["search"] = {},
        ["song"] = {},
      },
    },
    entity = {
      ["album"] = {
        ["fields"] = {
          {
            ["name"] = "artist",
            ["title"] = "Artist",
            ["type"] = "`$STRING`",
            ["short"] = "Primary artist",
          },
          {
            ["name"] = "artists",
            ["title"] = "Artists",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "coverArt",
            ["title"] = "Cover Art",
            ["type"] = "`$STRING`",
            ["format"] = "uri",
          },
          {
            ["name"] = "genre",
            ["title"] = "Genre",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier of the album",
          },
          {
            ["name"] = "label",
            ["title"] = "Label",
            ["type"] = "`$STRING`",
            ["short"] = "Record label",
          },
          {
            ["name"] = "releaseDate",
            ["title"] = "Release Date",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["short"] = "Album title",
          },
          {
            ["name"] = "totalTracks",
            ["title"] = "Total Tracks",
            ["type"] = "`$INTEGER`",
            ["short"] = "Total number of tracks",
          },
          {
            ["name"] = "tracks",
            ["title"] = "Tracks",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "album",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/album/{albumId}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "album",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "api",
                  "album",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["albumId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "album_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["lyric"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "language",
            ["title"] = "Language",
            ["type"] = "`$STRING`",
            ["short"] = "Language of the lyrics",
          },
          {
            ["name"] = "lyrics",
            ["title"] = "Lyrics",
            ["type"] = "`$STRING`",
            ["short"] = "Full lyrics of the song",
          },
          {
            ["name"] = "songId",
            ["title"] = "Song Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "lyric",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/lyrics/{songId}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "lyrics",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "api",
                  "lyrics",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["songId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "song_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "album",
            ["title"] = "Album",
            ["type"] = "`$STRING`",
            ["short"] = "Album name",
          },
          {
            ["name"] = "albumId",
            ["title"] = "Album Id",
            ["type"] = "`$STRING`",
            ["short"] = "Album identifier",
          },
          {
            ["name"] = "artist",
            ["title"] = "Artist",
            ["type"] = "`$STRING`",
            ["short"] = "Primary artist of the song",
          },
          {
            ["name"] = "artists",
            ["title"] = "Artists",
            ["type"] = "`$ARRAY`",
            ["short"] = "List of all artists involved",
          },
          {
            ["name"] = "coverArt",
            ["title"] = "Cover Art",
            ["type"] = "`$STRING`",
            ["short"] = "URL to cover art image",
            ["format"] = "uri",
          },
          {
            ["name"] = "duration",
            ["title"] = "Duration",
            ["type"] = "`$INTEGER`",
            ["short"] = "Duration in seconds",
          },
          {
            ["name"] = "genre",
            ["title"] = "Genre",
            ["type"] = "`$STRING`",
            ["short"] = "Primary genre",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier of the song",
          },
          {
            ["name"] = "releaseDate",
            ["title"] = "Release Date",
            ["type"] = "`$STRING`",
            ["short"] = "Release date of the song",
            ["format"] = "date",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["short"] = "Title of the song",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/search",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "search",
                  },
                },
                ["parts"] = {
                  "api",
                  "search",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "Shape of You",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "offset",
                    "query",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["song"] = {
        ["fields"] = {
          {
            ["name"] = "album",
            ["title"] = "Album",
            ["type"] = "`$STRING`",
            ["short"] = "Album name",
          },
          {
            ["name"] = "albumId",
            ["title"] = "Album Id",
            ["type"] = "`$STRING`",
            ["short"] = "Album identifier",
          },
          {
            ["name"] = "artist",
            ["title"] = "Artist",
            ["type"] = "`$STRING`",
            ["short"] = "Primary artist of the song",
          },
          {
            ["name"] = "artists",
            ["title"] = "Artists",
            ["type"] = "`$ARRAY`",
            ["short"] = "List of all artists involved",
          },
          {
            ["name"] = "coverArt",
            ["title"] = "Cover Art",
            ["type"] = "`$STRING`",
            ["short"] = "URL to cover art image",
            ["format"] = "uri",
          },
          {
            ["name"] = "duration",
            ["title"] = "Duration",
            ["type"] = "`$INTEGER`",
            ["short"] = "Duration in seconds",
          },
          {
            ["name"] = "explicit",
            ["title"] = "Explicit",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the song contains explicit content",
          },
          {
            ["name"] = "genre",
            ["title"] = "Genre",
            ["type"] = "`$STRING`",
            ["short"] = "Primary genre",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier of the song",
          },
          {
            ["name"] = "isrc",
            ["title"] = "Isrc",
            ["type"] = "`$STRING`",
            ["short"] = "International Standard Recording Code",
          },
          {
            ["name"] = "label",
            ["title"] = "Label",
            ["type"] = "`$STRING`",
            ["short"] = "Record label",
          },
          {
            ["name"] = "lyrics",
            ["title"] = "Lyrics",
            ["type"] = "`$STRING`",
            ["short"] = "Full lyrics of the song",
          },
          {
            ["name"] = "popularity",
            ["title"] = "Popularity",
            ["type"] = "`$INTEGER`",
            ["short"] = "Popularity score (0-100)",
          },
          {
            ["name"] = "releaseDate",
            ["title"] = "Release Date",
            ["type"] = "`$STRING`",
            ["short"] = "Release date of the song",
            ["format"] = "date",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["short"] = "Title of the song",
          },
          {
            ["name"] = "trackNumber",
            ["title"] = "Track Number",
            ["type"] = "`$INTEGER`",
            ["short"] = "Track number on album",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "song",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/song/{songId}",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "song",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "api",
                  "song",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["songId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "song_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
