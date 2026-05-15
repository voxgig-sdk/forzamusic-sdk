# Forzamusic SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ForzamusicFeatures
  def self.make_feature(name)
    case name
    when "base"
      ForzamusicBaseFeature.new
    when "test"
      ForzamusicTestFeature.new
    else
      ForzamusicBaseFeature.new
    end
  end
end
