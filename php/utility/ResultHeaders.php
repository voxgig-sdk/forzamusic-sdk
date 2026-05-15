<?php
declare(strict_types=1);

// Forzamusic SDK utility: result_headers

class ForzamusicResultHeaders
{
    public static function call(ForzamusicContext $ctx): ?ForzamusicResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
