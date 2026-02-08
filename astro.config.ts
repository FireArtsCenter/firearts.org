import { defineConfig, envField, fontProviders } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
	integrations: [react(), icon()],

	env: {
		schema: {
			GTM_ID: envField.string({
				context: 'client',
				access: 'public',
				startsWith: 'GTM-',
			}),
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'Raleway',
				weights: [700, 900],
				styles: ['normal'], // just loading normal for now but this would allow italic
				display: 'swap',
				cssVariable: '--font-raleway',
			},
		],
	},
});

