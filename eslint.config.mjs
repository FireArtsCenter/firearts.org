import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	// Disables ESLint rules that might conflict with Prettier
	eslintConfigPrettier,
	{
		rules: {
			// Custom rules for your workflow
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'astro/no-set-html-directive': 'error',
		},
	},
	{
		ignores: ['dist/', '.astro/', 'node_modules/', 'src/vendors/*'],
	}
);
