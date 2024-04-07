import Link from 'next/link';
import {type TypeNavItem} from '@/app/components/Navigation/types';
import FooterNavFocused from '@/app/components/FooterNavFocused';
import {org} from '../constants';

export default function Footer({navItems}: {navItems: TypeNavItem[]}) {
	function getSubnavItemsByClass(navItemClass: string) {
		const navItem = navItems.find((item) => item.class === navItemClass);
		return navItem?.subpages;
	}

	const homeSubPages = getSubnavItemsByClass('home');
	const classesSubPages = getSubnavItemsByClass('classes');
	const gallerySubPages = getSubnavItemsByClass('artists');

	return (
		<footer className='md:col-start-1 md:col-span-5 bg-black border-grey-darkest border-t mt-12 py-8 px-4'>
			<div className='max-w-4xl mx-auto'>
				<nav className='flex flex-wrap justify-between'>
					<div className='w-1/2 md:w-1/4'>
						<h3>
							<Link href='/'>Home</Link>
						</h3>
						{homeSubPages && <FooterNavFocused subNavItems={homeSubPages} />}
					</div>
					<div className='w-1/2 md:w-1/4'>
						<h3>
							<Link href='/classes/'>Classes</Link>
						</h3>
						{classesSubPages && <FooterNavFocused subNavItems={classesSubPages} />}
					</div>
					<div className='w-1/2 md:w-1/4'>
						<h3>
							<Link href='/artists/'>Artists</Link>
						</h3>
						{gallerySubPages && <FooterNavFocused subNavItems={gallerySubPages} />}
					</div>
					<div className='w-1/2 md:w-1/4'>
						<h3>Other Links</h3>
						<ul className='list-none p-0'>
							<li>
								<Link href='/events/'>Events</Link>
							</li>
							<li>
								<Link href='/contact-us/'>Contact Us</Link>
							</li>
							<li>
								<Link href='/donate/'>Donate</Link>
							</li>
							<li>
								<Link href='/register/'>Register</Link>
							</li>
						</ul>
					</div>
				</nav>
				<p className='text-sm border-grey-darkest border-t mt-8 pt-4 w-full'>
					{org.name} | {org.address} | {org.city}, {org.state} {org.zip}
					<br />
					Tel: {org.phone} | Email: <a href='mailto:{org.email}'>{org.email}</a>
				</p>
			</div>
		</footer>
	);
}
