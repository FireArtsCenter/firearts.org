/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	singleQuote: true,
	jsxSingleQuote: true,
	useTabs: true,
	trailingComma: 'es5',
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	// Tailwind 4.0 specific: Point to your CSS entry file if classes aren't sorting
	tailwindStylesheet: './src/styles/global.css',
	tailwindFunctions: ['cn', 'clsx', 'twMerge', 'cva'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.css',
			options: {
				singleQuote: false,
			},
		},
		{
			files: '*.jsonc',
			options: {
				trailingComma: 'none',
			},
		},
	],
};
