import Link from 'next/link';
import {org} from '../constants';

export default function LocationPage() {
	return (
		<section>
			<p>
				The Fire Arts Center is located at{' '}
				<Link href={org.mapLink} target='_blank' rel='noopener noreferrer'>
					<em>
						{org.address} ({org.zip})
					</em>
				</Link>
				.
			</p>
			<p className='mt-4'>
				The entrance is behind the building on Cortland and Kenneth. Call us if you have any problems getting in{' '}
				{org.phone}.
			</p>

			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.969711659201!2d-87.7366736!3d41.9145215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd24099688cbf%3A0xcd3e91ca38693007!2sFire%20Arts%20Center%20of%20Chicago!5e0!3m2!1sen!2sus!4v1693780062444!5m2!1sen!2sus'
				width='600'
				height='450'
				className='w-full mt-4'
				style={{border: 0}}
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
			<small>
				<Link href={org.mapLink} target='_blank' rel='noopener noreferrer'>
					View Larger Map
				</Link>
			</small>
		</section>
	);
}
