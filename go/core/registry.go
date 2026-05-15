package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAlbumEntityFunc func(client *ForzamusicSDK, entopts map[string]any) ForzamusicEntity

var NewLyricEntityFunc func(client *ForzamusicSDK, entopts map[string]any) ForzamusicEntity

var NewSearchEntityFunc func(client *ForzamusicSDK, entopts map[string]any) ForzamusicEntity

var NewSongEntityFunc func(client *ForzamusicSDK, entopts map[string]any) ForzamusicEntity

