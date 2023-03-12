module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	staticPageGenerationTimeout: 1000,
	images: {
		domains: ["uguide.jp", "shopclip.jp", "ssl-images-amazon.com"],
	},
	async redirects() {
		return [
			// redirect any /wp/wp-content/** requests to /wp-content/**,
			{
				source: "/wp/wp-content/:rest*",
				destination: "https://shopclip.jp/wp/wp-content/:rest*",
				permanent: true,
			},
		];
	},
};
