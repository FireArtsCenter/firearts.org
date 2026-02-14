import type { Entry, EntryFields } from 'contentful';
import type { TypeClassFields } from './TypeClass';

export interface TypeClassListFields {
	title: EntryFields.Symbol;
	classes: Entry<TypeClassFields>[];
}

export type TypeClassList = Entry<TypeClassListFields>;
