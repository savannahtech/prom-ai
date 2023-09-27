/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBg: '#ECEFF1',
				'white-A700': '#ffffff',
				'blue_gray-50': '#eceff1',
				'blue_gray-100': '#D4D4D4',
				primary: '#283593',
			},
		},
	},
	plugins: [],
};
