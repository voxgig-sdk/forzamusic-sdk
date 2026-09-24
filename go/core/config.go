package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Forzamusic",
			"slug": "forzamusic",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://forzamusic-api-official.vercel.app",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"album": map[string]any{},
				"lyric": map[string]any{},
				"search": map[string]any{},
				"song": map[string]any{},
			},
		},
		"entity": map[string]any{
			"album": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "artist",
						"title": "Artist",
						"type": "`$STRING`",
						"short": "Primary artist",
					},
					map[string]any{
						"name": "artists",
						"title": "Artists",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "coverArt",
						"title": "Cover Art",
						"type": "`$STRING`",
						"format": "uri",
					},
					map[string]any{
						"name": "genre",
						"title": "Genre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier of the album",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"short": "Record label",
					},
					map[string]any{
						"name": "releaseDate",
						"title": "Release Date",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Album title",
					},
					map[string]any{
						"name": "totalTracks",
						"title": "Total Tracks",
						"type": "`$INTEGER`",
						"short": "Total number of tracks",
					},
					map[string]any{
						"name": "tracks",
						"title": "Tracks",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "album",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/album/{albumId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "album",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"album",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"albumId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "album_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"lyric": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"short": "Language of the lyrics",
					},
					map[string]any{
						"name": "lyrics",
						"title": "Lyrics",
						"type": "`$STRING`",
						"short": "Full lyrics of the song",
					},
					map[string]any{
						"name": "songId",
						"title": "Song Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "lyric",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/lyrics/{songId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "lyrics",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"lyrics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"songId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "song_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "album",
						"title": "Album",
						"type": "`$STRING`",
						"short": "Album name",
					},
					map[string]any{
						"name": "albumId",
						"title": "Album Id",
						"type": "`$STRING`",
						"short": "Album identifier",
					},
					map[string]any{
						"name": "artist",
						"title": "Artist",
						"type": "`$STRING`",
						"short": "Primary artist of the song",
					},
					map[string]any{
						"name": "artists",
						"title": "Artists",
						"type": "`$ARRAY`",
						"short": "List of all artists involved",
					},
					map[string]any{
						"name": "coverArt",
						"title": "Cover Art",
						"type": "`$STRING`",
						"short": "URL to cover art image",
						"format": "uri",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$INTEGER`",
						"short": "Duration in seconds",
					},
					map[string]any{
						"name": "genre",
						"title": "Genre",
						"type": "`$STRING`",
						"short": "Primary genre",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier of the song",
					},
					map[string]any{
						"name": "releaseDate",
						"title": "Release Date",
						"type": "`$STRING`",
						"short": "Release date of the song",
						"format": "date",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title of the song",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/search",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"api",
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "Shape of You",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"query",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"song": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "album",
						"title": "Album",
						"type": "`$STRING`",
						"short": "Album name",
					},
					map[string]any{
						"name": "albumId",
						"title": "Album Id",
						"type": "`$STRING`",
						"short": "Album identifier",
					},
					map[string]any{
						"name": "artist",
						"title": "Artist",
						"type": "`$STRING`",
						"short": "Primary artist of the song",
					},
					map[string]any{
						"name": "artists",
						"title": "Artists",
						"type": "`$ARRAY`",
						"short": "List of all artists involved",
					},
					map[string]any{
						"name": "coverArt",
						"title": "Cover Art",
						"type": "`$STRING`",
						"short": "URL to cover art image",
						"format": "uri",
					},
					map[string]any{
						"name": "duration",
						"title": "Duration",
						"type": "`$INTEGER`",
						"short": "Duration in seconds",
					},
					map[string]any{
						"name": "explicit",
						"title": "Explicit",
						"type": "`$BOOLEAN`",
						"short": "Whether the song contains explicit content",
					},
					map[string]any{
						"name": "genre",
						"title": "Genre",
						"type": "`$STRING`",
						"short": "Primary genre",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier of the song",
					},
					map[string]any{
						"name": "isrc",
						"title": "Isrc",
						"type": "`$STRING`",
						"short": "International Standard Recording Code",
					},
					map[string]any{
						"name": "label",
						"title": "Label",
						"type": "`$STRING`",
						"short": "Record label",
					},
					map[string]any{
						"name": "lyrics",
						"title": "Lyrics",
						"type": "`$STRING`",
						"short": "Full lyrics of the song",
					},
					map[string]any{
						"name": "popularity",
						"title": "Popularity",
						"type": "`$INTEGER`",
						"short": "Popularity score (0-100)",
					},
					map[string]any{
						"name": "releaseDate",
						"title": "Release Date",
						"type": "`$STRING`",
						"short": "Release date of the song",
						"format": "date",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Title of the song",
					},
					map[string]any{
						"name": "trackNumber",
						"title": "Track Number",
						"type": "`$INTEGER`",
						"short": "Track number on album",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "song",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api/song/{songId}",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "song",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"api",
									"song",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"songId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "song_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
