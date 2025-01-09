<template>
  <div class="nav">
    <div class="nav__top bg-blue-900 py-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="nav__top-left flex items-center gap-4">
          <div class="bars">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 16H26"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 8H26"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 24H26"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="nav__links flex items-center gap-4">
            <router-link
              class="text-white"
              to="/"
              v-for="link in links"
              :key="link"
              >{{ $t(link.name) }}</router-link
            >
          </div>
        </div>
        <div class="nav__top-right flex items-center gap-4">
          <div class="lang">
            <button @click="changeLanguage('en')">En</button>/
            <button @click="changeLanguage('ru')">ru</button>/
            <button @click="changeLanguage('uz')">ux</button>
            <a href="">RU</a>
            /
            <a class="ua text-white" href="">UA</a>
          </div>
          <div class="profile">
            <router-link to="/profile">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 25V23C25 21.9391 24.5259 20.9217 23.682 20.1716C22.8381 19.4214 21.6935 19 20.5 19H11.5C10.3065 19 9.16193 19.4214 8.31802 20.1716C7.47411 20.9217 7 21.9391 7 23V25"
                  stroke="#F4F8FB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 15C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7C13.7909 7 12 8.79086 12 11C12 13.2091 13.7909 15 16 15Z"
                  stroke="#F4F8FB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="nav__bottom flex items-center py-8">
      <div class="container mx-auto flex gap-8 items-center">
        <div class="nb__left flex gap-12 items-center">
          <img
            class="comp_img h-12 w-48"
            src="/src/assets/icons/Frame 7780.svg"
            alt=""
          />
          <div
            class="backround bg-green-500 flex gap-5 py-4 px-10 rounded-md items-center"
          >
            <strong class="katalog text-white">КАТАЛОГ ТОВАРОВ</strong>
            <img class="kub h-7" src="/src/assets/icons/Catalog.svg" alt="" />
          </div>
        </div>
        <div class="nb__center border rounded-md">
          <div class="father flex items-center">
            <div class="double border-none outline-none py-3 px-4">
              <input
                class="input outline-none w-96"
                type="text"
                placeholder="Поиск "
              />
            </div>
            <div class="single bg-blue-800 py-3 px-4 rounded">
              <img src="/src/assets/icons/search.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="nb__right flex items-center gap-6">
          <div class="ikkalasi flex gap-6">
            <strong class="tel text-blue-800 text-lg">050 065 87 96</strong>
            <img src="/src/assets/icons/vector.svg" alt="" />
          </div>
          <div class="lime w-0.5 h-6 bg-blue-900"></div>
          <div class="uchchalasi flex items-center gap-6 mb-5">
            <div class="kons">
              <div
                class="love bg-amber-400 w-6 h-6 rounded-full translate-y-1 translate-x-6 py- px-1 text-center"
              >
                22
              </div>
              <img src="/src/assets/icons/Vector 1.svg" alt="" />
            </div>
            <div class="kons">
              <div
                class="love bg-amber-400 w-6 h-6 rounded-full translate-y-2 translate-x-6 py- px-1 text-center"
              >
                22
              </div>
              <img src="/src/assets/icons/Frame 7786.svg" alt="" />
            </div>
            <div class="kons">
              <div
                class="love bg-green-500 w-6 h-6 rounded-full translate-y-2 translate-x-6 py- px-1 text-center"
              >
                {{ counterStore.cart }}
              </div>
              <img src="/src/assets/icons/Shape.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useCounterStore } from "../store/counter.js";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import lang from "../locales/lang.json";

const counterStore = useCounterStore();
const { locale, t } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
}

const links = computed(() => {
  return lang[locale.value]?.menu || [];
});
</script>

<style lang="scss" scoped>
</style>