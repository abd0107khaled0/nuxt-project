// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'dark', // 👈 حدد الدارك مود كـ default
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#FFC107',
            secondary: '#424242',
            accent: '#1E88E5',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#FF5252',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            background: '#121212',
            surface: '#1E1E1E',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
