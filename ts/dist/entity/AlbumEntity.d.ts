import { ForzamusicEntityBase } from '../ForzamusicEntityBase';
import type { ForzamusicSDK } from '../ForzamusicSDK';
import type { Control } from '../types';
import type { Album, AlbumLoadMatch } from '../ForzamusicTypes';
declare class AlbumEntity extends ForzamusicEntityBase<Album> {
    constructor(client: ForzamusicSDK, entopts: any);
    make(this: AlbumEntity): AlbumEntity;
    load(this: any, reqmatch?: AlbumLoadMatch, ctrl?: Control): Promise<AlbumEntity>;
}
export { AlbumEntity };
