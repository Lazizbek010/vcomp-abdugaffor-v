<template>
  <div class="flex flex-col h-screen">
    <NavComponent />
    <div class="flex-1">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavComponent from "./components/NavComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

