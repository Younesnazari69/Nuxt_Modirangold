<script setup lang="ts">

import { ref, } from 'vue';
import Carousel from 'primevue/carousel';
const products = ref([
  {
    name: 'علی',
    description: 'فوق‌العاده برنامه کاربردی میباشد که در راستای ایمنی و عدالت و کمک رسانی صحیح به مشتری و پیمانکار قدم برداشته خسته نباشید سپاس از زحمات شما',
  },
  {
    name: 'سینا ',
    description: 'برنامه خوب و کاربردیه که خیلی کمک میکنه به صنف طلا بندان هم کارفرما و هم اوستاکار من خودم اوستاکارم با سابقه ۱۴ ساله و دنبال کارم کرج خیلی ممنون از برنامه خوبتون',
  },
  {
    name: 'داریوش',
    description: 'برنامه خیلی عالی و کاربردی. برای پیشرفت و توسعه کار پیشنهاد میکنم حتما استفاده کنید ازش.من پنج ستاره دادم چون هر چی که مورد نیازم هست در مورد طلا تو این برنامه داره',
  },
])
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>
<template>
  <div dir="rtl">
    <Carousel :value="products" :numVisible="2" :numScroll="2" :showIndicators="false" :autoplayInterval="5000"
      :circular="true" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="holder animated-item">
          <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi. </p>
          <div class="thumb"> <img src="../public/images/testimonials-img3.jpg" alt="testimonials img"> </div>
          <strong class="name">John Doe</strong> <strong class="designation">CEO, Company</strong>
        </div>
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
/* انیمیشن برای آیتم‌ها */
.animated-item {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 2.10s ease, transform 2.10s ease;
}

::v-deep .p-carousel-item-active .animated-item {
  opacity: 1;
  transform: translateX(0);
}
</style>