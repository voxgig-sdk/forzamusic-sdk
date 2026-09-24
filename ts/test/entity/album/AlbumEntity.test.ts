

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AlbumEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FORZAMUSIC_TEST_LIVE=TRUE.
  afterEach(liveDelay('FORZAMUSIC_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ForzamusicSDK.test()
    const ent = testsdk.Album()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FORZAMUSIC_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'album.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"artist":{"a":true,"h":"Artist","n":"artist","r":false,"sh":"Primary artist","t":"`$STRING`","key$":"artist","index$":0},"artists":{"a":true,"h":"Artists","n":"artists","r":false,"t":"`$ARRAY`","key$":"artists","index$":1},"coverArt":{"a":true,"fo":"uri","h":"Cover Art","n":"coverArt","r":false,"t":"`$STRING`","key$":"coverArt","index$":2},"genre":{"a":true,"h":"Genre","n":"genre","r":false,"t":"`$STRING`","key$":"genre","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier of the album","t":"`$STRING`","key$":"id","index$":4},"label":{"a":true,"h":"Label","n":"label","r":false,"sh":"Record label","t":"`$STRING`","key$":"label","index$":5},"releaseDate":{"a":true,"fo":"date","h":"Release Date","n":"releaseDate","r":false,"t":"`$STRING`","key$":"releaseDate","index$":6},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Album title","t":"`$STRING`","key$":"title","index$":7},"totalTracks":{"a":true,"h":"Total Tracks","n":"totalTracks","r":false,"sh":"Total number of tracks","t":"`$INTEGER`","key$":"totalTracks","index$":8},"tracks":{"a":true,"h":"Tracks","n":"tracks","r":false,"t":"`$ARRAY`","key$":"tracks","index$":9}},"id":{"field":"id","name":"id"},"name":"album","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/album/{albumId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"album_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/album/{albumId}","q":{"exist":["id"]},"r":{"param":{"albumId":"id"}},"s":[{"lit":"api"},{"lit":"album"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"album","name__orig":"album","Name":"Album","name_":"album","name-":"album","NAME":"ALBUM","index$":0}, {"active":true,"entity":"album","key$":"BasicAlbumFlow","kind":"basic","name":"BasicAlbumFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"album_ref01","srcdatavar":"album_ref01_data","suffix":"_dt0"},"m":{"id":"album01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-album_ref01"}}],"index$":0}]}, 'Album', {"GET /api/album/{albumId}":{"protocol":"http","operationId":"getAlbumById","responses":{"200":{"description":"Album details retrieved successfully","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"string","description":"Unique identifier of the album","key$":"id"},"title":{"type":"string","description":"Album title","key$":"title"},"artist":{"type":"string","description":"Primary artist","key$":"artist"},"artists":{"type":"array","items":{"type":"string"},"key$":"artists"},"releaseDate":{"type":"string","format":"date","key$":"releaseDate"},"genre":{"type":"string","key$":"genre"},"label":{"type":"string","description":"Record label","key$":"label"},"totalTracks":{"type":"integer","description":"Total number of tracks","key$":"totalTracks"},"coverArt":{"type":"string","format":"uri","key$":"coverArt"},"tracks":{"type":"array","items":{"type":"object","properties":{"id":{"description":"Unique identifier of the song","type":"string","key$":"id"},"title":{"description":"Title of the song","type":"string","key$":"title"},"artist":{"description":"Primary artist of the song","type":"string","key$":"artist"},"artists":{"description":"List of all artists involved","items":{"type":"string"},"type":"array","key$":"artists"},"album":{"description":"Album name","type":"string","key$":"album"},"albumId":{"description":"Album identifier","type":"string","key$":"albumId"},"duration":{"description":"Duration in seconds","type":"integer","key$":"duration"},"releaseDate":{"description":"Release date of the song","format":"date","type":"string","key$":"releaseDate"},"genre":{"description":"Primary genre","type":"string","key$":"genre"},"coverArt":{"description":"URL to cover art image","format":"uri","type":"string","key$":"coverArt"}},"x-ref":"#/components/schemas/Song"},"key$":"tracks"}},"x-ref":"#/components/schemas/Album","index$":0}}}},"404":{"description":"Album not found","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"success":{"type":"boolean","example":false},"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"albumId","in":"path","description":"Unique identifier of the album","required":true,"schema":{"type":"string"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let album_ref01_data = Object.values(setup.data.existing.album)[0] as any

    // LOAD
    const album_ref01_ent = client.Album()
    const album_ref01_match_dt0: any = {}
    album_ref01_match_dt0.id = album_ref01_data.id
    const album_ref01_data_dt0 = (await album_ref01_ent.load(album_ref01_match_dt0)).data()
    assert(album_ref01_data_dt0.id === album_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/album/AlbumTestData.json')

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
    ['album01','album02','album03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FORZAMUSIC_TEST_ALBUM_ENTID': idmap,
    'FORZAMUSIC_TEST_LIVE': 'FALSE',
    'FORZAMUSIC_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FORZAMUSIC_TEST_ALBUM_ENTID']

  const live = 'TRUE' === env.FORZAMUSIC_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FORZAMUSIC_TEST_ALBUM_ENTID']
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
  
