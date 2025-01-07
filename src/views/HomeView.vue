

<template>
  <div class="home">
    <main>
      <section class="banner">
        <div class="container mx-auto flex gap-4">
          <!-- Chap Menu (Комплектующие ПК) -->
          <div class="banner__left w-96">
            <div
              v-for="item in 10"
              :key="item"
              class="flex justify-between items-center bg-white p-4 border-b-2"
            >
              <div class="flex items-center gap-2">
                <img
                  src="/src/assets/icons/Frame 455510.svg"
                  alt=""
                  class="w-6 h-6"
                />
                <span class="text-indigo-950 font-medium"
                  >Комплектующие ПК</span
                >
              </div>
              <img src="/src/assets/icons/Right.svg" alt="" class="w-4 h-4" />
            </div>
          </div>
          <h1>{{ $t("hello") }}</h1>
          <button @click="changeLanguage('en')">English</button>
`    <button @click="changeLanguage('ru')">Russia</button>
  `  <button @click="changeLanguage('uz')">O'zbekcha</button>
          <!-- Banner Content (Right Side) -->
          <div class="banner__right">
            <div class="swiper-container">
              <swiper class="mySwiper" :modules="modules" pagination loop>
                <swiper-slide
                  class="slide-item"
                  v-for="(slide, i) in 5"
                  :key="i"
                >
                  <img
                    :src="`https://picsum.photos/900/300?random=${i}`"
                    alt=""
                  />
                  <div class="slide-item-info flex flex-col gap-4">
                    <h1>TEXT BANNER</h1>
                    <p>BANNER DESCRIPTION SMALL TEXT</p>
                    <button>BANNER BUTTON</button>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../store/counter.js";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();


let modules = ref([Pagination]);

function changeLanguage(lang) {
  locale.value = lang
}
</script>

<style>
.banner__right {
  max-width: 1145px;
  width: 100%;
}
.mySwiper {
  width: 100%;
  height: 400px;
  background-color: red;
}

.slide-item {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
}
.slide-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.slide-item-info {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2;
}
.slide-item h1 {
  position: relative;
  z-index: 1;
  color: #fff;
}

.swiper-pagination {
  text-align: left !important;
  position: absolute ! important;
  left: 40px !important;
  bottom: 40px !important;
}
</style>
