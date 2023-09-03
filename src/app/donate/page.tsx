import Link from 'next/link';

export default function DonatePage() {
	return (
		<section>
			<p>So you want to help out the Fire Arts Center of Chicago. There are a number of ways you can help:</p>

			<div className='note'>
				<h2>Take a class</h2>
				<p>
					That’s right. Just sign up for a class. We here at Fire Arts are excited about sharing our knowledge with the
					community. We love having the studio full of excited people making art. And on top of it, the money you give
					for classes goes to the promotion of more classes! So{' '}
					<Link href='/membership/' title='Sign up for classes today!'>
						sign up today
					</Link>
					.
				</p>
			</div>

			<div className='note'>
				<h2>Give ’til it hurts</h2>
				<p>
					So you are not interested in taking a class at this time, but want to ensure that others in the community are
					able to experience the joys of the fire arts. We all appreciate the offer.{' '}
					<Link href='/contact-us/'>Contact us</Link> about donating money. You can stop by the studio or mail in a
					check if you like.
				</p>
			</div>

			<div className='note'>
				<h2>And then give some more</h2>
				<p>
					Don’t really have much money to give out. Not to worry, we also accept supplies and equipment donations. We
					like to consider ourselves a recycling center of sorts. <Link href='/contact-us/'>Contact us</Link> about what
					types of material we can use. You’d be surprised, so why not call and find out. Businesses with any sort of
					equipment (metal fabrication tools, power saws, welding equipment, hand tools, cement mixers, buckets, and so
					much more) be sure to <Link href='/contact-us/'>contact us</Link> as well. Hate the idea of having to haul
					that giant drill press to the scrap heap...contact us and we may be able to come pick it up for you. We’re
					glad to help out. Be sure to check our <Link href='/donate/wishlist/'>wish list</Link> for lists of specific
					equipment that we are hoping to obtain.
				</p>
			</div>

			<div className='note'>
				<h2>Tell a friend</h2>
				<p>
					Know someone who might like to get involved at the Fire Arts Center of Chicago. Pass the word along to them.
					Better yet, why not surprise them with the gift of fire...
					<Link href='/membership/'>sign them up for classes today</Link>. They may even thank you by making you a full
					suit of armor, a sculpture of you cast in bronze, or maybe that steel-frame desk you have been hoping to get
					but couldn’t afford to buy at the store. Now that is a gift!
				</p>
			</div>

			<p>
				As you can see there are so many ways to help us pour another bronze sculpture, weld another piece of furniture,
				forge another suit of armor, or sculpt another figure in clay. But again, our favorite way to keep the place
				running is to...well...keep it running.{' '}
				<Link href='/membership/' title='Sign up for classes today!'>
					Sign up for classes
				</Link>{' '}
				and help us do just that. We look forward to having you in our next <Link href='/classes/'>class</Link>.
			</p>
		</section>
	);
}
