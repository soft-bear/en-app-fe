export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_TITLE || 'en-ubu-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/en-ubu-logo.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/moment-thai.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: [
        'faHouse',
        'faRightToBracket',
        'faUserPlus'
      ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  bootstrapVue: {
    icons: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'https://en-ubu-be.test',
    credentials: true
  },

  router: {
  },

  auth: {
    strategies: {
      'laravelSanctum': {
				provider: 'laravel/sanctum',
				url: `${process.env.API_URL || 'https://en-ubu-be.test'}`
			},
      sanctumToken: {
        provider: 'laravel/jwt',
        url: process.env.API_URL || 'https://en-ubu-api.test',
				token: {
					property: 'token',
					global: true,
				},
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/user/me', method: 'get' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
			home: '/'
		},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
  }
}
