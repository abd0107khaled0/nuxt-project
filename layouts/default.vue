<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent >
        <v-list>
      <v-icon icon="mdi mdi-close" @click="rail = !rail"></v-icon>
        </v-list>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh; overflow: auto;">
        <NuxtPage />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const drawer = ref(true);
const rail = ref(true);
</script>

<style lang="scss" scoped></style>
