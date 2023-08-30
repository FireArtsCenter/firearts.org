import Link from 'next/link';
const mainNav = [
	{
		name: 'Home',
		class: 'home',
		url: '/',
		subpages: [
			{
				name: 'About Us',
				class: 'about',
				url: '/about-us/',
			},
			{
				name: 'Location',
				class: 'location',
				url: '/location/',
			},
			{
				name: 'Membership',
				class: 'membership',
				url: '/membership/',
			},
		],
	},
	{
		name: 'Classes',
		class: 'classes',
		url: '/classes/',
		subpages: [
			{
				name: 'Foundry',
				class: 'foundry',
				url: '/classes/foundry/',
			},
			{
				name: 'Furniture',
				class: 'furniture',
				url: '/classes/metal-furniture/',
			},
			{
				name: 'Metal Sculpture',
				class: 'metal-sculpture',
				url: '/classes/metal-sculpture/',
			},
			{
				name: 'Forging',
				class: 'forging',
				url: '/classes/forge/',
			},
			{
				name: 'Figure Study',
				class: 'figure',
				url: '/classes/figure-study/',
			},
			{
				name: 'Stone',
				class: 'stone',
				url: '/classes/stone-carving/',
			},
			{
				name: 'Full Class List',
				class: 'full-list',
				url: '/classes/full-list/',
			},
		],
	},
	{
		name: 'Gallery',
		class: 'gallery',
		url: '/galleries/',
		subpages: [
			{
				class: 'vince',
				url: '/galleries/vincent-hawkins/',
				name: 'Vince Hawkins',
			},
			{
				class: 'bryce',
				url: '/galleries/bryce-de-reynier/',
				name: 'Bryce de Reynier',
			},
			{
				class: 'kristin',
				url: '/galleries/kristin-komorowski/',
				name: 'Kristin Komorowski',
			},
			{
				class: 'john-gruber',
				url: '/galleries/john-gruber/',
				name: 'John Gruber',
			},
			{
				class: 'kristian',
				url: '/galleries/kristian-damholt/',
				name: 'Kristian Damholt',
			},
			{
				class: 'elisotelo',
				url: '/galleries/eli-sotelo/',
				name: 'Eli Sotelo',
			},
			{
				class: 'student',
				url: '/galleries/student-work/',
				name: 'Student Work',
			},
		],
	},
	{
		name: 'Events',
		url: '/events/',
		class: 'events',
	},
	{
		name: 'Links',
		url: '/links/',
		class: 'links',
		subpages: [
			{
				class: 'facartists',
				url: '/links/fire-arts-artists/',
				name: 'Fire Arts Artists',
			},
			{
				class: 'chicagoart',
				url: '/links/chicago-art/',
				name: 'Chicago Art',
			},
		],
	},
	{
		name: 'Contact Us',
		url: '/contact-us/',
		class: 'contact',
	},
	{
		name: 'Donate',
		url: '/donate/',
		class: 'donate',
		subpages: [
			{
				class: 'wishlist',
				url: '/donate/wishlist/',
				name: 'Wish List',
			},
		],
	},
	{
		name: 'Register',
		class: 'register mt-4',
		linkClasses: 'button button--primary mt1',
		url: '/register/',
	},
];

export default function FooterNavFocused({subNavClassName}: {subNavClassName: string}) {
	const focusedNav = mainNav.find((item) => item.class === subNavClassName);

	if (!focusedNav) {
		return <span></span>;
	}

	return (
		<ul className='list-none p-0 mt-4'>
			{focusedNav.subpages.map((subpage, index) => (
				<li key={`footerSubnav${index}`} className={subpage.class}>
					<Link href={subpage.url}>{subpage.name}</Link>
				</li>
			))}
		</ul>
	);
}
