'use client';

import getURL from '@/utils/getUrl';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Button from '../Button';

import {type TypeNavItem} from './types';

export default function Navigation({navItems}: {navItems: TypeNavItem[]}) {
	const currentRoute = usePathname();
	const isHomepage = currentRoute === '/';
	const isRegisterPage = currentRoute === '/register/';
	const isClassPage = currentRoute.startsWith('/classes/');
	return (
		<aside className='col-start-1 col-span-1'>
			<nav
				className={`${isHomepage ? 'home' : ''} ${isRegisterPage ? 'register' : ''} ${
					isClassPage ? 'classes' : ''
				} navbar hidden md:block`}
			>
				<ul className='font-raleway font-bold list-none p-0 pl-4'>
					{navItems.map((item, index) => {
						const subpagesUrls = item.subpages ? item.subpages.map((subpage) => subpage.url) : [];

						const isActivePage = currentRoute === item.url;
						const hasActiveSubpage = subpagesUrls.includes(currentRoute);
						return (
							<li
								key={`navItem${index}`}
								className={`${item.class} ${isActivePage || hasActiveSubpage ? 'active-page' : ''} mt-4`}
							>
								<Link
									className={`${item.linkClasses} border-b-0 hover:border-b-0 focus:border-b-0`}
									href={getURL(item.url)}
								>
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
												<Link className='border-b-0 hover:border-b-0 focus:border-b-0' href={getURL(subpage.url)}>
													{subpage.name}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
					{!isRegisterPage && (
						<li>
							<Button className='mt-4' styleType='primary' href={getURL('/register')}>
								Register
							</Button>
						</li>
					)}
				</ul>
			</nav>
		</aside>
	);
}
