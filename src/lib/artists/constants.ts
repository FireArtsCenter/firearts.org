import {TypeClassPageIds} from '../classes/constants';
type TypeArtist = {
	id: string;
	name: string;
	about: Array<string>;
	classes?: Array<TypeClassPageIds>;
	links?: Array<{
		href: string;
		text: string;
	}>;
	email?: string;
};
export type TypeArtistPageProps = {
	params: {
		id: string;
	};
};

export const artists: Array<TypeArtist> = [
	{
		id: 'vincent-hawkins',
		name: 'Vincent Hawkins',
		about: [
			'Vincent Hawkins recieved his M.F.A. from the School of the Art Institute of Chicago, and his B.F.A. from Temple University in Phiadelphia. He studied figure sculpture and painting with sculptor Paolo Corisone at the Tyler School of Art in Rome, Italy. Mr. Hawkins has been working exclusively with the figure for over 20 years. He currently teaches in the Department of Medical Ethics and Humanities at Northwestern University, as well as the Fire Arts Center of Chicago and the Evanston Art Center.',
			'His classes stress the mastery of clay sculpture technique, structural human anatomy and proportion, internal steel and external armature construction, and the use of golden mean and harmonic symmetry in composition. The primary goal of the course being to strengthen each student’s understanding of structural human anatomy, observation, and the beautiful synergy of organic structures.',
		],
		classes: ['figure-study-sculpture', 'bronze-casting-foundry'],
		links: [
			{
				href: '/downloads/VincentHawkins_Resume.pdf',
				text: 'Resume (PDF)',
			},
		],
		email: 'uroboros7@yahoo.com',
	},
	{
		id: 'bryce-de-reynier',
		name: 'Bryce de Reynier',
		about: [
			'Bryce de Reynier earned his Bachelor of Architecture from Rensselaer Polytechnic Institute, and studied at the Center for Environmental Planning and Technology in Ahmedabad India under the direction of B.V. Doshi.',
			'He currently practices as an architect in the office of Richard Meier Architects in New York. Bryce has been an artist, member, and teacher at the FACC for the past 10 years.',
		],
	},
	{
		id: 'kristin-komorowski',
		name: 'Kristin Komorowski',
		about: ['More to come...'],
	},
	{
		id: 'john-gruber',
		name: 'John Gruber',
		about: [
			'John Gruber is one of Fire Arts Center of Chicago’s emeritus instructors. His area of expertise is the art of armor forging. Once you see the incredible works created on his anvil you will surely want to line up for a class. John not only makes the works but also puts them to the test in medieval military re-enactments.',
		],
	},
	{
		id: 'kristian-damholt',
		name: 'Kristian Damholt',
		about: [
			'Kristian Damholt earned his B.F.A. in Metalsmithing at Earlham College, and has continued his study with professionals in the Chicago area. He now does freelance metalwork, and teaches Jewelry and Metalsmithing at the Fire Arts Center.',
		],
		links: [
			{
				href: 'https://www.kristiandamholt.com/',
				text: 'KristianDamholt.com',
			},
		],
	},
	{
		id: 'eli-sotelo',
		name: 'Eli Sotelo',
		about: [
			'Eli Sotelo’s furniture and lighting works display a blend of technology and the organic. At the Fire Arts Center of Chicago the sky is the limit as to where you can take your furniture works. As Eli displays the piece can be functional and decorative.',
		],
	},
];
