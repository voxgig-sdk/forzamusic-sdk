package voxgigforzamusicsdk

import (
	"github.com/voxgig-sdk/forzamusic-sdk/core"
	"github.com/voxgig-sdk/forzamusic-sdk/entity"
	"github.com/voxgig-sdk/forzamusic-sdk/feature"
	_ "github.com/voxgig-sdk/forzamusic-sdk/utility"
)

// Type aliases preserve external API.
type ForzamusicSDK = core.ForzamusicSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ForzamusicEntity = core.ForzamusicEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ForzamusicError = core.ForzamusicError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAlbumEntityFunc = func(client *core.ForzamusicSDK, entopts map[string]any) core.ForzamusicEntity {
		return entity.NewAlbumEntity(client, entopts)
	}
	core.NewLyricEntityFunc = func(client *core.ForzamusicSDK, entopts map[string]any) core.ForzamusicEntity {
		return entity.NewLyricEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.ForzamusicSDK, entopts map[string]any) core.ForzamusicEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewSongEntityFunc = func(client *core.ForzamusicSDK, entopts map[string]any) core.ForzamusicEntity {
		return entity.NewSongEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewForzamusicSDK = core.NewForzamusicSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
