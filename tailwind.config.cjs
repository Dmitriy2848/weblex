const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./index.ts.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		extend: {},
	},
	plugins: [],
}
