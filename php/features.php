<?php
declare(strict_types=1);

// Forzamusic SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ForzamusicFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ForzamusicBaseFeature();
            case "test":
                return new ForzamusicTestFeature();
            default:
                return new ForzamusicBaseFeature();
        }
    }
}
