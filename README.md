# Forzamusic SDK

Curated open music collection with 50M+ tracks, lyrics, and album metadata for radio-style streaming and developer experimentation

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About ForzaMusic API

ForzaMusic API is a community-listed music data service indexed on [Free Public APIs](https://freepublicapis.com/forzamusic-api). It advertises itself as the largest open collection of curated music tracks, intended for radio-style streaming, educational projects, and developer experimentation.

What the catalogue listing describes:

- A library of 50M+ songs with associated metadata
- Lyrics content alongside song records
- Album information linked to tracks
- Search and analytics features over the catalogue

Operational notes: the public catalogue entry reports the upstream service as currently unreliable, and neither authentication requirements nor rate limits are documented. Treat availability as best-effort and verify endpoint behaviour against the live server before relying on it.

## Try it

**TypeScript**
```bash
npm install forzamusic
```

**Python**
```bash
pip install forzamusic-sdk
```

**PHP**
```bash
composer require voxgig/forzamusic-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/forzamusic-sdk/go
```

**Ruby**
```bash
gem install forzamusic-sdk
```

**Lua**
```bash
luarocks install forzamusic-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ForzamusicSDK } from 'forzamusic'

const client = new ForzamusicSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o forzamusic-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "forzamusic": {
      "command": "/abs/path/to/forzamusic-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Album** | Album records that group songs and carry release-level metadata. | `/api/album/{albumId}` |
| **Lyric** | Lyric content associated with songs in the catalogue. | `/api/lyrics/{songId}` |
| **Search** | Search operations across the music catalogue (songs, albums, lyrics). | `/api/search` |
| **Song** | Individual song records with metadata such as title, artist, and album linkage. | `/api/song/{songId}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from forzamusic_sdk import ForzamusicSDK

client = ForzamusicSDK({})


# Load a specific album
album, err = client.Album(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'forzamusic_sdk.php';

$client = new ForzamusicSDK([]);


// Load a specific album
[$album, $err] = $client->Album(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/forzamusic-sdk/go"

client := sdk.NewForzamusicSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Forzamusic_sdk"

client = ForzamusicSDK.new({})


# Load a specific album
album, err = client.Album(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("forzamusic_sdk")

local client = sdk.new({})


-- Load a specific album
local album, err = client:Album(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ForzamusicSDK.test()
const result = await client.Album().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ForzamusicSDK.test(None, None)
result, err = client.Album(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ForzamusicSDK::test(null, null);
[$result, $err] = $client->Album(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Album(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ForzamusicSDK.test(nil, nil)
result, err = client.Album(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Album(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the ForzaMusic API

- Upstream: [https://forzamusic-api-official.vercel.app](https://forzamusic-api-official.vercel.app)
- API docs: [https://freepublicapis.com/forzamusic-api](https://freepublicapis.com/forzamusic-api)

---

Generated from the ForzaMusic API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
