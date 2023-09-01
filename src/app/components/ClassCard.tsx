import Link from 'next/link';
import Image from 'next/image';
import {type TypeImage} from '../api/classes/constants';

export default function ClassCard({title, link, image}: {title: string; link: string; image?: TypeImage}) {
	return (
		<Link
			className='block hover:bg-black border-b-0 hover:border-b-0 focus:border-b-0 overflow-hidden rounded shadow-lg shadow-black hover:shadow-grey-darkest'
			href={link}
		>
			<div className='h-full'>
				{image?.src && (
					<Image
						src={image.src}
						className='w-full'
						alt={image.alt || ''}
						width={image.width || '720'}
						height={image.height || '405'}
					/>
				)}
				<div className='px-6 py-4'>
					<h3 className='m-0 text-xl'>{title}</h3>
				</div>
			</div>
		</Link>
	);
}
