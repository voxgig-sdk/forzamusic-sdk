<?php
declare(strict_types=1);

// Forzamusic SDK utility: prepare_body

class ForzamusicPrepareBody
{
    public static function call(ForzamusicContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
