const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            sans: 'Oswald, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        },
        extend: {
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
            }
        },
    },
    variants: {},
    plugins: [],
};
