import { ForzamusicEntityBase } from '../ForzamusicEntityBase';
import type { ForzamusicSDK } from '../ForzamusicSDK';
import type { Control } from '../types';
import type { Lyric, LyricLoadMatch } from '../ForzamusicTypes';
declare class LyricEntity extends ForzamusicEntityBase<Lyric> {
    constructor(client: ForzamusicSDK, entopts: any);
    make(this: LyricEntity): LyricEntity;
    load(this: any, reqmatch?: LyricLoadMatch, ctrl?: Control): Promise<LyricEntity>;
}
export { LyricEntity };
