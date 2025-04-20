<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";

const store = useDataStore();

useHead({
    title: 'راهنما',
    meta: [
      { name: 'description', content: 'اگر نیاز به کمک یا پشتیبانی دارید، به صفحه کمک و پشتیبانی طلا مدیران گلد مراجعه کنید. این صفحه شامل راهنمایی‌ها، سوالات متداول، و روش‌های تماس با تیم پشتیبانی است.' },
      { name: 'keywords', content: 'کمک، پشتیبانی، طلا، سوالات متداول، راهنمایی، طلا مدیران گلد' },
      { property: 'og:title', content: 'Help' },
      { property: 'og:description', content: 'اگر نیاز به کمک یا پشتیبانی دارید، به صفحه کمک و پشتیبانی طلا مدیران گلد مراجعه کنید. این صفحه شامل راهنمایی‌ها، سوالات متداول، و روش‌های تماس با تیم پشتیبانی است.' },
      { property: 'og:url', content: 'https://darbastan.com/help' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/help' },
    ]
})
</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'راهنما مدیران گلد'">
    <div class="service">
      <div class="container">
        <div class="row">
          <p class="text-justify">
            در زمان ثبت نام در وبسایت حتماً به نکات زیر دقت کنید
          </p>
          <p class="text-justify">
            ابتدا باید نوع فعالیت خود را انتخاب کنید اگر کارگر و یا استاد کار
            هستید پس از ثبت نام فقط اطلاعات فردی و شغلی خود را وارد نمایید و اگر
            شرکت هستید اطلاعات خواسته شده را به طور کامل وارد کنید حتما بخش
            انتخاب استان را پر کنید دقت داشته باشید که ایمیل صحیح وارد کنید چون
            ممکن است در مراحل بعدی دچار مشکل شوید قسمت شماره تلفن را حتماً پر
            کنید چون راه ارتباطی ما و مشتریان با شما از این طریق است تذکر 1 :
            شرکت های ثبت نامی باید مرتبط با حوزه صنعت ساختمان و طلا باشند
            تذکر 2 : استاد کاران و کارگران نیز باید در حوزه صنعت ساختمان و
            طلا باشند مثال : نقاش ساختمان،طلا بند،تاسیساتی و ...
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped></style>
