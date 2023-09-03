import Link from 'next/link';

export default function ArtistLinksPage() {
	return (
		<section>
			<div className='note'>
				<p>
					For a look at the websites of some of the Fire Arts Center arists check out the links below. The members’
					pages below offer a expansive look at each artist’s individual works and studios. We are proud to have all of
					them working with the Fire Arts Center of Chicago and want you to see the types of artists that will be
					running the classes that you can take. All the links below open in a new window, so you can easily return to
					our site and <a href='/membership/'>register for that instructor’s classes</a> right away!
				</p>
			</div>
			<div className='note'>
				<h2>
					<Link href='http://www.truerustic.com/' target='_blank' rel='noopener noreferrer'>
						True Rustic
					</Link>
				</h2>
				<p>
					True Rustic is the website of Madeline True, an artist whose experiences living on small islands in the
					Caribbean, the South Pacific and the San Juan Islands for the past 15 years, have developed a philosophical
					depth that is evident in each of her creations. Throughout her travels, she has also gained a rich knowledge
					of materials from metal to wood and ceramic to photography.
				</p>
			</div>
		</section>
	);
}
