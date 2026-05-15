<?php
declare(strict_types=1);

// Forzamusic SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ForzamusicUtility::setRegistrar(function (ForzamusicUtility $u): void {
    $u->clean = [ForzamusicClean::class, 'call'];
    $u->done = [ForzamusicDone::class, 'call'];
    $u->make_error = [ForzamusicMakeError::class, 'call'];
    $u->feature_add = [ForzamusicFeatureAdd::class, 'call'];
    $u->feature_hook = [ForzamusicFeatureHook::class, 'call'];
    $u->feature_init = [ForzamusicFeatureInit::class, 'call'];
    $u->fetcher = [ForzamusicFetcher::class, 'call'];
    $u->make_fetch_def = [ForzamusicMakeFetchDef::class, 'call'];
    $u->make_context = [ForzamusicMakeContext::class, 'call'];
    $u->make_options = [ForzamusicMakeOptions::class, 'call'];
    $u->make_request = [ForzamusicMakeRequest::class, 'call'];
    $u->make_response = [ForzamusicMakeResponse::class, 'call'];
    $u->make_result = [ForzamusicMakeResult::class, 'call'];
    $u->make_point = [ForzamusicMakePoint::class, 'call'];
    $u->make_spec = [ForzamusicMakeSpec::class, 'call'];
    $u->make_url = [ForzamusicMakeUrl::class, 'call'];
    $u->param = [ForzamusicParam::class, 'call'];
    $u->prepare_auth = [ForzamusicPrepareAuth::class, 'call'];
    $u->prepare_body = [ForzamusicPrepareBody::class, 'call'];
    $u->prepare_headers = [ForzamusicPrepareHeaders::class, 'call'];
    $u->prepare_method = [ForzamusicPrepareMethod::class, 'call'];
    $u->prepare_params = [ForzamusicPrepareParams::class, 'call'];
    $u->prepare_path = [ForzamusicPreparePath::class, 'call'];
    $u->prepare_query = [ForzamusicPrepareQuery::class, 'call'];
    $u->result_basic = [ForzamusicResultBasic::class, 'call'];
    $u->result_body = [ForzamusicResultBody::class, 'call'];
    $u->result_headers = [ForzamusicResultHeaders::class, 'call'];
    $u->transform_request = [ForzamusicTransformRequest::class, 'call'];
    $u->transform_response = [ForzamusicTransformResponse::class, 'call'];
});
