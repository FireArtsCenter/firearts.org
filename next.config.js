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
		];
	},
};

module.exports = nextConfig;
