module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#9933CC",
				customBlue: "#F2F2F8",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
