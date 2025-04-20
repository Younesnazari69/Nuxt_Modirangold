<template>
    <div>
      <h1>Test API Data</h1>
      <pre>{{ sitemapData }}</pre>
    </div>
  </template>
  
  <script setup>
  import { watchEffect } from 'vue';
  
  const { data: sitemapData, error } = await useAsyncData('sitemap', () =>
    $fetch('https://new.darbastan.org/api/Seos/SiteMapAll')
  );
  
  if (error.value) {
    console.error('API Error:', error.value);
  }
  
  // بررسی تغییرات sitemapData
  watchEffect(() => {
 //   console.log('Sitemap Data:', sitemapData.value);
  });
  </script>