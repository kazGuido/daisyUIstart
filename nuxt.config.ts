// export default defineNuxtConfig({
//   modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@pinia/nuxt"],
//   colorMode: {
//     preference: 'system', // default theme
//     dataValue: 'theme', // activate data-theme in <html> tag
//     classSuffix: '',
//   },
//   alias: {
//     pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
//   },
//   runtimeConfig: {
//     public: {
//       apiUrl: process.env.API_URL || 'https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev',
//     }
//   },
//   router: {
//     extendRoutes(routes, resolve) {
//       console.log(routes);  // This will log all routes configuration to the console
//     }
//   },
//   head: {
//     script: [
//       { src: 'https://js.paystack.co/v1/inline.js', body: true }
//     ]
//   }
// });
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@pinia/nuxt"],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev',
    }
  },
  app: {
  head: {
    script: [
      { src: 'https://js.paystack.co/v1/inline.js', body: true } // Ensure body: true to load the script in the body
    ]
  }}
});
