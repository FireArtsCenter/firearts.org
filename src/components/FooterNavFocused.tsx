import Link from 'next/link';
import { type TypeNavItemDetail } from '@/app/components/Navigation/types';

export default function FooterNavFocused({
	subNavItems,
}: {
	subNavItems: TypeNavItemDetail[];
}) {
	return (
		<ul className='mt-4 list-none p-0'>
			{subNavItems.map((subpage, index) => (
				<li key={`footerSubnav${index}`} className={subpage.class}>
					<Link href={subpage.url}>{subpage.name}</Link>
				</li>
			))}
		</ul>
	);
}
