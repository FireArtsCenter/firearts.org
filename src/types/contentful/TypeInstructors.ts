import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';

export interface TypeInstructorsFields {
	name: EntryFieldTypes.Symbol;
	slug?: EntryFieldTypes.Symbol;
	role: EntryFieldTypes.Array<EntryFieldTypes.Symbol<'Artist' | 'Instructor'>>;
	bio?: EntryFieldTypes.RichText;
}

export type TypeInstructorsSkeleton = EntrySkeletonType<
	TypeInstructorsFields,
	'instructors'
>;
export type TypeInstructors<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeInstructorsSkeleton, Modifiers, Locales>;
