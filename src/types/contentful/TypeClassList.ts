import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';
import type { TypeClassSkeleton } from './TypeClass';

export interface TypeClassListFields {
	title: EntryFieldTypes.Symbol;
	classes: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeClassSkeleton>>;
}

export type TypeClassListSkeleton = EntrySkeletonType<
	TypeClassListFields,
	'classList'
>;
export type TypeClassList<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeClassListSkeleton, Modifiers, Locales>;
