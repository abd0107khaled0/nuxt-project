<template>
  <div>
    <button @click="toggleLang('en')">{{ $t('en') }}</button>
    <div></div>
    <button @click="toggleLang('ar')">{{ $t('ar') }}</button>
    <h1>{{ $t('hello') }}</h1>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { setLocale, locale } = useI18n();

function toggleLang(lang) {
  if (locale.value === lang) return;
  setLocale(lang);
}
</script>
