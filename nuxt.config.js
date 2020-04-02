export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'KitoGaming',
        titleTemplate: '%s - KitoGaming',
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
        ['@nuxtjs/google-analytics', {
            id: 'UA-29469126-9'
        }],
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
        linkExactActiveClass: 'text-red-700',
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = async (hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
                    })
            }

            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        }
    },
    purgeCSS: {
        whitelist: ['text-red-100', 'text-sans', 'text-red-700'],
    },
}
