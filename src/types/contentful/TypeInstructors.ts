import type { Entry, EntryFields } from 'contentful';

export interface TypeInstructorsFields {
	name: EntryFields.Symbol;
	slug?: EntryFields.Symbol;
	role: ('Artist' | 'Instructor')[];
	bio?: EntryFields.RichText;
}

export type TypeInstructors = Entry<TypeInstructorsFields>;
