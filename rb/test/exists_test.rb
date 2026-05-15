# Forzamusic SDK exists test

require "minitest/autorun"
require_relative "../Forzamusic_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ForzamusicSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
