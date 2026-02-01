export type TypeClassPageIds =
	| 'blade-smithing-forging'
	| 'metal-furniture'
	| 'metal-sculpture'
	| 'bronze-casting-foundry'
	| 'figure-study-sculpture'
	| 'stone-carving';
export type TypeClassPageProps = {
	params: {
		id: TypeClassPageIds;
	};
};
export type TypeScheduleIds = 'we-19' | 'mo-19' | 'tu-19' | 'th-19' | 'sa-12' | 'sa-930' | 'call';
export type TypeImage = {
	src: string;
	className?: string;
	alt: string;
	width: number;
	height: number;
};
export type TypePageData = {
	id: TypeClassPageIds;
	title: string;
	instructors?: string;
	schedule: TypeScheduleIds[];
	description: string[];
	fee: string;
	images: {
		thumbnail: TypeImage;
		detail?: TypeImage;
	};
	rolling: boolean;
	disclaimer?: string;
};

const DEFAULT_FEE = '$350 for 10 weeks, $450 for 16 weeks' as const;

const instructors = {
	MICHAEL_BENNET: 'Michael Bennett',
};

export const classes: TypePageData[] = [
	{
		id: 'bronze-casting-foundry',
		fee: DEFAULT_FEE,
		rolling: true,
		title: 'Bronze Casting and Mold Making',
		instructors: instructors.MICHAEL_BENNET,
		schedule: ['we-19', 'sa-12'],
		images: {
			detail: {
				src: '/images/found1.jpg',
				className: 'float-left mb-4 mr-4',
				width: 140,
				height: 187,
				alt: 'Bronze Sculpture Casting at the Fire Arts Center',
			},
			thumbnail: {
				src: '/images/foundry-bronze-pour-md.jpg',
				alt: '',
				width: 720,
				height: 405,
			},
		},
		description: [
			'This class is designed to familiarize students with the basics of lost wax casting process. Depending on the project students will learn wax casting and working technique, gating and venting, ceramic shell and investment molding techniques. Students will be required to complete at least 3 finished projects.',
			'Repetition of this class will provide more advanced foundry education.',
		],
	},
	{
		id: 'metal-furniture',
		fee: DEFAULT_FEE,
		rolling: true,
		title: 'Metal Furniture Studio',
		instructors: 'Michael Bennett',
		schedule: ['sa-12'],
		images: {
			thumbnail: {
				src: '/images/bench-sm.jpg',
				alt: '',
				width: 720,
				height: 405,
			},
		},
		description: [
			'Students will learn how to design and create basic table top furnishings in metal using basic techniques of metal fabrication and brazing.',
			'Repetition of this class will provide more advanced metal-working lessons.',
		],
	},
	{
		id: 'metal-sculpture',
		fee: DEFAULT_FEE,
		title: 'Metal Sculpture Studio',
		rolling: true,
		images: {
			detail: {
				src: '/images/welding-md.jpg',
				className: 'float-right mb-4 ml-4',
				alt: 'Metal Sculpture/Fabrication at the Fire Arts Center',
				width: 140,
				height: 171,
			},
			thumbnail: {
				src: '/images/welding-md.jpg',
				alt: '',
				width: 720,
				height: 405,
			},
		},
		schedule: ['sa-12'],
		description: [
			'This class focuses on how to work sculptural concepts from the drawing board to the scale model stage of construction. Students will be expected to keep a sketchbook of ideas which will be critiqued and refined at each class session. Students will learn basic metal fabrication technique.',
			'Repetition of this class extends to deal with fabrication of large scale metal sculpture from models or free-form. Students will learn advanced metal fabrication technique, gas forging, acetylene welding, and gas and arc welding techniques as well as brazing and chasing techniques.',
		],
	},
	{
		id: 'blade-smithing-forging',
		title: 'Metal Smithing: Knife and Sword Forging',
		rolling: true,
		instructors: 'Michael Bennett, Vincent Hawkins, Jake McNaughton &amp; Nick Schleiter',
		schedule: ['mo-19', 'tu-19', 'th-19', 'sa-12'],
		fee: DEFAULT_FEE,
		description: [
			'Learn the sacred craft of forging functional blades out of steel. In this class students will learn how to design and forge knives and swords as well as designing and making ornate hilts and scabbards. Skills learned in this class include forging technique, tempering, gas and coke forge operations, and surfacing techniques.',
		],
		disclaimer: 'Students are required to supply their own propane for this course.',
		images: {
			thumbnail: {
				src: '/images/forging-md.jpg',
				alt: '',
				width: 720,
				height: 405,
			},
		},
	},
	{
		id: 'figure-study-sculpture',
		title: 'Figure Study and Sculpture Workshop',
		rolling: false,
		images: {
			detail: {
				src: '/images/figure-sculpture2.jpg',
				className: 'float-right mb-4 mr-4',
				alt: 'Fire Arts Center figure sculpture student sculpting in clay',
				width: 200,
				height: 172,
			},
			thumbnail: {
				src: '/images/figure-study-md.jpg',
				alt: '',
				width: 720,
				height: 405,
			},
		},
		schedule: ['sa-930'],

		fee: '$350 for 8 weeks',
		description: [
			'In this multi-level class students will learn to master the classical figure sculpture technique from a live model. We will cover the use of clay tools, clay body chemistry, basic armature construction, anatomy, and clay hollowing and firing technique.',
		],
		disclaimer: 'This is not a rolling class. Contact us to find out when new sessions are starting.',
	},
	{
		id: 'stone-carving',
		fee: DEFAULT_FEE,
		title: 'Stone Carving Workshop',
		schedule: ['call'],
		rolling: true,
		description: [
			'In stone carving students will learn the basic techniques for composing and carving small sculpture out of alabaster and other soft stones. Students will need to purchase carving tools and materials.',
			'With repetition of this course students will learn how to work with medium hardness stones like sandstones and lime stones. Students can carve small sculpture projects in a stone of medium hardness or can learn to carve larger project in soft stones.',
		],
		disclaimer: 'This class is not recommended for students with back problems or arthritis.',
		images: {
			thumbnail: {
				src: '/images/stone-carving-hammer-chisel-md.jpg',
				alt: '',
				width: 720,
				height: 405,
			},
		},
	},
];
