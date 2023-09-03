import Link from 'next/link';

export default function DonatePage() {
	return (
		<section>
			<div className='note'>
				<p>
					What do you get a community arts education center that has it all? Well we here at the Fire Arts Center of
					Chicago will let you know when we do get it all. In the meantime, please check out what we <em>don’t</em>{' '}
					have.
				</p>
			<p className='mt-4'>
					Below is a list of items that we are trying to obtain for the studio. We are constantly striving to offer more
					options for our students and members, but to do so we often need essential equipment. We will be creating a
					list of items that the studio needs. If you have any leads on any of this equipment please{' '}
					<Link href='/contact-us/'>contact us</Link>. We, of course, prefer donations, but if you know of any discount
					equipment that might be helpful, let us know.
				</p>
			</div>
			<h2>List Coming Soon</h2>
			<p className='mt-4'>
				<Link href='/contact-us/'>Contact us</Link> in the meantime to tell us what types of equipment you have and we
				will see if it will be helpful to us.
			</p>
		</section>
	);
}
