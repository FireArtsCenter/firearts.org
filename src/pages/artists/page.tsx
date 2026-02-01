import {getAllArtists} from '@/lib/artists';

export default async function GalleryHomepage() {
	const artists = getAllArtists();

	if (!artists) return <p>There was a problem getting the artist list. Please try again later.</p>;

	return (
		<>
			<h1>Artists</h1>
			<p>
				Here are a few of the artists and instructors who have helped make the Fire Arts Center of Chicago what it is
				today.
			</p>
			{artists && (
				<ul className='list-disc pl-4 mt-4'>
					{artists.map(({id, name}) => (
						<li key={id}>
							<a href={`/artists/${id}/`}>{name}</a>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
