import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';

export interface TypeArtistLinksFields {
	linkText: EntryFieldTypes.Symbol;
	linkUrl: EntryFieldTypes.Symbol;
}

export type TypeArtistLinksSkeleton = EntrySkeletonType<
	TypeArtistLinksFields,
	'artistLinks'
>;
export type TypeArtistLinks<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeArtistLinksSkeleton, Modifiers, Locales>;
