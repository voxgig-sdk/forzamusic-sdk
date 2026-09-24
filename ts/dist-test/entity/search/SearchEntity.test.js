"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FORZAMUSIC_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FORZAMUSIC_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ForzamusicSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FORZAMUSIC_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "album": { "a": true, "h": "Album", "n": "album", "r": false, "sh": "Album name", "t": "`$STRING`", "key$": "album", "index$": 0 }, "albumId": { "a": true, "h": "Album Id", "n": "albumId", "r": false, "sh": "Album identifier", "t": "`$STRING`", "key$": "albumId", "index$": 1 }, "artist": { "a": true, "h": "Artist", "n": "artist", "r": false, "sh": "Primary artist of the song", "t": "`$STRING`", "key$": "artist", "index$": 2 }, "artists": { "a": true, "h": "Artists", "n": "artists", "r": false, "sh": "List of all artists involved", "t": "`$ARRAY`", "key$": "artists", "index$": 3 }, "coverArt": { "a": true, "fo": "uri", "h": "Cover Art", "n": "coverArt", "r": false, "sh": "URL to cover art image", "t": "`$STRING`", "key$": "coverArt", "index$": 4 }, "duration": { "a": true, "h": "Duration", "n": "duration", "r": false, "sh": "Duration in seconds", "t": "`$INTEGER`", "key$": "duration", "index$": 5 }, "genre": { "a": true, "h": "Genre", "n": "genre", "r": false, "sh": "Primary genre", "t": "`$STRING`", "key$": "genre", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier of the song", "t": "`$STRING`", "key$": "id", "index$": 7 }, "releaseDate": { "a": true, "fo": "date", "h": "Release Date", "n": "releaseDate", "r": false, "sh": "Release date of the song", "t": "`$STRING`", "key$": "releaseDate", "index$": 8 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Title of the song", "t": "`$STRING`", "key$": "title", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/search", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "Shape of You", "k": "query", "n": "query", "or": "query", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/search", "q": { "exist": ["limit", "offset", "query"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 2 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search', { "GET /api/search": { "protocol": "http", "operationId": "searchSongs", "responses": { "200": { "description": "Successful search response", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "example": true, "key$": "success", "type": "boolean" }, "results": { "items": { "properties": { "album": { "description": "Album name", "type": "string", "key$": "album" }, "albumId": { "description": "Album identifier", "type": "string", "key$": "albumId" }, "artist": { "description": "Primary artist of the song", "type": "string", "key$": "artist" }, "artists": { "description": "List of all artists involved", "items": { "type": "string" }, "type": "array", "key$": "artists" }, "coverArt": { "description": "URL to cover art image", "format": "uri", "type": "string", "key$": "coverArt" }, "duration": { "description": "Duration in seconds", "type": "integer", "key$": "duration" }, "genre": { "description": "Primary genre", "type": "string", "key$": "genre" }, "id": { "description": "Unique identifier of the song", "type": "string", "key$": "id" }, "releaseDate": { "description": "Release date of the song", "format": "date", "type": "string", "key$": "releaseDate" }, "title": { "description": "Title of the song", "type": "string", "key$": "title" } }, "type": "object", "x-ref": "#/components/schemas/Song", "index$": 0 }, "key$": "results", "type": "array" }, "total": { "description": "Total number of results found", "key$": "total", "type": "integer" }, "limit": { "key$": "limit", "type": "integer" }, "offset": { "key$": "offset", "type": "integer" } } } } } }, "400": { "description": "Bad request - Invalid query parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "429": { "description": "Too many requests - Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "query", "in": "query", "description": "Search query for song, artist, or album", "required": true, "schema": { "type": "string" }, "example": "Shape of You", "index$": 0 }, { "name": "limit", "in": "query", "description": "Maximum number of results to return", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 100 }, "index$": 1 }, { "name": "offset", "in": "query", "description": "Number of results to skip for pagination", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "index$": 2 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ForzamusicSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FORZAMUSIC_TEST_SEARCH_ENTID': idmap,
        'FORZAMUSIC_TEST_LIVE': 'FALSE',
        'FORZAMUSIC_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FORZAMUSIC_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.FORZAMUSIC_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FORZAMUSIC_TEST_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ForzamusicSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FORZAMUSIC_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SearchEntity.test.js.map