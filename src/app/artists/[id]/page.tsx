import ClassCard from '@/app/components/ClassCard';
import {getArtistById} from '@/lib/artists';
import {TypeArtistPageProps} from '@/lib/artists/constants';
import {getClassById} from '@/lib/classes';
import Link from 'next/link';

export default async function Page({params}: TypeArtistPageProps) {
	const {id} = params;
	const artistData = getArtistById(id);
	if (!artistData)
		return (
			<p>
				<strong>There was a problem accessing this artist info (artist id requested: {params.id})</strong>
			</p>
		);
	return (
		<>
			<nav>
				<ul></ul>
			</nav>
			<h1>About {artistData.name}</h1>
			{artistData.about &&
				artistData.about.map((paragraph, index) => (
					<p key={`pg-${index}`} className='mt-4'>
						{paragraph}
					</p>
				))}
			{artistData.classes && (
				<section id='classes'>
					<h2>Classes</h2>
					<div className='grid gap-4 grid-row-auto grid-cols-3 items-stretch'>
						{artistData.classes.map((classId) => {
							const classData = getClassById(classId);
							if (!classData) return null;
							return (
								<ClassCard
									key={classId}
									title={classData.title}
									link={`/classes/${classId}/`}
									image={classData.images.thumbnail}
								/>
							);
						})}
					</div>
				</section>
			)}
			{artistData.links && (
				<section id='links'>
					<h2>Additional Links</h2>
					<ul className='list-disc pl-4 mt-4'>
						{artistData.links.map(({text, href}) => (
							<li key={href}>
								<Link href={href}>{text}</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</>
	);
}
