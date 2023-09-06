import Link from 'next/link';

export default function ArtistLinksPage() {
	return (
		<section>
			<div className='note'>
				<p>
					Artists of Chicago, unite. Here is a collection of links to a variety of art sources in Chicago. From artist’s
					groups (like the Fire Arts Center) to online art information. All of the links below open in a new window so
					when you’re done browsing be sure to stop back and{' '}
					<Link href="{{ '/membership/' | relative_url }}">sign up for classes</Link> at the Fire Arts Center of
					Chicago.
				</p>
			</div>

			<div className='note'>
				<h2>
					<Link href='http://www.artworldchicago.com/' target='_blank' rel='noopener noreferrer'>
						Art World Chicago
					</Link>
				</h2>
				<p>
					Art World Chicago is a valuable resource for Chicago artists of all makes and models. With links to over 300
					artists viewable online, links to art classes in Chicago, supplies, and more this site will help you with your
					artworks from supply to demand.
				</p>
			</div>

			<div className='note'>
				<h2>
					<Link href='http://www.chicagoartistsresource.org/' target='_blank' rel='noopener noreferrer'>
						Chicago Artists Resource
					</Link>
				</h2>
				<p>
					The Chicago Artists Resource presents a number of great articles which attack the issues with which artists
					grapple like finding studio space and that crazy little thing called inspiration. Real life stories from
					artists make this a great way to clear your head after a rough day of distributing slides...you really are not
					alone.
				</p>
			</div>

			<div className='note'>
				<h2>
					<Link href='http://www.evanstonartcenter.org/' target='_blank' rel='noopener noreferrer'>
						Evanston Art Center
					</Link>
				</h2>
				<p>
					The Evanston Art Center has been offering classes, contemporary art exhibitions, and education programs for
					children and seniors for over 75 years. All of this adds up to promote their mission of making contemporary
					art accessible to the general public.
				</p>
			</div>

			<div className='note'>
				<h2>
					<Link href='http://www.chicagohotglass.com/' target='_blank' rel='noopener noreferrer'>
						Chicago Hot Glass
					</Link>
				</h2>
				<p>
					Chicago Hot Glass is another great place to warm up in the city. We at the{' '}
					<em>Fire Arts Center of Chicago</em> sure love our fire, but thanks to these guys, we are not alone in that
					respect. This group of fire-lovers share their glass-blowing craft with all those interested. They feature
					some great classes and events like the <em>Third Monday Jazz Nights</em> which incorporates some great jazz
					alongside glass blowing demos.
				</p>
			</div>

			<div className='note'>
				<h2>
					<Link href='http://www.lillstreet.com/' target='_blank' rel='noopener noreferrer'>
						Lillstreet Art Center
					</Link>
				</h2>
				<p>
					The Lillstreet Art Center, like the Fire Arts Center, is a non-profit arts education center. They offer a long
					list of classes ranging from painting, pottery, and textiles. Having groups like Lillstreet helps to make
					Chicago a great place to be for any aspiring artist.
				</p>
			</div>
		</section>
	);
}