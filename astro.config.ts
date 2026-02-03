import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	integrations: [react()],

	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'Raleway',
				weights: [700,900],
				styles: ['normal'], // just loading normal for now but this would allow italic
				display: 'swap',
				cssVariable: '--font-raleway',
			},
		],
	},
});
