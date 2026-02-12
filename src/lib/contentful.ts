import { createClient, type EntryFieldTypes } from 'contentful';

export interface TypeContentfulImage {
	src: string;
	width: number;
	height: number;
}

export interface Class {
	contentTypeId: 'class';
	fields: {
		slug: EntryFieldTypes.Text;
		name: EntryFieldTypes.Text;
		description: EntryFieldTypes.RichText;
		disclaimers: EntryFieldTypes.Text[];
		scheduleStrategy: EntryFieldTypes.Boolean;
		scheduledTimes: any[];
		instructors: any[];
		fee: any[];
		isRolling: EntryFieldTypes.Boolean;
		images: any[];
	};
}

export const contentfulClient = createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.DEV
		? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
		: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const selectImageDataFromResponse = (contentfulImagesArray: any[]) => {
	return contentfulImagesArray.map((imageData) => {
		const imageFields = imageData.fields;
		const imageSrc = imageFields?.file?.url;
		const imageWidth = imageFields?.file?.details?.image?.width;
		const imageHeight = imageFields?.file?.details?.image?.height;
		return {
			src: imageSrc,
			width: imageWidth,
			height: imageHeight,
		};
	});
};
