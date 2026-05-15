package = "voxgig-sdk-forzamusic"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/forzamusic-sdk.git"
}
description = {
  summary = "Forzamusic SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["forzamusic_sdk"] = "forzamusic_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
