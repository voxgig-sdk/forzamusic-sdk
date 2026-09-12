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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"short": "Primary artist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artists",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "uri",
						"name": "coverArt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "genre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier of the album",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"short": "Record label",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "releaseDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Album title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "totalTracks",
						"short": "Total number of tracks",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tracks",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "album_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/album/{albumId}",
								"rename": map[string]any{
									"param": map[string]any{
										"albumId": "id",
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"album",
									"{id}",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"short": "Language of the lyrics",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lyrics",
						"short": "Full lyrics of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "songId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "success",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "song_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/lyrics/{songId}",
								"rename": map[string]any{
									"param": map[string]any{
										"songId": "id",
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"lyrics",
									"{id}",
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
						"short": "Album name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "albumId",
						"short": "Album identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artist",
						"short": "Primary artist of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artists",
						"short": "List of all artists involved",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "uri",
						"name": "coverArt",
						"short": "URL to cover art image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"short": "Duration in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "genre",
						"short": "Primary genre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "releaseDate",
						"short": "Release date of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the song",
						"type": "`$STRING`",
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "Shape of You",
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"api",
									"search",
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
						"short": "Album name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "albumId",
						"short": "Album identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artist",
						"short": "Primary artist of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "artists",
						"short": "List of all artists involved",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "uri",
						"name": "coverArt",
						"short": "URL to cover art image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration",
						"short": "Duration in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "explicit",
						"short": "Whether the song contains explicit content",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "genre",
						"short": "Primary genre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isrc",
						"short": "International Standard Recording Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "label",
						"short": "Record label",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lyrics",
						"short": "Full lyrics of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "popularity",
						"short": "Popularity score (0-100)",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date",
						"name": "releaseDate",
						"short": "Release date of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the song",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trackNumber",
						"short": "Track number on album",
						"type": "`$INTEGER`",
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
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "song_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/song/{songId}",
								"rename": map[string]any{
									"param": map[string]any{
										"songId": "id",
									},
								},
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
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"song",
									"{id}",
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
