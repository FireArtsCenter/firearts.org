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
				source: '/galleries/student-work/',
				destination: '/artists/',
				permanent: true,
			},
			{
				source: '/galleries/:slug',
				destination: '/artists/:slug/',
				permanent: true,
			},
			{
				source: '/classes/figure-study/',
				destination: '/classes/figure-study-sculpture/',
				permanent: true,
			},
			{
				source: '/artists/student-work/',
				destination: '/artists/',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
