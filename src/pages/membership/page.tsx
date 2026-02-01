import Link from 'next/link';
import {org} from '../constants';
export default function MembershipPage() {
	return (
		<section>
			<p>
				Figure sculpture and figure drawing classes are on a 16-week semester structure and are pro-rated. All other
				classes are on-going so you can sign up at any time.
			</p>
			<p className='mt-4'>
				Figure classes are $285.00 for 16 weeks. Bronze casting is $385. All other classes are $385.00 for 16 weeks.
				(See our <Link href='/classes/'>class listing page</Link> for more details about specific class prices.)
			</p>
			<p className='mt-4'>
				Want to sign up for classes at the Fire Arts Center of Chicago? Click the link below for a printable
				registration form:
			</p>
			<p className='mt-4'>
				<Link href='/downloads/FireArts_RegistrationForm.pdf'>Click Here for Class Registration Form!</Link>
			</p>
			<p className='mt-4'>Just print it out and mail it along with a $50 deposit check to:</p>
			<p className='ml-5 my-4'>
				{org.name}
				<br />
				{org.address}
				<br />
				{org.city}, {org.state} {org.zip}
			</p>
			<p className='mt-4'>You can also stop by on a class night or call us at:</p>
			<p className='ml-5 my-4'>{org.phone}</p>
			<p className='mt-4'>
				We hope to add a form which will allow you to sign up for membership or register for classes online with less
				hassle and none of the paperwork.
			</p>
		</section>
	);
}
