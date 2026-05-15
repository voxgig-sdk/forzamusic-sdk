# Forzamusic TypeScript SDK Reference

Complete API reference for the Forzamusic TypeScript SDK.


## ForzamusicSDK

### Constructor

```ts
new ForzamusicSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ForzamusicSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ForzamusicSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ForzamusicSDK` instance in test mode.


### Instance Methods

#### `Album(data?: object)`

Create a new `Album` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlbumEntity` instance.

#### `Lyric(data?: object)`

Create a new `Lyric` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LyricEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `Song(data?: object)`

Create a new `Song` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SongEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ForzamusicSDK.test()`.

**Returns:** `ForzamusicSDK` instance in test mode.


---

## AlbumEntity

```ts
const album = client.Album()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Album().load({ id: 'album_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlbumEntity` instance with the same client and
options.

#### `client()`

Return the parent `ForzamusicSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LyricEntity

```ts
const lyric = client.Lyric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | ``$STRING`` | No |  |
| `lyric` | ``$STRING`` | No |  |
| `song_id` | ``$STRING`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Lyric().load({ id: 'lyric_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LyricEntity` instance with the same client and
options.

#### `client()`

Return the parent `ForzamusicSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `ForzamusicSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SongEntity

```ts
const song = client.Song()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Song().load({ id: 'song_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SongEntity` instance with the same client and
options.

#### `client()`

Return the parent `ForzamusicSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ForzamusicSDK({
  feature: {
    test: { active: true },
  }
})
```

