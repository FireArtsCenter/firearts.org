import type {Metadata} from 'next';
import {org} from '../constants';
const getYearsSinceFounding = () => {
	const now = new Date();
	const founded = new Date(org.founded);
	return now.getFullYear() - founded.getFullYear();
};
const yearsSinceFounding = getYearsSinceFounding();

const sections = [
	{
		headline: 'Fire Arts Mission',
		text: `The <strong>${org.name}</strong> began ${yearsSinceFounding} years ago as a not-for-profit school for sculptors. Our primary mission is the preservation of traditional sculpture technique by offering high-quality training to artists, students and others seeking to learn or perfect their skills. Our secondary mission is to provide teaching, working, and exhibition opportunities for artists, as well as technical advice and facilities to artists and institutions.`,
	},
	{
		headline: 'Facilities',
		text: `The <strong>${org.name}</strong> has a fully equipped foundry complete with equipment for forging, welding, bronze and iron casting including furnaces and kilns. We also offer courses in stone carving, figure sculpture, figure drawing, and more. We are very excited about our new larger facility, so come <a href="/location/">visit us</a> to check it out.`,
	},
	{
		headline: 'Classes',
		text: 'Regular classes are offered quarterly. As listed above our classes cover a wide range of topics including ferrous and non-ferrous casting, figure sculpture, stone carving, figure drawing, metal forging, metal furniture design, and more. Class size is kept small to provide individualized attention. New students may opt to join at the beginning of each month as the schedule allows. <a href="/contact-us/">Contact us</a> about class schedules and eligibility.',
	},
	{
		headline: 'Community Outreach',
		text: `Special projects are very important to the <strong>${org.name}</strong>'s mission and goals. We aim to facilitate&mdash;and participate in&mdash;public art projects through outreach and collaboration with other community organizations. Past projects have introduced adults and children with disabilities to the excitement of metal casting, and have taught high school students the joys of metalworking.`,
	},
];

export const metadata: Metadata = {
	title: `About Us | ${org.name}`,
	description: `The ${org.name} began ${yearsSinceFounding} years ago as a not-for-profit school for sculptors. Our primary mission is the preservation of traditional sculpture technique by offering high-quality training to artists, students and others seeking to learn or perfect their skills. Our secondary mission is to provide teaching, working, and exhibition opportunities for artists, as well as technical advice and facilities to artists and institutions.`,
};

export default function AboutUs() {
	return sections.map((section, index) => (
		<section key={`section-${index}`} className='border-b border-dotted border-grey-lighter mb-4 pb-4'>
			<h2 className='font-raleway text-3xl font-black text-white my-4'>{section.headline}</h2>
			<p dangerouslySetInnerHTML={{__html: section.text}} />
		</section>
	));
}
