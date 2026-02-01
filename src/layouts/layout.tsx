import '@/app/globals.css';
import {Raleway} from 'next/font/google';
import Header from '@/app/components/Header';
import Navigation from '@/app/components/Navigation/Navigation';
import Footer from '@/app/components/Footer';
import GTM from '@/app/components/GTM';
import {mainNav} from '@/app/components/Navigation/constants';

/**
 * TODO
 * - add canonical url
 * - fix h1 tag to include page name
 *
 */

const raleway = Raleway({
	weight: ['700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en' className={raleway.variable}>
			<body className='bg-black-light font-sans text-gray'>
				<GTM />
				<div id='top' className='max-w-4xl md:grid md:gap-4 md:grid-cols-4 mx-auto'>
					<Header />
					<Navigation navItems={mainNav} />
					<main id='content' className='md:col-start-2 md:col-span-3 px-4 sm:py-4 md:py-4'>
						{children}
					</main>
				</div>
				<Footer navItems={mainNav} />
			</body>
		</html>
	);
}
