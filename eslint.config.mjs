import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	// Astro's flat config is an array, so we spread it here
	...eslintPluginAstro.configs['flat/recommended'],
	{
		rules: {
			// Custom rules for your workflow
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			// Using Contentful's rich text parser which should address the main
			// security risks here. We should avoid still where possible so just warn
			'astro/no-set-html-directive': 'warn',
			'no-console': 'error',
		},
	},
	eslintConfigPrettier,
	{
		ignores: ['dist/', '.astro/', 'node_modules/', 'src/vendors/*'],
	}
);
