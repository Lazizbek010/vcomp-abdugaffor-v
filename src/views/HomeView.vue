

<template>
  <div class="home">
    <main>
      <section class="banner">
        <div class="container mx-auto flex gap-4">
          <!-- Chap Menu (Комплектующие ПК) -->
          <div class="banner__left w-96">
            <div v-for="item in 10" :key="item" class="flex justify-between items-center bg-white p-4  border-b-2">
              <div class="flex items-center gap-2">
                <img src="/src/assets/icons/Frame 455510.svg" alt="" class="w-6 h-6">
                <span class="text-indigo-950 font-medium">Комплектующие ПК</span>
              </div>
              <img src="/src/assets/icons/Right.svg" alt="" class="w-4 h-4">
            </div>
          </div>

          <!-- Banner Content (Right Side) -->
          <div class="banner__right flex-1">
            <!-- O'ng kontent qo'shish uchun joy -->
          </div>
        </div>
      </section>
      <button @click="qoshish">BOSSSSSSSSSSSSSSSSSSSSSSSS</button>
    </main>
  </div>
</template>

<script setup>
import {useCounterStore} from '../store/counter.js'
const haaaaa = useCounterStore()
const { qoshish } = haaaaa;
</script>

<style scoped>
</style>
