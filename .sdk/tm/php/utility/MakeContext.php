<?php
declare(strict_types=1);

// Forzamusic SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ForzamusicMakeContext
{
    public static function call(array $ctxmap, ?ForzamusicContext $basectx): ForzamusicContext
    {
        return new ForzamusicContext($ctxmap, $basectx);
    }
}
