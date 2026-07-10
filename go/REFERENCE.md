# Forzamusic Golang SDK Reference

Complete API reference for the Forzamusic Golang SDK.


## ForzamusicSDK

### Constructor

```go
func NewForzamusicSDK(options map[string]any) *ForzamusicSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *ForzamusicSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *ForzamusicSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Album(data map[string]any) ForzamusicEntity`

Create a new `Album` entity instance. Pass `nil` for no initial data.

#### `Lyric(data map[string]any) ForzamusicEntity`

Create a new `Lyric` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) ForzamusicEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Song(data map[string]any) ForzamusicEntity`

Create a new `Song` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AlbumEntity

```go
album := client.Album(nil)
fmt.Println(album.GetName()) // "album"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No |  |
| `cover_art` | `string` | No |  |
| `genre` | `string` | No |  |
| `id` | `string` | No |  |
| `label` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `total_track` | `int` | No |  |
| `track` | `[]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Album(nil).Load(map[string]any{"id": "album_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlbumEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LyricEntity

```go
lyric := client.Lyric(nil)
fmt.Println(lyric.GetName()) // "lyric"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | `string` | No |  |
| `lyric` | `string` | No |  |
| `song_id` | `string` | No |  |
| `success` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Lyric(nil).Load(map[string]any{"id": "lyric_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LyricEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `string` | No |  |
| `album_id` | `string` | No |  |
| `artist` | `string` | No |  |
| `cover_art` | `string` | No |  |
| `duration` | `int` | No |  |
| `genre` | `string` | No |  |
| `id` | `string` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SongEntity

```go
song := client.Song(nil)
fmt.Println(song.GetName()) // "song"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `string` | No |  |
| `album_id` | `string` | No |  |
| `artist` | `string` | No |  |
| `cover_art` | `string` | No |  |
| `duration` | `int` | No |  |
| `explicit` | `bool` | No |  |
| `genre` | `string` | No |  |
| `id` | `string` | No |  |
| `isrc` | `string` | No |  |
| `label` | `string` | No |  |
| `lyric` | `string` | No |  |
| `popularity` | `int` | No |  |
| `release_date` | `string` | No |  |
| `title` | `string` | No |  |
| `track_number` | `int` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Song(nil).Load(map[string]any{"id": "song_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SongEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewForzamusicSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

