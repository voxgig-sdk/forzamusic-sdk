# Forzamusic Lua SDK Reference

Complete API reference for the Forzamusic Lua SDK.


## ForzamusicSDK

### Constructor

```lua
local sdk = require("forzamusic_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Album(data)`

Create a new `Album` entity instance. Pass `nil` for no initial data.

#### `Lyric(data)`

Create a new `Lyric` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `Song(data)`

Create a new `Song` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AlbumEntity

```lua
local album = client:Album(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | ``$STRING`` | No |  |
| `cover_art` | ``$STRING`` | No |  |
| `genre` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `label` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `total_track` | ``$INTEGER`` | No |  |
| `track` | ``$ARRAY`` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Album(nil):load({ id = "album_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlbumEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LyricEntity

```lua
local lyric = client:Lyric(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | ``$STRING`` | No |  |
| `lyric` | ``$STRING`` | No |  |
| `song_id` | ``$STRING`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Lyric(nil):load({ id = "lyric_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LyricEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | ``$STRING`` | No |  |
| `album_id` | ``$STRING`` | No |  |
| `artist` | ``$STRING`` | No |  |
| `cover_art` | ``$STRING`` | No |  |
| `duration` | ``$INTEGER`` | No |  |
| `genre` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `release_date` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Search(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SongEntity

```lua
local song = client:Song(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | ``$STRING`` | No |  |
| `album_id` | ``$STRING`` | No |  |
| `artist` | ``$STRING`` | No |  |
| `cover_art` | ``$STRING`` | No |  |
| `duration` | ``$INTEGER`` | No |  |
| `explicit` | ``$BOOLEAN`` | No |  |
| `genre` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `isrc` | ``$STRING`` | No |  |
| `label` | ``$STRING`` | No |  |
| `lyric` | ``$STRING`` | No |  |
| `popularity` | ``$INTEGER`` | No |  |
| `release_date` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |
| `track_number` | ``$INTEGER`` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Song(nil):load({ id = "song_id" }, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SongEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

