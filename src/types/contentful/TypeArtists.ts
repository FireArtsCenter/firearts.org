import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';
import type { TypeArtistLinksSkeleton } from './TypeArtistLinks';

export interface TypeArtistsFields {
	name: EntryFieldTypes.Symbol;
	slug?: EntryFieldTypes.Symbol;
	role?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<'Instructor'>>;
	bio?: EntryFieldTypes.RichText;
	additionalLinks?: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeArtistLinksSkeleton>
	>;
}

export type TypeArtistsSkeleton = EntrySkeletonType<
	TypeArtistsFields,
	'artists'
>;
export type TypeArtists<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeArtistsSkeleton, Modifiers, Locales>;
