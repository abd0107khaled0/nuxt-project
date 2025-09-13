<template>
  <div :dir="lang" :class="{ dark: theme.global.current.value.dark }">
    <NuxtPluginIndicator />
    <NuxtLoadingIndicator />
    <NuxtLink to="/locales"> locales </NuxtLink>
    <div></div>
    <NuxtLink to="/changeTheme"> changeTheme </NuxtLink>
    <div></div>
    <NuxtLink to="/"> home </NuxtLink>
    <div></div>

    <v-btn @click="toggleTheme">Toggle Theme</v-btn>

    <NuxtPage />
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
import { useI18n } from "vue-i18n";
import { onMounted, computed } from "vue";

const theme = useTheme();
const { locale } = useI18n();

// ✅ reactive direction based on current locale
const lang = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));

// ✅ حمل الـ theme من localStorage بعد ما الصفحة تفتح
onMounted(() => {
  const savedTheme = localStorage.getItem("vuetify-theme");
  if (savedTheme) {
    theme.global.name.value = savedTheme;
  }
});

// ✅ زرار للتبديل بين الثيمين
const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("vuetify-theme", newTheme);
};
</script>

