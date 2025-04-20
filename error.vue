<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3> سایت مدیران گلد </h3>
          <p> 
             ما در حال توسعه وبسایت جدید مدیران گلد هستیم و ممکن است برخی صفحات با مشکل مواجه شود بنابراین از صبر و شکیبایی شما سپاسگزاریم به زودی مدیران گلد بروزرسانی کامل خواهد شد
          </p>
        </div>
        <div class="row text-center">
          <h2>صفحه مورد نظر یافت نشد یا سایت با مشکل مواجه شده است</h2>
          <NuxtImg width="300" height="800" loading="lazy" src="https://darbastan.storage.c2.liara.space/1b33f048-abd1-466f-99bc-fa77e9ce2fbd.webp" alt="مسئولیت اجتماعی" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './containers/Layout.vue'
import { useDataStore } from './stores/data'
import { onBeforeMount, onServerPrefetch } from 'vue';


const store = useDataStore()
onBeforeMount(() => {
  document.title = ' 404 مدیران گلد'
})
</script>

<style>
.card {
  box-shadow: inset 0px 0px 10px 2px #fdbe33;
}

.Login {
  padding-right: 20px;
  padding-left: 40px;
}

.card input {
  height: 58px;
  margin: 10px;
}

.btnLogin {
  width: 100%;
  border-radius: 60px;
  padding: 15px;
}

.card-body a {
  font-weight: 400;
  font-size: 12px;
  text-align: right;
  margin: 12px;
}

.card-body .forgot__password {
  color: #489cff;
}
</style>
