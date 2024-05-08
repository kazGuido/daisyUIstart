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
  modules: ['@nuxtjs/tailwindcss', 
  '@nuxtjs/color-mode', 
  "@pinia/nuxt",
  '@nuxtjs/supabase',
  '@vee-validate/nuxt'],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
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
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
  hooks: {
    'nuxt:ready': (nuxt) => {
      console.log('Supabase URL:', nuxt.options.runtimeConfig.public.supabaseUrl);
      console.log('Supabase Anon Key:', nuxt.options.runtimeConfig.public.supabaseAnonKey);
    }
  },
  app: {
  head: {
    script: [
      { src: 'https://js.paystack.co/v1/inline.js', body: true } // Ensure body: true to load the script in the body
    ]
  }}
});
