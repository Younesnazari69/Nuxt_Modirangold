<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";
import { onBeforeMount, ref, onServerPrefetch } from "vue";

const store = useDataStore();

useHead({
    title: 'نمایندگی مدیران گلد',
    meta: [
      { name: 'description', content: 'مدیران گلد به دنبال جذب نمایندگان رسمی در سراسر کشور است. اگر علاقه‌مند به همکاری و دریافت نمایندگی هستید، به صفحه نمایندگان مدیران گلد مراجعه کنید.' },
      { name: 'keywords', content: 'نمایندگی مدیران گلد، پشتیبانی، طلا، نمایندگان رسمی، همکاری با مدیران گلد' },
      { property: 'og:title', content: 'نمایندگی مدیران گلد' },
      { property: 'og:description', content: 'مدیران گلد به دنبال جذب نمایندگان رسمی در سراسر کشور است. اگر علاقه‌مند به همکاری و دریافت نمایندگی هستید، به صفحه نمایندگان مدیران گلد مراجعه کنید.' },
      { property: 'og:url', content: 'https://darbastan.com/representatives' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/representatives' },
    ]
})
</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'نمایندگی مدیران گلد'">
    <div class="service">
      <div class="container">
        <div class="row">
          <p class="text-justify">
            نمایندگی مدیران گلد در سراسر کشور
          </p>
          <p class="text-justify">
            مدیران گلد به عنوان یک پیشرو در ارائه خدمات و محصولات مرتبط با طلا، به دنبال گسترش شبکه نمایندگان خود در سراسر کشور است. اگر شما در شهر یا منطقه‌ای از ایران فعالیت می‌کنید و علاقه‌مند به همکاری با ما هستید، می‌توانید به عنوان نماینده رسمی مدیران گلد فعالیت کنید.

ما از همکاری با افرادی که توانایی‌های حرفه‌ای و اعتماد به نفس بالایی دارند استقبال می‌کنیم و از طریق ارائه آموزش‌ها و پشتیبانی‌های لازم، از نمایندگان خود در راستای رشد و توسعه کسب‌وکارشان حمایت خواهیم کرد.

اگر مایل به دریافت نمایندگی در شهر خود هستید، لطفاً با ما تماس بگیرید تا اطلاعات بیشتر را دریافت کرده و در این مسیر موفق با مدیران گلد همراه شوید.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped></style>
