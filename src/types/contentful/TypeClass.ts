import type { Asset, Entry, EntryFields } from 'contentful';
import type { TypeInstructorsFields } from './TypeInstructors';
import type { TypeScheduleSlotFields } from './TypeScheduleSlot';

export interface TypeClassFields {
	name: EntryFields.Symbol;
	slug: EntryFields.Symbol;
	summary: EntryFields.Symbol;
	scheduleStrategy: EntryFields.Boolean;
	scheduledTimes?: Entry<TypeScheduleSlotFields>[];
	description: EntryFields.RichText;
	instructors?: Entry<TypeInstructorsFields>[];
	fee: ('$350 for 10 weeks' | '$350 for 8 weeks' | '$450 for 16 weeks')[];
	isRolling?: EntryFields.Boolean;
	disclaimers?: EntryFields.Symbol[];
	images?: Asset[];
}

export type TypeClass = Entry<TypeClassFields>;
