import Link from 'next/link';
import Button from '../components/Button';
import {org} from '../constants';

export default function ContactPage() {
	return (
		<section>
			<p>
				If you are interested in bronze or iron casting (using the lost-wax method), metal furniture design, armor
				forging, stone carving, figure sculpture, figure drawing or just want to check out the Fire Arts Center of
				Chicago’s studio, please contact us and let us know.
			</p>
			<div className='flex justify-around mt-6'>
				<Button as='link' styleType='primary' href={`mailto:${org.email}`}>
					Email the Fire Arts Center
				</Button>
				<Button href={`tel:+1${org.phone.split('.').join('')}`} styleType='secondary'>
					Call {org.phone}
				</Button>
			</div>
		</section>
	);
}
