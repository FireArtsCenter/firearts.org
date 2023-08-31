import TimeString from '@/app/components/TimeString';
import Image from 'next/image';
import Link from 'next/link';
import {classPages, type TypeClassPageProps, type TypePageData, type TypeClassPageIds} from '../constants';

function getPageData(pageId: TypeClassPageIds): TypePageData {
	return classPages[pageId];
}

export default function Page({params}: TypeClassPageProps) {
	const pageData = getPageData(params.id);
	if (!pageData) return <p>There was a problem accessing this class info (class id requested: {params.id})</p>
	return (
		<div className='note'>
			<h2 className='font-raleway font-black text-white my-4 text-3xl'>{pageData.title}</h2>
			{pageData.image && <Image {...pageData.image} />}
			{pageData.instructors && (
				<p className="mt-4">
					<strong>Instructors:</strong> {pageData.instructors}
				</p>
			)}
			{pageData.schedule && (
				<>
					<p className="mt-4">
						<strong>Times:</strong>
					</p>
					<ul>
						{pageData.schedule.map((time, index) => (
							<TimeString key={`schedule-${index}`} weirdString={time} />
						))}
					</ul>
				</>
			)}
			<p className="mt-4">
				<strong>Fee:</strong> {pageData.fee ? pageData.fee : '$400 for 16 weeks, $285 for 10 weeks'}
			</p>
			{pageData.description.map((p, index) => (
				<p key={`desc-${index}`} className='mt-4'>{p}</p>
			))}
			<Link className='button button--primary my-4' href='/register/'>
				Register Now
			</Link>
		</div>
	);
}
