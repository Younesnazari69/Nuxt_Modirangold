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
        <div class="row justify-content-md-center">
          <h3>صفحه مورد نظر یافت نشد</h3>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../containers/Layout.vue'
import { useDataStore } from '../stores/data'
import { onBeforeMount, onServerPrefetch } from 'vue';


const store = useDataStore()
onServerPrefetch(async () => {
  store.SetMetaTags('خطا', 'سایت مدیران گلد', 'خطا,مدیران گلد,مدیریت خطا ,خطای عمومی',"404 مدیران گلد","404 مدیران گلد","https://darbastan.com/Error404","https://darbastan.storage.c2.liara.space/Images/logo.png","https://darbastan.com/Error404");
})
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
