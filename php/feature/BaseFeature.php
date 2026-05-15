<?php
declare(strict_types=1);

// Forzamusic SDK base feature

class ForzamusicBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ForzamusicContext $ctx, array $options): void {}
    public function PostConstruct(ForzamusicContext $ctx): void {}
    public function PostConstructEntity(ForzamusicContext $ctx): void {}
    public function SetData(ForzamusicContext $ctx): void {}
    public function GetData(ForzamusicContext $ctx): void {}
    public function GetMatch(ForzamusicContext $ctx): void {}
    public function SetMatch(ForzamusicContext $ctx): void {}
    public function PrePoint(ForzamusicContext $ctx): void {}
    public function PreSpec(ForzamusicContext $ctx): void {}
    public function PreRequest(ForzamusicContext $ctx): void {}
    public function PreResponse(ForzamusicContext $ctx): void {}
    public function PreResult(ForzamusicContext $ctx): void {}
    public function PreDone(ForzamusicContext $ctx): void {}
    public function PreUnexpected(ForzamusicContext $ctx): void {}
}
