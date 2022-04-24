import AlbumType from '@Models/Albums/AlbumType';
import SongType from '@Models/Songs/SongType';

import EntryWithTagUsagesContract from './Base/EntryWithTagUsagesContract';
import EntryThumbContract from './EntryThumbContract';

// Base data contract for entries from the API.
// Corresponds to C# datacontract EntryForApiContract.
export default interface EntryContract extends EntryWithTagUsagesContract {
	additionalNames?: string;

	artistString?: string;

	artistType?: string;

	discType?: AlbumType;

	entryType: string;

	eventCategory?: string;

	id: number;

	mainPicture?: EntryThumbContract;

	name: string;

	releaseEventSeriesName?: string;

	songListFeaturedCategory?: string;

	songType?: SongType;

	status?: string;

	tagCategoryName?: string;

	urlSlug?: string;
}
