<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";

const store = useDataStore();

useHead({
    title: 'حریم خصوصی',
    meta: [
      { name: 'description', content: 'سیاست حفظ حریم خصوصی طلا مدیران گلد: در این صفحه، اطلاعات جمع‌آوری‌شده از کاربران و نحوه استفاده از آنها در سایت توضیح داده شده است. حفاظت از اطلاعات شخصی شما در اولویت ما قرار دارد.' },
      { name: 'keywords', content: 'حریم خصوصی، سیاست حریم خصوصی، اطلاعات کاربران، طلا مدیران گلد' },
      { property: 'og:title', content: 'حریم خصوصی' },
      { property: 'og:description', content: 'سیاست حفظ حریم خصوصی طلا مدیران گلد: در این صفحه، اطلاعات جمع‌آوری‌شده از کاربران و نحوه استفاده از آنها در سایت توضیح داده شده است. حفاظت از اطلاعات شخصی شما در اولویت ما قرار دارد.' },
      { property: 'og:url', content: 'https://darbastan.com/privacy' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/privacy' },
    ]
})
</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'حریم خصوصی'">
    <div class="service">
      <div class="container">
        <div class="row">
          <p class="text-justify">
            اگر شما سایت مدیران گلد را فقط بازدید می کنید ٬ اطلاعاتی جزء گزارشات
            نمونه‌ای مرتبط با صفحه بازدید شده توسط سرویس دهنده جمع‌آوری نخواهد
            شد. اگر شما در مدیران گلد ثبت نام می کنید ایمیل آدرس شما درخواست می
            شود. وقتی شما از امکانات مدیران گلد استفاده می کنید اطلاعات شخصی دیگر
            درخواست می شود. اطلاعات شخصی شما(اطلاعات تماس، آدرس و ...) برای
            انجام امور مربوط به شخص شما مورد استفاده قرار می گیرند و در اختیار
            اشخاص حقیقی یا حقوقی دیگر درصورتی که درج آگهی کنید قرار خواهد گرفت.
            برای ورود به حساب کاربری در مدیران گلد کاربران می بایست از نام کاربری
            و رمز عبور که در هنگام ثبت نام انتخاب می کنند استفاده کنند. رمز عبور
            تنها تضمین کنندهٔ شناسایی یک کاربر می‌باشد.تمامی کاربران تشویق به
            انتخاب کلمهٔ عبور قدرتمند و منع در به اشتراک گذاشتن آن می‌شوند.هیچ
            کس نباید دانسته بطور مستقیم یا غیر‌مستقیم کلمهٔ عبور کاربری را برای
            عموم افشاء کند. در هر بار بازدید شما از سایت مدیران گلد ٬ اطلاعات
            فراوانی از سوی شما به سرویس دهنده ارسال می‌شود. بسیاری از سرویس
            دهندگان قسمتی از این گزارشات را که می‌توانند در ارزیابی صفحات محبوب
            ٬ ياتشخيص اینکه چه سایتی با آنها ارتباط دارد و اینکه از چه نوع
            جستجوگر اینترنتی استفاده شده را نگهداری می‌کنند. این گزارشات در
            ساختن صفحات اطلاعات‌دهی آماری استفاده می‌شوند. گزارشات خام هرگز علنی
            نخواهند شد. اين گزارشات ممکن است توسط برنامه‌نویسان در جهت حل مشکلات
            تکنیکی و یا ردیابی رفتارهای ناخواسته و مشکل‌آفرین شبکه‌ای که وب‌گاه
            را دچار مشکل می‌سازند مورد استفاده قرارگیرند. آی‌پی آدرسهای استخراج
            شدهٔ کاربران از این گزارشات بطور متناوب برای ارتباط دادن کاربران و
            آدرسهای ثبت شده در ویرایشات برای بررسی سوء‌استفاده‌ها شامل کاربران
            خرابکاری که از چندین شناسهٔ کاربری استفاده می‌کنند ٬ تخریبگری ٬ اذیت
            و آزار دیگر کاربران و یا مواردی این چنین استفاده می‌شوند. حساب‌های
            کاربری کاربران بعد از ایجاد شدن قابل حذف شدن نمی‌باشند. امکان تغییر
            نام کاربری در سایت دربستان وجود ندارد. چنانچه نیاز به راهنمایی
            بیشتری در رابطه با حریم خصوصی کاربران در مدیران گلد دارید از طریق فرم
            تماس با ما در ارتباط باشید
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped></style>
