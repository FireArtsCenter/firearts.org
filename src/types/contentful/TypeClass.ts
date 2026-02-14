import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';
import type { TypeInstructorsSkeleton } from './TypeInstructors';
import type { TypeScheduleSlotSkeleton } from './TypeScheduleSlot';

export interface TypeClassFields {
	name: EntryFieldTypes.Symbol;
	slug: EntryFieldTypes.Symbol;
	summary: EntryFieldTypes.Symbol;
	scheduleStrategy: EntryFieldTypes.Boolean;
	scheduledTimes?: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeScheduleSlotSkeleton>
	>;
	description: EntryFieldTypes.RichText;
	instructors?: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeInstructorsSkeleton>
	>;
	fee: EntryFieldTypes.Array<
		EntryFieldTypes.Symbol<
			'$350 for 10 weeks' | '$350 for 8 weeks' | '$450 for 16 weeks'
		>
	>;
	isRolling?: EntryFieldTypes.Boolean;
	disclaimers?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
	images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeClassSkeleton = EntrySkeletonType<TypeClassFields, 'class'>;
export type TypeClass<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeClassSkeleton, Modifiers, Locales>;
