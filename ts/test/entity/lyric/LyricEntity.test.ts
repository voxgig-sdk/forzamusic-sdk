

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ForzamusicSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LyricEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FORZAMUSIC_TEST_LIVE=TRUE.
  afterEach(liveDelay('FORZAMUSIC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ForzamusicSDK.test()
    const ent = testsdk.Lyric()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FORZAMUSIC_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'lyric.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"language","req":false,"short":"Language of the lyrics","type":"`$STRING`","index$":1},{"active":true,"name":"lyrics","req":false,"short":"Full lyrics of the song","type":"`$STRING`","index$":2},{"active":true,"name":"songId","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"success","req":false,"type":"`$BOOLEAN`","index$":4}],"id":{"field":"id","name":"id"},"name":"lyric","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"song_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/lyrics/{songId}","json":"{\"operationId\":\"getLyrics\",\"parameters\":[{\"description\":\"Unique identifier of the song\",\"in\":\"path\",\"name\":\"songId\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"language\":{\"description\":\"Language of the lyrics\",\"type\":\"string\"},\"lyrics\":{\"description\":\"Full lyrics of the song\",\"type\":\"string\"},\"songId\":{\"type\":\"string\"},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Lyrics retrieved successfully\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Lyrics not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"success\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/lyrics/{songId}","rename":{"param":{"songId":"id"}},"segments":[{"lit":"api"},{"lit":"lyrics"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"lyric","name__orig":"lyric","Name":"Lyric","name_":"lyric","name-":"lyric","NAME":"LYRIC","index$":1}, {"active":true,"entity":"lyric","key$":"BasicLyricFlow","kind":"basic","name":"BasicLyricFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"lyric_ref01","srcdatavar":"lyric_ref01_data","suffix":"_dt0"},"match":{"id":"lyric01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-lyric_ref01"}}],"index$":0}]}, 'Lyric')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let lyric_ref01_data = Object.values(setup.data.existing.lyric)[0] as any

    // LOAD
    const lyric_ref01_ent = client.Lyric()
    const lyric_ref01_match_dt0: any = {}
    lyric_ref01_match_dt0.id = lyric_ref01_data.id
    const lyric_ref01_data_dt0 = (await lyric_ref01_ent.load(lyric_ref01_match_dt0)).data()
    assert(lyric_ref01_data_dt0.id === lyric_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/lyric/LyricTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ForzamusicSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['lyric01','lyric02','lyric03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FORZAMUSIC_TEST_LYRIC_ENTID': idmap,
    'FORZAMUSIC_TEST_LIVE': 'FALSE',
    'FORZAMUSIC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FORZAMUSIC_TEST_LYRIC_ENTID']

  const live = 'TRUE' === env.FORZAMUSIC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FORZAMUSIC_TEST_LYRIC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ForzamusicSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
