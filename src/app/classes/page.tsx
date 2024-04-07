import ClassCard from '@/app/components/ClassCard';
import {getAllClasses} from '@/lib/classes';

export default async function ClassHomepage() {
	const classes = getAllClasses();

	if (!classes) return <p>There was a problem getting the class list. Please try again later.</p>;

	return (
		<>
			<h1>Classes</h1>
			{classes && (
				<div className='grid gap-4 grid-row-auto grid-cols-3 items-stretch'>
					{classes.map(({id, title, images: {thumbnail}}) => (
						<ClassCard key={id} title={title} link={`/classes/${id}/`} image={thumbnail} />
					))}
				</div>
			)}
		</>
	);
}
