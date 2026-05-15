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
| `options["apikey"]` | `str` | API key for authentication. |
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

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## AlbumEntity

```python
album = client.Album()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Album().load({"id": "album_id"})
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
| `language` | ``$STRING`` | No |  |
| `lyric` | ``$STRING`` | No |  |
| `song_id` | ``$STRING`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Lyric().load({"id": "lyric_id"})
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Search().list({})
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Song().load({"id": "song_id"})
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

