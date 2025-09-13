<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    hello world
     
  </div>
</template>

<script setup>
import  useAuthFetch  from "~/utils/useAuthFetch";
import { cartsUrl } from "~/server/apiUrls/urls";

const { data, error } = useAuthFetch(cartsUrl.url, {
  server: false,
  method: cartsUrl.method,
});
</script>
