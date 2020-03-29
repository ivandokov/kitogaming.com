export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'KitoGaming',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'KitoGaming by Kitodar Todorov'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'icon', type: 'image/png', href: '/favicon.ico', sizes: '32x32'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald&display=swap&subset=cyrillic'}
        ],
        bodyAttrs: {
            class: 'text-red-100 text-sans'
        }
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    router: {
        linkActiveClass: 'text-red-700',
        linkExactActiveClass: 'text-red-700'
    }
}
