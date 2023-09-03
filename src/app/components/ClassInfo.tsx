import Image from 'next/image';
import TimeString from '@/app/components/TimeString';
import Button from '@/app/components/Button';
import {type TypePageData} from '@/lib/classes/constants';

export default function ClassInfo({title, images, instructors, schedule, fee, description, disclaimer}: TypePageData) {
	return (
		<div className='note'>
			<h2 className='font-raleway font-black text-white my-4 text-3xl'>{title}</h2>
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
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
			<Button styleType='primary' as='link' className='mt-4' href='/register/'>
				<span>Register Now</span>
			</Button>
		</div>
	);
}
