

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
          <div class="relative bg-gray-900 text-white">
  <img src="../assets/images/banner.png" alt="Banner Image" class="w-full object-cover h-72 md:h-96">
  <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
    <h1 class="text-4xl md:text-6xl font-bold">TEXT BANNER</h1>
    <p class="text-lg md:text-xl mt-2">BANNER DESCRIPTION SMALL TEXT</p>
    <button class="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">BANNER BUTTON</button>
  </div>
  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    <div class="w-3 h-3 bg-white rounded-full"></div>
    <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
    <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
  </div>
</div>

        </div>
      </section>
      <!-- <button @click="qoshish">BOSSSSSSSSSSSSSSSSSSSSSSSS</button> -->
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
