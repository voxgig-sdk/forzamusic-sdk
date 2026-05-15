<?php
declare(strict_types=1);

// Forzamusic SDK exists test

require_once __DIR__ . '/../forzamusic_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ForzamusicSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
