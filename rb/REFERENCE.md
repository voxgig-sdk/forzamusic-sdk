# Forzamusic Ruby SDK Reference

Complete API reference for the Forzamusic Ruby SDK.


## ForzamusicSDK

### Constructor

```ruby
require_relative 'Forzamusic_sdk'

client = ForzamusicSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ForzamusicSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ForzamusicSDK.test
```


### Instance Methods

#### `Album(data = nil)`

Create a new `Album` entity instance. Pass `nil` for no initial data.

#### `Lyric(data = nil)`

Create a new `Lyric` entity instance. Pass `nil` for no initial data.

#### `Search(data = nil)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Song(data = nil)`

Create a new `Song` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AlbumEntity

```ruby
album = client.Album
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `String` | No |  |
| `cover_art` | `String` | No |  |
| `genre` | `String` | No |  |
| `id` | `String` | No |  |
| `label` | `String` | No |  |
| `release_date` | `String` | No |  |
| `title` | `String` | No |  |
| `total_track` | `Integer` | No |  |
| `track` | `Array` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Album.load({ "id" => "album_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlbumEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LyricEntity

```ruby
lyric = client.Lyric
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | `String` | No |  |
| `lyric` | `String` | No |  |
| `song_id` | `String` | No |  |
| `success` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Lyric.load({ "id" => "lyric_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LyricEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SearchEntity

```ruby
search = client.Search
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `String` | No |  |
| `album_id` | `String` | No |  |
| `artist` | `String` | No |  |
| `cover_art` | `String` | No |  |
| `duration` | `Integer` | No |  |
| `genre` | `String` | No |  |
| `id` | `String` | No |  |
| `release_date` | `String` | No |  |
| `title` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Search.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SongEntity

```ruby
song = client.Song
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `String` | No |  |
| `album_id` | `String` | No |  |
| `artist` | `String` | No |  |
| `cover_art` | `String` | No |  |
| `duration` | `Integer` | No |  |
| `explicit` | `Boolean` | No |  |
| `genre` | `String` | No |  |
| `id` | `String` | No |  |
| `isrc` | `String` | No |  |
| `label` | `String` | No |  |
| `lyric` | `String` | No |  |
| `popularity` | `Integer` | No |  |
| `release_date` | `String` | No |  |
| `title` | `String` | No |  |
| `track_number` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Song.load({ "id" => "song_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SongEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ForzamusicSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

