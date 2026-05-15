# Forzamusic SDK utility: feature_add
module ForzamusicUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
