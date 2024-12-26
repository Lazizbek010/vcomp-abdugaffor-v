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
                to="/" v-for="link in links" :key="link" >{{ link.name }}</router-link>
          </div>
        </div>
        <div class="nav__top-right flex items-center gap-4">
                <div class="lang">
                        <a href="">RU</a>
                        /
                        <a href="">UA</a>
                </div>
                <div class="profile">
                        <router-link to="/profile" >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 25V23C25 21.9391 24.5259 20.9217 23.682 20.1716C22.8381 19.4214 21.6935 19 20.5 19H11.5C10.3065 19 9.16193 19.4214 8.31802 20.1716C7.47411 20.9217 7 21.9391 7 23V25" stroke="#F4F8FB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 15C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7C13.7909 7 12 8.79086 12 11C12 13.2091 13.7909 15 16 15Z" stroke="#F4F8FB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </router-link>
                </div>
        </div>
      </div>
    </div>
    <div class="nav__bottom"></div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const links = ref([
        {
                name: 'Акции',
                link: '/aksiya'
        },
        {
                name: 'Кредит',
                link: '/aksiya'
        },
        {
                name: 'Оплата и доставка',
                link: '/aksiya'
        },
        {
                name: 'Помощь',
                link: '/aksiya'
        },
        {
                name: 'Скупка Б/У',
                link: '/aksiya'
        },
        {
                name: 'Контакты',
                link: '/aksiya'
        },
 ])
</script>

<style lang="scss" scoped>
</style>