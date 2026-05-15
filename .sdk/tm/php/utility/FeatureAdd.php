<?php
declare(strict_types=1);

// Forzamusic SDK utility: feature_add

class ForzamusicFeatureAdd
{
    public static function call(ForzamusicContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
