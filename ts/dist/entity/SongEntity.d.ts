import { ForzamusicEntityBase } from '../ForzamusicEntityBase';
import type { ForzamusicSDK } from '../ForzamusicSDK';
import type { Control } from '../types';
import type { Song, SongLoadMatch } from '../ForzamusicTypes';
declare class SongEntity extends ForzamusicEntityBase<Song> {
    constructor(client: ForzamusicSDK, entopts: any);
    make(this: SongEntity): SongEntity;
    load(this: any, reqmatch?: SongLoadMatch, ctrl?: Control): Promise<SongEntity>;
}
export { SongEntity };
