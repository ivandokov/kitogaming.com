/** @type {import('tailwindcss').Config} */
const {colors, fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Oswald', ...fontFamily.sans]
            },
            colors: {
                red: {
                    ...colors.red,
                    '950': '#250101',
                    '950-50': 'rgba(37,1,1,.5)',
                },
                discord: '#7289da',
                facebook: '#4267b2',
                instagram: '#d62976',
                youtube: '#f00',
                twitch: '#772ce8',
            }
        },
    },
    plugins: [],
}

