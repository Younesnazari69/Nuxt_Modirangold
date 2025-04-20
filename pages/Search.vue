<template>
  <Layout>
    <div class="section-header text-center pt-5">
      <!-- <h3>جستجو مدیران گلد</h3> -->
    </div>
    <div v-if="store.SearchResultData != null">
      <div class="testimonial wow fadeIn" data-wow-delay="0.1s"
        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container">
          <div class="section-header text-center">
            <h3>نتایج مربوط به وبلاگ</h3>
          </div>
          <div class="service">
            <div class="row">
              <div v-for="item in store.SearchResultData.pagelist" :key="item.pageId" class="col-lg-4 col-md-6">
                <div class="service-item">
                  <div class="service-img">
                    <img loading="lazy" v-if="item.imagePath != null" :src="`https://darbastan.storage.c2.liara.space${item.imagePath}`"  :alt="`${item.pageName}`">
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

                    <!-- <h3>نظرات : ۰ </h3> -->
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="testimonial wow fadeIn" data-wow-delay="0.1s"
        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container">
          <div class="section-header text-center">
            <h3>نتایج مربوط به شرکتها</h3>
          </div>
          <div class="service">
            <div class="row">
              <div v-for="item in store.SearchResultData.companylist" :key="item.id" class="col-lg-4 col-md-6">
                <div class="service-item">
                  <div class="service-img">
                    <img loading="lazy" v-if="item.imagePath != null" :src="`https://darbastan.storage.c2.liara.space${item.imagePath}`" :alt="`${item.companyName}`">
                    <img loading="lazy"
                        v-else="item.imagePath == null"
                              src="/public/img/empty.jpg"
                              :alt="`${item.companyName}`"
                             />
                    <div class="service-overlay">
                      <p>
                        {{ item.pageSummary }}
                      </p>
                    </div>
                  </div>
                  <div class="service-Title">
                    <router-link
                                class="title"
                                :to="{
                                  name: 'ScaffoldingCompany',
                                  params: {
                                    Id: item.id,
                                    companyName: item.companyName.replaceAll(' ', '-'),
                                  },
                                }"
                                >{{ item.companyName }}</router-link
                              >
                  </div>
                  <div class="service-text">
                    <h3>{{ new Date(item.dateOfRegistration).toLocaleDateString('fa-IR',
                      {
                        year: 'numeric', month: 'long', day:
                          'numeric'
                      }) }} </h3>
            
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="testimonial wow fadeIn" data-wow-delay="0.1s"
        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container">
          <div class="section-header text-center">
            <h3>نتایج بخش خدمات دهندگان</h3>
          </div>
          <div class="service">
            <div class="row">
              <div v-for="item in store.SearchResultData.topiclist" :key="item.topicId" class="col-lg-4 col-md-6">
                <div class="service-item">
                  <div class="service-img">
                    <img loading="lazy" v-if="item.picture != null" :src="`https://darbastan.storage.c2.liara.space${item.picture}`" :alt="`${item.pageName}`">
                    <img loading="lazy"
                        v-else="item.picture == null"
                              src="/public/img/empty.jpg"
                              :alt="`${item.pageName}`"
                             />
                    <div class="service-overlay">
                      <p>
                        {{ item.town }}
                      </p>
                    </div>
                  </div>
                  <div class="service-Title">
                    <router-link
                      :to="{
                        name: 'ScaffoldingServices',
                        params: {
                          topicId: item.topicId,
                          title: item.title.replaceAll(' ', '-'),
                        },
                      }"
                      >{{ item.pageName }}</router-link
                    >
                  </div>
                  <div class="service-text">
                    <h3>{{ new Date(item.insertDateTime).toLocaleDateString('fa-IR',
                      {
                        year: 'numeric', month: 'long', day:
                          'numeric'
                      }) }} </h3>
               

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
    <div class="text-center" v-else>
      <h2> در حال بارگذاری نتایج جستجو...
      </h2>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../containers/Layout.vue'
import { useDataStore } from '../stores/data'
import {  watch } from 'vue';
import {  useRoute } from 'vue-router'


const store = useDataStore()
const route = useRoute()

await useAsyncData('search', async () => {
  const SearchString = route.query.SearchString?.toString().replaceAll('-',' ')
  store.FetchSearch(SearchString);

});


watch([() =>  route.query.SearchString], () => {
  const SearchString = route.query.SearchString?.toString().replaceAll('-',' ')
  store.FetchSearch(SearchString);
})

useHead({
  title: 'نتایج جستجو - مدیران گلد',
  meta: [
    { name: 'description', content: 'نتایج جستجو در مدیران گلد برای خدمات طلا. بهترین نتایج با استفاده از فیلترهای مختلف برای یافتن خدمات مناسب طلا.' },
    { name: 'keywords', content: 'جستجو، طلا، خدمات طلا، جستجوی آنلاین، مدیران گلد' },
    { property: 'og:title', content: 'نتایج جستجو - مدیران گلد' },
    { property: 'og:description', content: 'نتایج جستجو در مدیران گلد برای خدمات طلا. بهترین نتایج برای خدمات طلا' },
    { property: 'og:url', content: 'https://darbastan.com/search' },
    { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://darbastan.com/search' },
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
