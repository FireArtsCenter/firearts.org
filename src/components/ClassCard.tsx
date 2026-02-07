import Link from 'next/link';
import Image from 'next/image';
import { type TypeImage } from '@/lib/classes/constants';

export default function ClassCard({
	title,
	link,
	image,
}: {
	title: string;
	link: string;
	image?: TypeImage;
}) {
	return (
		<Link
			className='hover:shadow-grey-darkest block overflow-hidden rounded border-b-0 shadow-lg shadow-black hover:border-b-0 hover:bg-black focus:border-b-0'
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
