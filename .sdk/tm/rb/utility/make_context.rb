# Forzamusic SDK utility: make_context
require_relative '../core/context'
module ForzamusicUtilities
  MakeContext = ->(ctxmap, basectx) {
    ForzamusicContext.new(ctxmap, basectx)
  }
end
