module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,json,ico,js}'
	],
	// swDest: 'public/service-workers',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};