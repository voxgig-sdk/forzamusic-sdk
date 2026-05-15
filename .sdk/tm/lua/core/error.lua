-- Forzamusic SDK error

local ForzamusicError = {}
ForzamusicError.__index = ForzamusicError


function ForzamusicError.new(code, msg, ctx)
  local self = setmetatable({}, ForzamusicError)
  self.is_sdk_error = true
  self.sdk = "Forzamusic"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ForzamusicError:error()
  return self.msg
end


function ForzamusicError:__tostring()
  return self.msg
end


return ForzamusicError
