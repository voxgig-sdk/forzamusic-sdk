# Forzamusic SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ForzamusicUtility.registrar = ->(u) {
  u.clean = ForzamusicUtilities::Clean
  u.done = ForzamusicUtilities::Done
  u.make_error = ForzamusicUtilities::MakeError
  u.feature_add = ForzamusicUtilities::FeatureAdd
  u.feature_hook = ForzamusicUtilities::FeatureHook
  u.feature_init = ForzamusicUtilities::FeatureInit
  u.fetcher = ForzamusicUtilities::Fetcher
  u.make_fetch_def = ForzamusicUtilities::MakeFetchDef
  u.make_context = ForzamusicUtilities::MakeContext
  u.make_options = ForzamusicUtilities::MakeOptions
  u.make_request = ForzamusicUtilities::MakeRequest
  u.make_response = ForzamusicUtilities::MakeResponse
  u.make_result = ForzamusicUtilities::MakeResult
  u.make_point = ForzamusicUtilities::MakePoint
  u.make_spec = ForzamusicUtilities::MakeSpec
  u.make_url = ForzamusicUtilities::MakeUrl
  u.param = ForzamusicUtilities::Param
  u.prepare_auth = ForzamusicUtilities::PrepareAuth
  u.prepare_body = ForzamusicUtilities::PrepareBody
  u.prepare_headers = ForzamusicUtilities::PrepareHeaders
  u.prepare_method = ForzamusicUtilities::PrepareMethod
  u.prepare_params = ForzamusicUtilities::PrepareParams
  u.prepare_path = ForzamusicUtilities::PreparePath
  u.prepare_query = ForzamusicUtilities::PrepareQuery
  u.result_basic = ForzamusicUtilities::ResultBasic
  u.result_body = ForzamusicUtilities::ResultBody
  u.result_headers = ForzamusicUtilities::ResultHeaders
  u.transform_request = ForzamusicUtilities::TransformRequest
  u.transform_response = ForzamusicUtilities::TransformResponse
}
