import Image from 'next/image';

export default function FigureStudyPrefix() {
	return (
		<section>
			<p>
				<Image
					src='/images/figure-sculpture.jpg'
					className='float-left mr-4 mb-4'
					alt='Students working with clay in a Figure sculpture class at the Fire Arts Center'
					width={300}
					height={213}
				/>
				Here at The Fire Arts Center, we see figure sculpture as essential to
				the understanding of the complexity of 3-dimensional form - as drawing
				is to the understanding of color, light and composition. The
				relationship between sculpting the figure and bronze casting is a long
				one, dating back to the first attempt to master the bronze casting
				process.
			</p>
			<p className='mt-4'>
				The figure program at The Fire Arts Center stresses mastery of the
				classical techniques of sculpting the humans form in clay and wax.
				Students are also given the choice of casting finished work in plaster,
				or firing them in their original terracotta clay.
			</p>
			<p className='mt-4'>Courses in figure study include:</p>
		</section>
	);
}
