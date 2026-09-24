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
(0, node_test_1.describe)('SongEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FORZAMUSIC_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FORZAMUSIC_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ForzamusicSDK.test();
        const ent = testsdk.Song();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FORZAMUSIC_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'song.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "album": { "a": true, "h": "Album", "n": "album", "r": false, "sh": "Album name", "t": "`$STRING`", "key$": "album", "index$": 0 }, "albumId": { "a": true, "h": "Album Id", "n": "albumId", "r": false, "sh": "Album identifier", "t": "`$STRING`", "key$": "albumId", "index$": 1 }, "artist": { "a": true, "h": "Artist", "n": "artist", "r": false, "sh": "Primary artist of the song", "t": "`$STRING`", "key$": "artist", "index$": 2 }, "artists": { "a": true, "h": "Artists", "n": "artists", "r": false, "sh": "List of all artists involved", "t": "`$ARRAY`", "key$": "artists", "index$": 3 }, "coverArt": { "a": true, "fo": "uri", "h": "Cover Art", "n": "coverArt", "r": false, "sh": "URL to cover art image", "t": "`$STRING`", "key$": "coverArt", "index$": 4 }, "duration": { "a": true, "h": "Duration", "n": "duration", "r": false, "sh": "Duration in seconds", "t": "`$INTEGER`", "key$": "duration", "index$": 5 }, "explicit": { "a": true, "h": "Explicit", "n": "explicit", "r": false, "sh": "Whether the song contains explicit content", "t": "`$BOOLEAN`", "key$": "explicit", "index$": 6 }, "genre": { "a": true, "h": "Genre", "n": "genre", "r": false, "sh": "Primary genre", "t": "`$STRING`", "key$": "genre", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier of the song", "t": "`$STRING`", "key$": "id", "index$": 8 }, "isrc": { "a": true, "h": "Isrc", "n": "isrc", "r": false, "sh": "International Standard Recording Code", "t": "`$STRING`", "key$": "isrc", "index$": 9 }, "label": { "a": true, "h": "Label", "n": "label", "r": false, "sh": "Record label", "t": "`$STRING`", "key$": "label", "index$": 10 }, "lyrics": { "a": true, "h": "Lyrics", "n": "lyrics", "r": false, "sh": "Full lyrics of the song", "t": "`$STRING`", "key$": "lyrics", "index$": 11 }, "popularity": { "a": true, "h": "Popularity", "n": "popularity", "r": false, "sh": "Popularity score (0-100)", "t": "`$INTEGER`", "key$": "popularity", "index$": 12 }, "releaseDate": { "a": true, "fo": "date", "h": "Release Date", "n": "releaseDate", "r": false, "sh": "Release date of the song", "t": "`$STRING`", "key$": "releaseDate", "index$": 13 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Title of the song", "t": "`$STRING`", "key$": "title", "index$": 14 }, "trackNumber": { "a": true, "h": "Track Number", "n": "trackNumber", "r": false, "sh": "Track number on album", "t": "`$INTEGER`", "key$": "trackNumber", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "song", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/song/{songId}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "song_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/song/{songId}", "q": { "exist": ["id"] }, "r": { "param": { "songId": "id" } }, "s": [{ "lit": "api" }, { "lit": "song" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "song", "name__orig": "song", "Name": "Song", "name_": "song", "name-": "song", "NAME": "SONG", "index$": 3 }, { "active": true, "entity": "song", "key$": "BasicSongFlow", "kind": "basic", "name": "BasicSongFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "song_ref01", "srcdatavar": "song_ref01_data", "suffix": "_dt0" }, "m": { "id": "song01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-song_ref01" } }], "index$": 0 }] }, 'Song', { "GET /api/song/{songId}": { "protocol": "http", "operationId": "getSongById", "responses": { "200": { "description": "Song details retrieved successfully", "content": { "application/json": { "schema": { "allOf": [{ "type": "object", "properties": { "id": { "description": "Unique identifier of the song", "type": "string", "key$": "id" }, "title": { "description": "Title of the song", "type": "string", "key$": "title" }, "artist": { "description": "Primary artist of the song", "type": "string", "key$": "artist" }, "artists": { "description": "List of all artists involved", "items": { "type": "string" }, "type": "array", "key$": "artists" }, "album": { "description": "Album name", "type": "string", "key$": "album" }, "albumId": { "description": "Album identifier", "type": "string", "key$": "albumId" }, "duration": { "description": "Duration in seconds", "type": "integer", "key$": "duration" }, "releaseDate": { "description": "Release date of the song", "format": "date", "type": "string", "key$": "releaseDate" }, "genre": { "description": "Primary genre", "type": "string", "key$": "genre" }, "coverArt": { "description": "URL to cover art image", "format": "uri", "type": "string", "key$": "coverArt" } }, "x-ref": "#/components/schemas/Song", "index$": 0 }, { "type": "object", "properties": { "lyrics": { "type": "string", "description": "Full lyrics of the song", "key$": "lyrics" }, "isrc": { "type": "string", "description": "International Standard Recording Code", "key$": "isrc" }, "label": { "type": "string", "description": "Record label", "key$": "label" }, "trackNumber": { "type": "integer", "description": "Track number on album", "key$": "trackNumber" }, "popularity": { "type": "integer", "description": "Popularity score (0-100)", "key$": "popularity" }, "explicit": { "type": "boolean", "description": "Whether the song contains explicit content", "key$": "explicit" } }, "index$": 1 }], "x-ref": "#/components/schemas/SongDetail" } } } }, "404": { "description": "Song not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "success": { "type": "boolean", "example": false }, "error": { "type": "string", "description": "Error message" }, "code": { "type": "string", "description": "Error code" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "songId", "in": "path", "description": "Unique identifier of the song", "required": true, "schema": { "type": "string" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let song_ref01_data = Object.values(setup.data.existing.song)[0];
        // LOAD
        const song_ref01_ent = client.Song();
        const song_ref01_match_dt0 = {};
        song_ref01_match_dt0.id = song_ref01_data.id;
        const song_ref01_data_dt0 = (await song_ref01_ent.load(song_ref01_match_dt0)).data();
        (0, node_assert_1.default)(song_ref01_data_dt0.id === song_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/song/SongTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ForzamusicSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['song01', 'song02', 'song03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FORZAMUSIC_TEST_SONG_ENTID': idmap,
        'FORZAMUSIC_TEST_LIVE': 'FALSE',
        'FORZAMUSIC_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FORZAMUSIC_TEST_SONG_ENTID'];
    const live = 'TRUE' === env.FORZAMUSIC_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FORZAMUSIC_TEST_SONG_ENTID'];
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
//# sourceMappingURL=SongEntity.test.js.map