import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';

export interface TypeScheduleSlotFields {
	timeSlotName: EntryFieldTypes.Symbol;
	dayOfWeek: EntryFieldTypes.Symbol<
		| 'Friday'
		| 'Monday'
		| 'Saturday'
		| 'Sunday'
		| 'Thursday'
		| 'Tuesday'
		| 'Wednesday'
	>;
	timeRange: EntryFieldTypes.Array<
		EntryFieldTypes.Symbol<
			| '12:00 p.m.–3:00 p.m.'
			| '3:00 p.m.–6:00 p.m.'
			| '7:00 p.m.–10:00 p.m.'
			| '8:00 p.m.–10:00 p.m.'
			| '9:30 a.m.–12:30 p.m.'
		>
	>;
}

export type TypeScheduleSlotSkeleton = EntrySkeletonType<
	TypeScheduleSlotFields,
	'scheduleSlot'
>;
export type TypeScheduleSlot<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeScheduleSlotSkeleton, Modifiers, Locales>;
