<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="section-header text-center">
          <h3>لیست پیمانکاران و تولید کنندگان</h3>
        </div>
        <VirtualScroller
          v-if="lazyItems.length > 0"
          :items="lazyItems"
          :item-size="rowHeight"
          style="height: 866px"
          lazy
          @lazy-load="onLazyLoad"
          :appendOnly="true"
        >
          <template v-slot:item="slotProps">
            <div class="row">
              <div
                v-for="item in slotProps.item"
                :key="item.topicId"
                class="col-lg-4 col-md-6"
              >
                <div class="service-item">
                  <div class="service-img">
                    <img
                      v-if="item.picture != null"
                      :src="`https://darbastan.storage.c2.liara.space${item.picture}`"
                      alt="Image"
                    />
                    <img
                      v-else="item.picture == null"
                      src="/public/images/empty.jpg"
                      :alt="`${item.pageName}`"
                    />
                    <div class="service-overlay">
                      <p>
                        {{ item.metaDescription }}
                      </p>
                    </div>
                  </div>
                  <div class="service-Title">
                    <h3>
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
                    </h3>
                  </div>
                  <div class="service-text">
                    <h3>
                      {{
                        new Date(item.insertDateTime).toLocaleDateString("fa-IR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      }}
                    </h3>
                    <router-link
                      class="btn"
                      :to="{
                        name: 'ScaffoldingServices',
                        params: {
                          topicId: item.topicId,
                          title: item.title.replaceAll(' ', '-'),
                        },
                      }"
                      >+</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </template>
        </VirtualScroller>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import VirtualScroller from "primevue/virtualscroller";
import { useDataStore } from "../stores/data";
import { onBeforeMount, ref, onServerPrefetch } from "vue";

const store = useDataStore();
const lazyItems = ref<any>([]);
const lazyLoading = ref(false);
const rowHeight = 433;
const PageNumber = ref<number>(0);


// تابع FetchDataAll برای دریافت داده‌ها
const FetchDataAll = async (page: number) => {
  lazyLoading.value = true;
  try {
    await store.FetchTopics(49, page);
    const result = [];
    for (let i = 0; i < store.TopicsData.List.length; i += 3) {
      result.push(store.TopicsData.List.slice(i, i + 3));
    }
    if (page === 1) {
      lazyItems.value = result;
    } else {
      lazyItems.value.push(...result);
    }
    PageNumber.value = page;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    lazyLoading.value = false;
  }
};

// بارگذاری داده‌ها به طور پیش‌فرض
onBeforeMount(async () => {
  document.title = "لیست پیمانکاران و تولید کنندگان";
  await FetchDataAll(1);
});

// استفاده از useAsyncData برای بارگذاری داده‌ها در سرور
await useAsyncData('companies', async () => {
  await FetchDataAll(1);
});

// رویداد lazy load برای بارگذاری بیشتر
const onLazyLoad = async () => {
  await FetchDataAll(PageNumber.value + 1);
};

useHead({
    title: 'لیست شرکتها و پیمانکاران',
    meta: [
      { name: 'description', content: 'لیست شرکت‌ها و تولیدکنندگان طلا در ایران. برای مشاهده اطلاعات و خدمات پیمانکاران و تولیدکنندگان طلا، به صفحه شرکت‌ها مراجعه کنید. معرفی بهترین شرکت‌های طلا برای پروژه‌های مختلف.' },
      { name: 'keywords', content: 'طلا،مدیران گلد،scaffolding,پیمانکار طلا'},
      { property:'og:title', content: 'وبلاگ مدیران گلد'},
      { property:'og:description' , content:'لیست شرکت‌ها و تولیدکنندگان طلا در ایران. برای مشاهده اطلاعات و خدمات پیمانکاران و تولیدکنندگان طلا، به صفحه شرکت‌ها مراجعه کنید. معرفی بهترین شرکت‌های طلا برای پروژه‌های مختلف.'},
      { property:'og:url', content: 'https://darbastan.com/Companies'},
      { property:'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png'},
    ],
    link: [
    { rel: 'canonical', href: 'https://darbastan.com/Companies'},
    ]
  })

</script>

<style>

.p-virtualscroller::-webkit-scrollbar {
  display: none;
}

.p-virtualscroller-content {
  position: relative !important;
}
</style>
