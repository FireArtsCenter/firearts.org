import {
	createClient,
	type EntrySkeletonType,
	type Asset,
	type Entry,
} from 'contentful';

import type {
	TypeClassSkeleton,
	TypeClassListSkeleton,
} from '@/types/contentful';

type ContentfulType = 'Entry' | 'Asset';

function isContentfulObject<T>(item: unknown, type: ContentfulType): item is T {
	// 1. Strict object check first
	if (typeof item !== 'object' || item === null) {
		return false;
	}

	// 2. Safe narrowing for property access
	const candidate = item as Record<string, unknown>;
	const sys = candidate.sys as Record<string, unknown> | undefined;

	// 3. Logic check
	return sys?.type === type && candidate.fields !== undefined;
}

// Your guards remain clean and strict
export const isEntry = <T extends EntrySkeletonType>(
	item: unknown
): item is Entry<T, undefined, string> =>
	isContentfulObject<Entry<T, undefined, string>>(item, 'Entry');

export const isAsset = (item: unknown): item is Asset<undefined, string> =>
	isContentfulObject<Asset<undefined, string>>(item, 'Asset');

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

// Fetching a specific list by its slug/name
export const getClassesByListTitle = async (listTitle: string) => {
	const response = await contentfulClient.getEntries<TypeClassListSkeleton>({
		content_type: 'classList',
		'fields.title': listTitle,
		include: 2,
	});

	if (response.items.length === 0) return [];

	const rawClasses = response.items[0].fields.classes || [];

	// TypeScript now knows exactly what is being returned
	return rawClasses.filter(isEntry<TypeClassSkeleton>);
};
