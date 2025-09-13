<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.current.value.dark ? 'light' : 'dark'
  localStorage.setItem("vuetify-theme", theme.global.name.value)
}
</script>

<template>
  <v-btn @click="toggleTheme">Toggle Theme</v-btn>
  <div>
    Current Theme: {{ theme.global.name.value }}
  </div>

  <v-btn color="primary">test color</v-btn>
</template>

