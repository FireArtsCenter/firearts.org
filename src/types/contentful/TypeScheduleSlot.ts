import type { Entry, EntryFields } from 'contentful';

export interface TypeScheduleSlotFields {
	timeSlotName: EntryFields.Symbol;
	dayOfWeek:
		| 'Friday'
		| 'Monday'
		| 'Saturday'
		| 'Sunday'
		| 'Thursday'
		| 'Tuesday'
		| 'Wednesday';
	timeRange: (
		| '12:00 p.m.–3:00 p.m.'
		| '3:00 p.m.–6:00 p.m.'
		| '7:00 p.m.–10:00 p.m.'
		| '8:00 p.m.–10:00 p.m.'
		| '9:30 a.m.–12:30 p.m.'
	)[];
}

export type TypeScheduleSlot = Entry<TypeScheduleSlotFields>;
