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
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## AlbumEntity

```php
$album = $client->Album();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Album()->load(["id" => "album_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): AlbumEntity`

Create a new `AlbumEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## LyricEntity

```php
$lyric = $client->Lyric();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language` | ``$STRING`` | No |  |
| `lyric` | ``$STRING`` | No |  |
| `song_id` | ``$STRING`` | No |  |
| `success` | ``$BOOLEAN`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Lyric()->load(["id" => "lyric_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): LyricEntity`

Create a new `LyricEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Search()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SongEntity

```php
$song = $client->Song();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Song()->load(["id" => "song_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SongEntity`

Create a new `SongEntity` instance with the same client and
options.

#### `getName(): string`

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

