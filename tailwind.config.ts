import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',

				'fac-red': '#990000',
				'fac-orange': '#ff9900',

				black: '#000000',
				'black-light': '#222222',
				'grey-darkest': '#3d4852',
				'grey-darker': '#606f7b',
				'grey-dark': '#8795a1',
				grey: '#c9c9c9',
				'grey-light': '#dae1e7',
				'grey-lighter': '#f1f5f8',
				'grey-lightest': '#f8fafc',
				white: '#ffffff',
			},
			fontFamily: {
				raleway: [
					'Raleway',
					'system-ui',
					'BlinkMacSystemFont',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans-serif',
				],
			},
		},
	},
};
export default config;
