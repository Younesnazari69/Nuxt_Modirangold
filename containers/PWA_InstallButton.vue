<template>
  <button v-if="showInstall" @click="installApp">نصب نرم افزار</button>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

const showInstall = ref<boolean>(false)
const deferredPrompt = ref<any>(null)


onBeforeMount(() => {
    // فقط در سمت کلاینت
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt.value = e;
      showInstall.value = true; // دکمه نصب را نمایش دهید
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA has been installed');
      showInstall.value = false; // مخفی کردن دکمه پس از نصب
    });
});

const installApp =async()=> {
      if (deferredPrompt.value) {
        deferredPrompt.value.prompt(); // نمایش دیالوگ نصب
        const choiceResult = await deferredPrompt.value.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt.value = null;
        showInstall.value = false; // مخفی کردن دکمه پس از نصب
      }
    }
  
</script>

<style scoped>
button {
  position: fixed;
  display: block;
  padding: 10px 20px;
  background-color: #fdbe33;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  right: 15px;
  bottom: 15px;
  z-index: 9;
}
@media (max-width:640px) {
  button {
    width: -webkit-fill-available;
    margin-left: 80px;
}
}
</style>
