import Link from 'next/link';
import { type TypeNavItem } from '@/app/components/Navigation/types';
import FooterNavFocused from '@/app/components/FooterNavFocused';
import { org } from '../constants';

export default function Footer({ navItems }: { navItems: TypeNavItem[] }) {
	function getSubnavItemsByClass(navItemClass: string) {
		const navItem = navItems.find((item) => item.class === navItemClass);
		return navItem?.subpages;
	}

	const homeSubPages = getSubnavItemsByClass('home');
	const classesSubPages = getSubnavItemsByClass('classes');
	const gallerySubPages = getSubnavItemsByClass('artists');

	return (
		<footer className='border-grey-darkest mt-12 border-t bg-black px-4 py-8 md:col-span-5 md:col-start-1'>
			<div className='mx-auto max-w-4xl'>
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
						{classesSubPages && (
							<FooterNavFocused subNavItems={classesSubPages} />
						)}
					</div>
					<div className='w-1/2 md:w-1/4'>
						<h3>
							<Link href='/artists/'>Artists</Link>
						</h3>
						{gallerySubPages && (
							<FooterNavFocused subNavItems={gallerySubPages} />
						)}
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
				<p className='border-grey-darkest mt-8 w-full border-t pt-4 text-sm'>
					{org.name} | {org.address} | {org.city}, {org.state} {org.zip}
					<br />
					Tel: {org.phone} | Email:{' '}
					<a href={`mailto:${org.email}`}>{org.email}</a>
				</p>
			</div>
		</footer>
	);
}
