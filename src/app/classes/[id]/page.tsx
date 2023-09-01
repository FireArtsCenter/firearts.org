import TimeString from '@/app/components/TimeString';
import getURL from '@/utils/getUrl';
import Image from 'next/image';
import Link from 'next/link';
import {type TypeClassPageProps, type TypePageData, type TypeClassPageIds} from '../../api/classes/constants';

async function getClassById(pageId: TypeClassPageIds): Promise<TypePageData | undefined> {
	
	const response = await fetch(getURL(`/api/classes/${pageId}`));
	if (!response.ok) {
		return;
	}
	const classData = await response.json();
	return classData.class;
}

export default async function Page({params}: TypeClassPageProps) {
	const {id} = params;

	const classData = await getClassById(id);
	if (!classData) return <p>There was a problem accessing this class info (class id requested: {params.id})</p>;

	const {title, images, instructors, schedule, fee, description, disclaimer}: TypePageData = classData;

	return (
		<div className='note'>
			<h2 className='font-raleway font-black text-white my-4 text-3xl'>{title}</h2>
			{images?.detail && <Image {...images.detail} />}
			{instructors && (
				<>
					<h3 className='mt-4'>Instructors</h3>
					<p>{instructors}</p>
				</>
			)}
			{schedule && (
				<>
					<h3 className='mt-4'>Times</h3>
					<ul>
						{schedule.map((time, index) => (
							<TimeString key={`schedule-${index}`} weirdString={time} />
						))}
					</ul>
				</>
			)}

			<h3 className='mt-4'>Fee</h3>
			<p>{fee}</p>

			{description &&
				description.map((p, index) => (
					<p key={`desc-${index}`} className='mt-4'>
						{p}
					</p>
				))}
			{disclaimer && <p className='mt-4'>{disclaimer}</p>}
			<Link className='button button--primary my-4' href={getURL('/register/')}>
				Register Now
			</Link>
		</div>
	);
}
