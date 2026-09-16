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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AlbumEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FORZAMUSIC_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FORZAMUSIC_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ForzamusicSDK.test();
        const ent = testsdk.Album();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FORZAMUSIC_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'album.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "artist", "req": false, "short": "Primary artist", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "artists", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "format": "uri", "name": "coverArt", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "genre", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier of the album", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "label", "req": false, "short": "Record label", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "date", "name": "releaseDate", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "title", "req": false, "short": "Album title", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "totalTracks", "req": false, "short": "Total number of tracks", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "name": "tracks", "req": false, "type": "`$ARRAY`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "album", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "album_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/album/{albumId}", "json": "{\"operationId\":\"getAlbumById\",\"parameters\":[{\"description\":\"Unique identifier of the album\",\"in\":\"path\",\"name\":\"albumId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"artist\":{\"description\":\"Primary artist\",\"type\":\"string\"},\"artists\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"coverArt\":{\"format\":\"uri\",\"type\":\"string\"},\"genre\":{\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the album\",\"type\":\"string\"},\"label\":{\"description\":\"Record label\",\"type\":\"string\"},\"releaseDate\":{\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Album title\",\"type\":\"string\"},\"totalTracks\":{\"description\":\"Total number of tracks\",\"type\":\"integer\"},\"tracks\":{\"items\":{\"properties\":{\"album\":{\"description\":\"Album name\",\"type\":\"string\"},\"albumId\":{\"description\":\"Album identifier\",\"type\":\"string\"},\"artist\":{\"description\":\"Primary artist of the song\",\"type\":\"string\"},\"artists\":{\"description\":\"List of all artists involved\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"coverArt\":{\"description\":\"URL to cover art image\",\"format\":\"uri\",\"type\":\"string\"},\"duration\":{\"description\":\"Duration in seconds\",\"type\":\"integer\"},\"genre\":{\"description\":\"Primary genre\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier of the song\",\"type\":\"string\"},\"releaseDate\":{\"description\":\"Release date of the song\",\"format\":\"date\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the song\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Album details retrieved successfully\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Album not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/album/{albumId}", "rename": { "param": { "albumId": "id" } }, "segments": [{ "lit": "api" }, { "lit": "album" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "album", "name__orig": "album", "Name": "Album", "name_": "album", "name-": "album", "NAME": "ALBUM", "index$": 0 }, { "active": true, "entity": "album", "key$": "BasicAlbumFlow", "kind": "basic", "name": "BasicAlbumFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "album_ref01", "srcdatavar": "album_ref01_data", "suffix": "_dt0" }, "match": { "id": "album01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-album_ref01" } }], "index$": 0 }] }, 'Album');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let album_ref01_data = Object.values(setup.data.existing.album)[0];
        // LOAD
        const album_ref01_ent = client.Album();
        const album_ref01_match_dt0 = {};
        album_ref01_match_dt0.id = album_ref01_data.id;
        const album_ref01_data_dt0 = (await album_ref01_ent.load(album_ref01_match_dt0)).data();
        (0, node_assert_1.default)(album_ref01_data_dt0.id === album_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/album/AlbumTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ForzamusicSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['album01', 'album02', 'album03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FORZAMUSIC_TEST_ALBUM_ENTID': idmap,
        'FORZAMUSIC_TEST_LIVE': 'FALSE',
        'FORZAMUSIC_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FORZAMUSIC_TEST_ALBUM_ENTID'];
    const live = 'TRUE' === env.FORZAMUSIC_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FORZAMUSIC_TEST_ALBUM_ENTID'];
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
//# sourceMappingURL=AlbumEntity.test.js.map