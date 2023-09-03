import Link from 'next/link';
import getBaseUrl from '@/utils/getBaseUrl';
import {type TypeNavItemDetail} from './Navigation/types';

export default function FooterNavFocused({subNavItems}: {subNavItems: TypeNavItemDetail[]}) {
	return (
		<ul className='list-none p-0 mt-4'>
			{subNavItems.map((subpage, index) => (
				<li key={`footerSubnav${index}`} className={subpage.class}>
					<Link href={`${getBaseUrl()}${subpage.url}`}>{subpage.name}</Link>
				</li>
			))}
		</ul>
	);
}
