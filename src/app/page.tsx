import type {Metadata} from 'next';
import Link from 'next/link';
import {org} from './constants';
import {getYearsSinceFounding} from './utils/orgData';

export const metadata: Metadata = {
	title: org.name,
	description: `The ${org.name} provides instruction in foundry, forging, welding, metalsmithing, figure sculpture, and more.`,
};

const yearsSinceFounding = getYearsSinceFounding();

export default function HomePage() {
	return (
		<>
			<section>
				<p>
					The {org.name} began {yearsSinceFounding} years ago as a not-for-profit school for sculptors. Our primary
					mission is the <strong>preservation of traditional sculpture technique</strong> by offering high-quality
					training to artists, students and others seeking to learn or perfect their skills. Our secondary mission is to{' '}
					<strong>provide teaching, working, and exhibition opportunities for artists</strong>, as well as technical
					advice and facilities to artists and institutions.
				</p>
				<p className='mt-2'>
					<Link href='/about-us/'>Read more about the {org.name}</Link>
				</p>
				<div className='w-full mt-4 relative'>
					<iframe
						src='https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffireartscenterchicago%2Fvideos%2F10153899014125040%2F&show_text=false&width=560&t=0'
						width='560'
						height='315'
						className='w-full h-full aspect-video'
						style={{border: 'none', overflow: 'hidden'}}
						allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
						allowFullScreen={true}
					></iframe>
				</div>
			</section>

			<section>
				<h2 className='font-raleway font-black text-white my-4 text-3xl'>What’s New</h2>
				<div className='note'>
					<h3 className='font-raleway font-black text-white my-4 text-2xl font-bold'>We’ve got a new address</h3>
					<p>The {org.name} has moved to a new location. Our new address is</p>
					<p className='font-raleway font-black text-white my-4 text-xl font-bold ml-4'>
						1830 N Kostner
						<br />
						Chicago, IL 60639
					</p>
					<p>Enter the building on Cortland and Kenneth.</p>
					<p>Stop by and visit us and check out the great new space.</p>
				</div>

				<div className='note'>
					<h3 className='font-raleway font-black text-white my-4 text-2xl font-bold'>Payment Plans and Discounts</h3>
					<p>
						We at the {org.name} are not immune to the challenges of a difficult economy. Our mission has always been to
						preserve the traditional methods and techniques of sculptors as well as the technical skills relevant to
						those just looking to develop a new trade. In order for us to meet that mission we need to provide our
						classes to as many people as we can. However, when times are tough, finding the money to pay for classes
						like this is hard. For that reason we have been offering a 1/2-down payment plan to make it easier to pay
						for classes. Now, in addition to that discount, we are introducing a bartered services option to reduce
						class prices.
					</p>
					<h4 className='font-raleway font-black text-white my-4 text-xl font-bold'>How does it work?</h4>
					<p>
						Do you have experience with fund-raising and think you can lend a hand? Maybe accounting or legal
						experience? Do you work somewhere that tosses out scrap metal which could be reused by us? The possibilties
						are endless. The {org.name} is always looking for tips and materials to help us grow, and we want to offer
						you ways to learn for less.
					</p>
					<h4 className='font-raleway font-black text-white my-4 text-xl font-bold'>
						How do I take advantage of the payment plans and discounts?
					</h4>
					<p>
						Call us at 773.544.9908. It’s as simple as that. Call and let us know what you have to trade and we can work
						out a discount plan for you.
					</p>
				</div>

				<div className='note'>
					<h3 className='font-raleway font-black text-white my-4 text-2xl font-bold'>Class Lengths</h3>
					<p>
						We offer various class lengths to accommodate your schedule better. For most classes, you can choose between{' '}
						<strong>10 week</strong> and <strong>16 week</strong> courses.
					</p>
					<p className='mt-2'>
						<Link href='/classes/'>Check out all of our classes.</Link>
					</p>
				</div>
			</section>
		</>
	);
}
