import { ForzamusicEntityBase } from '../ForzamusicEntityBase';
import type { ForzamusicSDK } from '../ForzamusicSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../ForzamusicTypes';
declare class SearchEntity extends ForzamusicEntityBase<Search> {
    constructor(client: ForzamusicSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
