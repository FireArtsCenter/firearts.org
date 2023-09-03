import Link from 'next/link';

export default function EventsPage() {
	return (
		<section>
			<div className='note'>
				<p>
					There are no events currently scheduled, but that doesn’t mean you can’t stop by. Visit the Fire Arts Center
					of Chicago today and make your own event.
				</p>
				<p className='mt-4'>
					If you are looking for class schedules, please visit our <Link href='/classes/'>classes page</Link> where you
					can see the days for each class. The schedule is rolling for many of our classes so please contact us with any
					other questions about updates.
				</p>
			</div>
		</section>
	);
}
