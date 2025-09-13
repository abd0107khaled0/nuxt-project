// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// import { lightTheme, darkTheme } from "./plugins/vuetify";
export default defineNuxtConfig({
  appName: "Nuxt Project",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    // "vuetify-nuxt-module",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  plugins: ["~/plugins/vuetify"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Nuxt Project",
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      bodyAttrs: {
        class: "ltr",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "",
        },
        {
          name: "keywords",
          content: "",
        },
        { name: "author", content: "API360" },
      ],
      link: [],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  // vuetify: {
  //   moduleOptions: {
  //     /* module specific options */
  //   },
  //   vuetifyOptions: {
  //     theme: {
  //       defaultTheme: "lightTheme",
  //       themes: {
  //         lightTheme,
  //         darkTheme,
  //       },
  //     },
  //   },
  // },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ar",
        file: "ar.json",
        dir: "rtl",
      },
    ],
    defaultLocale: "en",
    strategy: "no_prefix", // or 'prefix_except_default'
    // vueI18n: "~/i18n.config.ts",
  },
});
