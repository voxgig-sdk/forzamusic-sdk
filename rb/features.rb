# Forzamusic SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ForzamusicFeatures
  def self.make_feature(name)
    case name
    when "base"
      ForzamusicBaseFeature.new
    when "ratelimit"
      ForzamusicRatelimitFeature.new
    when "retry"
      ForzamusicRetryFeature.new
    when "test"
      ForzamusicTestFeature.new
    when "timeout"
      ForzamusicTimeoutFeature.new
    else
      ForzamusicBaseFeature.new
    end
  end
end
