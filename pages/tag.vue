<template>
  <Layout>
    <div class="section-header text-center pt-5">
      <h3>تگ ها</h3>
    </div>
    <div v-if="store.SearchResultData != null">
      <div class="testimonial wow fadeIn" data-wow-delay="0.1s"
        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container">
          <div class="section-header text-center">
            <h3>نتایج مربوط به تگ ها</h3>
          </div>
          <div class="service">
            <div class="row">
              <div v-for="item in store.SearchResultData.pagelist" :key="item.pageId" class="col-lg-4 col-md-6">
                <div class="service-item">
                  <div class="service-img">
                    <img v-if="item.imagePath != null" :src="`https://darbastan.storage.c2.liara.space${item.imagePath}`"  :alt="`${item.pageName}`">
                    <img
                        v-else="item.imagePath == null"
                              src="/public/img/empty.jpg"
                              :alt="`${item.pageName}`"
                             />
                    <div class="service-overlay">
                      <p>
                        {{ item.pageSummary }}
                      </p>
                    </div>
                  </div>
                  <div class="service-Title">
                    <h3>  <router-link
                      :to="{ name: 'Blog', params: { pageId: item.pageId, name: item.pageTitle.replaceAll(' ', '-') } }">{{ item.pageTitle }}</router-link></h3>
                  </div>
                  <div class="service-text">
                    <h3>{{ new Date(item.pageDate).toLocaleDateString('fa-IR',
                      {
                        year: 'numeric', month: 'long', day:
                          'numeric'
                      }) }} </h3>
                    <router-link class="btn"
                      :to="{ name: 'Blog', params: { pageId: item.pageId, name: item.pageTitle.replaceAll(' ', '-') } }">+</router-link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3> در حال بارگذاری
      </h3>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../containers/Layout.vue'
import { useDataStore } from '../stores/data'
import { watch } from 'vue';
import {  useRoute } from 'vue-router'


const store = useDataStore()
const route = useRoute()


await useAsyncData('tag', async () => {
  const tag = route.query.tag ? route.query.tag.toString().replaceAll('-', ' ') : '';
  await store.FetchSearch(tag);

});

watch([() => store.SearchResultData], () => {

})

useHead({
  title: ' تگ - مدیران گلد',
  meta: [
    { name: 'description', content: 'صفحه تگ طلاستان شامل تمامی تگ‌های مرتبط با خدمات طلا ، نصب و اجاره طلا، قیمت طلا و اخبار صنعت طلا در ایران است. جستجو کنید و اطلاعات مفید را پیدا کنید.' },
    { name: 'keywords', content: 'طلا , نصب طلا, اجاره طلا, قیمت طلا, طلا تهران, طلا ارزان, خدمات طلا, طلا  ارزان, طلا جدید, انواع طلا, خدمات نصب طلا, طلا  در ایران, اجاره طلا , قیمت اجاره طلا, طلا  نوین, طلا تهران ارزان' },
    { property: 'og:title', content: 'تگ - مدیران گلد' },
    { property: 'og:description', content: 'صفحه تگ طلاستان مجموعه‌ای از تگ‌های مرتبط با خدمات طلا، اجاره طلا، نصب طلا، و قیمت‌ها در ایران است. با جستجو در تگ‌ها، سریع‌تر به اطلاعات مورد نظر خود دست یابید.' },
    { property: 'og:url', content: 'https://darbastan.com/tag' },
    { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://darbastan.com/tag' },
  ]
});

</script>

<style>
.service .service-Title {
  background: #f9f9f9;
}

.service .service-text {
  background: #ffffff;
}

.service .service-Title h3 {
  color: #000;
}
</style>
