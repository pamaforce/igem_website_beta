module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: '[重制版] Team:USTC-Software',
        script: [
            { src: '/rem.js', type: 'text/javascript', charset: 'utf-8' }
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'initial-scale=1,user-scalable=no' },
            { hid: 'description', name: 'description', content: '[重制版]Team:USTC-Software' },
            { hid: 'keywords', name: 'keywords', content: 'Wiki' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: ['~assets/css/normalize.css'],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    router: {
        scrollBehavior(to) {
            return window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
    },
}