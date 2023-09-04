import {Suspense} from 'react';
import Link from 'next/link';
import SawyerRegisterEmbed from '@/app/components/SawyerRegisterEmbed';

export default function Register() {
	return (
		<section>
			<p>
				You can sign up online below and also fill out our{' '}
				<Link href='/downloads/FireArts_RegistrationForm.pdf'>class registration form!</Link>.
			</p>
			<Suspense fallback={<p>Loading</p>}>
				<SawyerRegisterEmbed />
			</Suspense>
		</section>
	);
}
