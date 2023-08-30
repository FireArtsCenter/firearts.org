'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
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
		linkClasses:
			'button border-b-0 hover:border-b-0 bg-fac-red/75 hover:bg-fac-red text-white focus:bg-fac-red hover:text-white focus:text-white font-semibold inline-block px-8 py-3 no-underline mt1',
		url: '/register/',
	},
];

export default function Navigation() {
	const currentRoute = usePathname();
	const isHomepage = currentRoute === '/';
	const isRegisterPage = currentRoute === '/register/';
	return (
		<aside className='col-start-1 col-span-1'>
			<nav className={`${isHomepage ? 'home' : ''} ${isRegisterPage ? 'register' : ''} navbar hidden md:block`}>
				<ul className='font-raleway font-bold list-none p-0 pl-4'>
					{mainNav.map((item, index) => {
						const subpagesUrls = item.subpages ? item.subpages.map((subpage) => subpage.url) : [];

						const isActivePage = currentRoute === item.url;
						const hasActiveSubpage = subpagesUrls.includes(currentRoute);
						return (
							<li
								key={`navItem${index}`}
								className={`${item.class} ${isActivePage || hasActiveSubpage ? 'active-page' : ''} mt-4`}
							>
								<Link className={`${item.linkClasses} border-b-0 hover:border-b-0 focus:border-b-0`} href={item.url}>
									{item.name}
								</Link>
								{item.subpages && (
									<ul
										className={`${
											hasActiveSubpage ? 'block' : 'hidden'
										} font-sans font-normal list-none p-0 pl-4 text-sm`}
									>
										{item.subpages.map((subpage, index) => (
											<li
												key={`subNavItem${index}`}
												className={`${subpage.class} ${currentRoute === subpage.url ? 'active-subpage' : ''} mt-4`}
											>
												<Link className='border-b-0 hover:border-b-0 focus:border-b-0' href={subpage.url}>
													{subpage.name}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
}
