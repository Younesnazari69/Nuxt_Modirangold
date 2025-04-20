<template>
  <div class="redirect-container">
    <h1 class="text-success">به سایت مدیران گلد خوش آمدید</h1>
    <h1 class="title">در حال انتقال به صفحه مورد نظر...</h1>
    <p v-if="error" class="error">خطا در انتقال: {{ error.message }}</p>
  </div>
</template>

<script setup>
import { useRoute, useAsyncData } from '#app';
import axios from 'axios';

const route = useRoute();
const shortUrl = route.params.shortUrl;

// استفاده از useAsyncData برای درخواست غیرهمزمان
const { data, error } = await useAsyncData('shortlinkredirect', async () => {
  const response = await axios.get(`https://new.darbastan.org/api/Pages/RedirectToOriginal/${shortUrl}`);
  return response.data;
});

// انجام ریدایرکت در سمت کلاینت
if (process.client && data?.value) {
  window.location.href = data.value;
}
</script>

<style scoped>
.redirect-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
}

.title {
  font-size: 2em;
  color: #333;
}

.error {
  font-size: 1.2em;
  color: #ff4d4d;
}
</style>
