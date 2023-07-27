/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		forceSwcTransforms: true,
	},
	images: {
		domains: ["cdn.weatherapi.com"],
	},
};

module.exports = nextConfig;
