import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';
import type { TypeArtistsSkeleton } from './TypeArtists';

export interface TypeArtistListFields {
	title: EntryFieldTypes.Symbol;
	artists: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeArtistsSkeleton>
	>;
}

export type TypeArtistListSkeleton = EntrySkeletonType<
	TypeArtistListFields,
	'artistList'
>;
export type TypeArtistList<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeArtistListSkeleton, Modifiers, Locales>;
