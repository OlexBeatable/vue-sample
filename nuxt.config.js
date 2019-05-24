require('dotenv').config();

module.exports = {

    /*
    ** Page head
    */
    head: {
        titleTemplate: '%s - Sportshop',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ]
    },

    /*
    ** Styles
     */
    css: [
        '@/assets/scss/style.scss'
    ],

    /*
    ** Modules
     */
    modules: [
        ['bootstrap-vue/nuxt', { css: false }],
        '@nuxtjs/font-awesome',
        '@nuxtjs/axios',
        '@nuxtjs/router',
        '@nuxtjs/toast',
        'nuxt-material-design-icons'
    ],
    axios: {
        baseURL: process.env.API_HOST,
        errorHandler (error, { store, redirect }) {
            if (error.response && error.response.status === 401) {
                store.dispatch('auth/logout', true);
                redirect('/');
                return Promise.resolve(error);
            } else if (error.response) {
                error.statusCode = error.statusCode || parseInt(error.response.status) || 500;
                error.message = error.message || error.response.statusText || (error.statusCode + ' (Internal Server Error)');
            } else if (error.request) {
                error.statusCode = error.statusCode || 500;
                error.message = error.message || 'request error';
            }

            return Promise.reject(error);
        }
    },
    toast: {
        position: "bottom-center",
        duration : 3000,
        icon: 'check'
    },

    plugins: [
        { src: '@/plugins/swiper.js', ssr: false },
        { src: '@/plugins/nuxt-client-init.js', ssr: false }
    ],

    srcDir: 'client/',

    /*
    ** Build configuration
    */
    build: {

        vendor: ['axios'],

        /*
        ** Run ESLINT on save
        */
        extend (config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    router: {
        middleware: 'check-auth'
    }
};
