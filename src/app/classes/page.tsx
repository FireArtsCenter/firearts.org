import ClassCard from '../components/ClassCard';
import {type TypePageData} from '../api/classes/constants';

async function getAllClasses(): Promise<TypePageData[]> {
	const response = await fetch('http://localhost:3000/api/classes/');
	if (!response.ok) {
		throw new Error('No post found');
	}
	const classesList = await response.json();
	return classesList?.classes;
}

export default async function ClassHomepage() {
	const classes = await getAllClasses();

	if (!classes) return <p>There was a problem getting the class list. Please try again later.</p>;

	return (
		<>
			<h1>Classes</h1>
			{classes && (
				<div className='grid gap-4 grid-row-auto grid-cols-3 items-stretch'>
					{classes.map(({id, title, images: {thumbnail}}) => (
						<ClassCard key={id} title={title} link={`/classes/${id}`} image={thumbnail} />
					))}
				</div>
			)}
		</>
	);
}
