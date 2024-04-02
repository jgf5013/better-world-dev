module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,json,ico,js}'
	],
	swDest: 'service-workers',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};