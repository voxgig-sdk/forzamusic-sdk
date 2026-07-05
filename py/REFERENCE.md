# Forzamusic Python SDK Reference

Complete API reference for the Forzamusic Python SDK.


## ForzamusicSDK

### Constructor

```python
from forzamusic_sdk import ForzamusicSDK

client = ForzamusicSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ForzamusicSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ForzamusicSDK.test()
```


### Instance Methods

#### `Album(data=None)`

Create a new `AlbumEntity` instance. Pass `None` for no initial data.

#### `Lyric(data=None)`

Create a new `LyricEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `Song(data=None)`

Create a new `SongEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AlbumEntity

```python
album = client.Album()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `str` | No |  |
| `cover_art` | `str` | No |  |
| `genre` | `str` | No |  |
| `id` | `str` | No |  |
| `label` | `str` | No |  |
| `release_date` | `str` | No |  |
| `title` | `str` | No |  |
| `total_track` | `int` | No |  |
| `track` | `list` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Album().load({"id": "album_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlbumEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LyricEntity

```python
lyric = client.Lyric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | `str` | No |  |
| `lyric` | `str` | No |  |
| `song_id` | `str` | No |  |
| `success` | `bool` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Lyric().load({"id": "lyric_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LyricEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `str` | No |  |
| `album_id` | `str` | No |  |
| `artist` | `str` | No |  |
| `cover_art` | `str` | No |  |
| `duration` | `int` | No |  |
| `genre` | `str` | No |  |
| `id` | `str` | No |  |
| `release_date` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Search().list()
for search in results:
    print(search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SongEntity

```python
song = client.Song()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `str` | No |  |
| `album_id` | `str` | No |  |
| `artist` | `str` | No |  |
| `cover_art` | `str` | No |  |
| `duration` | `int` | No |  |
| `explicit` | `bool` | No |  |
| `genre` | `str` | No |  |
| `id` | `str` | No |  |
| `isrc` | `str` | No |  |
| `label` | `str` | No |  |
| `lyric` | `str` | No |  |
| `popularity` | `int` | No |  |
| `release_date` | `str` | No |  |
| `title` | `str` | No |  |
| `track_number` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Song().load({"id": "song_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SongEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ForzamusicSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

