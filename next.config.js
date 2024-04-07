/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	async redirects() {
		return [
			{
				source: '/galleries',
				destination: '/artists/',
				permanent: true,
			},
			{
				source: '/sitemap',
				destination: '/',
				permanent: true,
			},
			{
				source: '/classes/forge',
				destination: '/classes/blade-smithing-forging/',
				permanent: true,
			},
			{
				source: '/classes/foundry',
				destination: '/classes/bronze-casting-foundry/',
				permanent: true,
			},
			{
				source: '/classes/full-list/',
				destination: '/classes/',
				permanent: true,
			},
			{
				source: '/galleries/:slug',
				destination: '/artists/:slug/',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
