import {
	createClient,
	type EntryFieldTypes,
	type EntrySkeletonType,
	type Asset,
} from 'contentful';

// 1. Define Skeletons instead of just Fields
export interface ScheduleSlotSkeleton extends EntrySkeletonType {
	contentTypeId: 'scheduleSlot';
	fields: {
		title: EntryFieldTypes.Symbol;
		// Add other fields from your scheduleSlot content type here
	};
}

export interface InstructorSkeleton extends EntrySkeletonType {
	contentTypeId: 'instructors';
	fields: {
		fullName: EntryFieldTypes.Symbol;
		// Add other fields from your instructors content type here
	};
}

// 2. Update your main Class skeleton
export interface ClassSkeleton extends EntrySkeletonType {
	contentTypeId: 'class';
	fields: {
		name: EntryFieldTypes.Symbol;
		slug: EntryFieldTypes.Symbol;
		scheduleStrategy: EntryFieldTypes.Boolean;
		isRolling: EntryFieldTypes.Boolean;
		description: EntryFieldTypes.RichText;
		summary: EntryFieldTypes.Symbol;
		fee: EntryFieldTypes.Array<
			EntryFieldTypes.Symbol<
				'$350 for 10 weeks' | '$450 for 16 weeks' | '$350 for 8 weeks'
			>
		>;
		disclaimers: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;

		// Pass the Skeletons into EntryLink
		scheduledTimes: EntryFieldTypes.Array<
			EntryFieldTypes.EntryLink<ScheduleSlotSkeleton>
		>;
		instructors: EntryFieldTypes.Array<
			EntryFieldTypes.EntryLink<InstructorSkeleton>
		>;
		images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
	};
}

// 3. Defined mapped types for simpler use in the code
export interface TypeContentfulImage {
	src: string;
	width: number;
	height: number;
}

export const contentfulClient = createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.DEV
		? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
		: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const selectImageDataFromResponse = (
	contentfulImagesArray: Asset[]
): TypeContentfulImage[] => {
	return contentfulImagesArray.map((imageData) => {
		const file = imageData.fields?.file;

		// Default values
		let src = '';
		let width = 0;
		let height = 0;

		if (file) {
			const stringifiedUrl = `${file.url}`;
			// Contentful URLs often start with //, so we prepended https:
			src = stringifiedUrl.startsWith('//')
				? `https:${file.url}`
				: stringifiedUrl;

			// Type Guard: Check if 'details' contains 'image'
			if (file.details && 'image' in file.details) {
				width = file.details.image?.width ?? 0;
				height = file.details.image?.height ?? 0;
			}
		}

		return {
			src,
			width,
			height,
		};
	});
};

// export const selectImageDataFromResponse = (
// 	contentfulImagesArray: Asset[]
// ): TypeContentfulImage[] => {
// 	return contentfulImagesArray.map((imageData) => {
// 		const file = imageData.fields?.file;
//
// 		// Safely extract dimensions only if they exist
// 		let width = 0;
// 		let height = 0;
//
// 		if (file?.details && 'image' in file.details) {
// 			width = file.details.image?.width ?? 0;
// 			height = file.details.image?.height ?? 0;
// 		}
//
// 		return {
// 			src: file?.url ? `https:${file.url}` : '', // Contentful URLs often start with //
// 			width,
// 			height,
// 		};
// 	});
// };
