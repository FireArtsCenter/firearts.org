import Link from 'next/link';
import {org} from '../constants';

export default function ContactPage() {
	return (
		<section>
			<p>
				If you are interested in bronze or iron casting (using the lost-wax method), metal furniture design, armor
				forging, stone carving, figure sculpture, figure drawing or just want to check out the Fire Arts Center of
				Chicago’s studio, please contact us and let us know.
			</p>
			<p className='mt-4'>You can reach us by email at either of the email addresses below:</p>
			<p className='ml-5 my-4'>
				<Link href={`mailto:${org.email}`}>Fire Arts Info</Link>
			</p>
			<p className='mt-4'>You can contact us by phone at any of the following phone numbers:</p>
			<p className='ml-5 my-4'>{org.phone}</p>

			<p className='mt-4'>
				And finally you can send a letter or stop by the studio which is located at the following address:
			</p>
			<p className='ml-5 my-4'>
				{org.name}
				<br />
				{org.address}
				<br />
				{org.city}, {org.state} {org.zip}
			</p>
		</section>
	);
}
