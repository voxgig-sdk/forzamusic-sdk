# Forzamusic PHP SDK Reference

Complete API reference for the Forzamusic PHP SDK.


## ForzamusicSDK

### Constructor

```php
require_once __DIR__ . '/forzamusic_sdk.php';

$client = new ForzamusicSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ForzamusicSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ForzamusicSDK::test();
```


### Instance Methods

#### `Album($data = null)`

Create a new `AlbumEntity` instance. Pass `null` for no initial data.

#### `Lyric($data = null)`

Create a new `LyricEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `Song($data = null)`

Create a new `SongEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): ForzamusicUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AlbumEntity

```php
$album = $client->Album();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `artist` | `string` | No | Primary artist |
| `artists` | `array` | No |  |
| `coverArt` | `string` | No |  |
| `genre` | `string` | No |  |
| `id` | `string` | No | Unique identifier of the album |
| `label` | `string` | No | Record label |
| `releaseDate` | `string` | No |  |
| `title` | `string` | No | Album title |
| `totalTracks` | `int` | No | Total number of tracks |
| `tracks` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Album()->load(["id" => "album_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlbumEntity`

Create a new `AlbumEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LyricEntity

```php
$lyric = $client->Lyric();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `language` | `string` | No | Language of the lyrics |
| `lyrics` | `string` | No | Full lyrics of the song |
| `songId` | `string` | No |  |
| `success` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Lyric()->load(["id" => "lyric_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LyricEntity`

Create a new `LyricEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `string` | No | Album name |
| `albumId` | `string` | No | Album identifier |
| `artist` | `string` | No | Primary artist of the song |
| `artists` | `array` | No | List of all artists involved |
| `coverArt` | `string` | No | URL to cover art image |
| `duration` | `int` | No | Duration in seconds |
| `genre` | `string` | No | Primary genre |
| `id` | `string` | No | Unique identifier of the song |
| `releaseDate` | `string` | No | Release date of the song |
| `title` | `string` | No | Title of the song |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Search()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SongEntity

```php
$song = $client->Song();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `album` | `string` | No | Album name |
| `albumId` | `string` | No | Album identifier |
| `artist` | `string` | No | Primary artist of the song |
| `artists` | `array` | No | List of all artists involved |
| `coverArt` | `string` | No | URL to cover art image |
| `duration` | `int` | No | Duration in seconds |
| `explicit` | `bool` | No | Whether the song contains explicit content |
| `genre` | `string` | No | Primary genre |
| `id` | `string` | No | Unique identifier of the song |
| `isrc` | `string` | No | International Standard Recording Code |
| `label` | `string` | No | Record label |
| `lyrics` | `string` | No | Full lyrics of the song |
| `popularity` | `int` | No | Popularity score (0-100) |
| `releaseDate` | `string` | No | Release date of the song |
| `title` | `string` | No | Title of the song |
| `trackNumber` | `int` | No | Track number on album |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Song()->load(["id" => "song_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SongEntity`

Create a new `SongEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new ForzamusicSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

