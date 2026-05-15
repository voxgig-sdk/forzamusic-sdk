<?php
declare(strict_types=1);

// Forzamusic SDK utility: result_body

class ForzamusicResultBody
{
    public static function call(ForzamusicContext $ctx): ?ForzamusicResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
