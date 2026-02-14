import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';

export interface TypeArtistsFields {
	name: EntryFieldTypes.Symbol;
	slug?: EntryFieldTypes.Symbol;
	role?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<'Instructor'>>;
	bio?: EntryFieldTypes.RichText;
}

export type TypeArtistsSkeleton = EntrySkeletonType<
	TypeArtistsFields,
	'artists'
>;
export type TypeArtists<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeArtistsSkeleton, Modifiers, Locales>;
