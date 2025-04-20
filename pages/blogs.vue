<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="section-header text-center">
          <h3>وبلاگ مدیران گلد</h3>
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
                :key="item.id"
                class="col-lg-4 col-md-6"
              >
                <div class="service-item">
                  <div class="service-img">
                    <router-link
                      :to="{
                        name: 'Blog',
                        params: {
                          pageId: item.pageId,
                          name: item.pageTitle.replaceAll(' ', '-'),
                        },
                      }"
                    >
                      <NuxtImg
                        v-if="item.imagePath != null"
                        :src="`https://darbastan.storage.c2.liara.space${item.imagePath}`"
                        :alt="`${item.pageTitle}`"
                        format="webp"
                      />
                      <NuxtImg
                        v-else="item.imagePath == null"
                        src="../public/img/Logo1.png"
                        :alt="`${item.pageTitle}`"
                        format="webp"
                      />
                    </router-link>

                    <div class="service-overlay">
                      <p>
                        <router-link
                          :to="{
                            name: 'Blog',
                            params: {
                              pageId: item.pageId,
                              name: item.pageTitle.replaceAll(' ', '-'),
                            },
                          }"
                          >{{ item.pageSummary }}</router-link
                        >
                      </p>
                    </div>
                  </div>
                  <div class="service-Title">
                    <h3>
                      <router-link
                        :to="{
                          name: 'Blog',
                          params: {
                            pageId: item.pageId,
                            name: item.pageTitle.replaceAll(' ', '-'),
                          },
                        }"
                        >{{ item.pageTitle }}</router-link
                      >
                    </h3>
                  </div>
                  <div class="service-text">
                    <h3>
                      {{
                        new Date(item.pageDate).toLocaleDateString("fa-IR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      }}
                    </h3>
                    <router-link
                      class="btn"
                      :to="{
                        name: 'Blog',
                        params: {
                          pageId: item.pageId,
                          name: item.pageTitle.replaceAll(' ', '-'),
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
import { useRouter } from "vue-router";

const store = useDataStore();
const Router = useRouter();
const lazyItems = ref<any>([]);
const lazyLoading = ref(false);
const rowHeight = 433;
const PageNumber = ref<number>(0);



// تابع FetchDataAll برای دریافت داده‌ها
const FetchDataAll = async (page: number) => {
  lazyLoading.value = true;
  try {
    await store.FetchPages(49, page);
    const result = [];
    for (let i = 0; i < store.PagesData.List.length; i += 3) {
      result.push(store.PagesData.List.slice(i, i + 3));
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
  document.title = "وبلاگ مدیران گلد";
  await FetchDataAll(1);
});

// استفاده از useAsyncData برای بارگذاری داده‌ها در سرور
await useAsyncData('blogs', async () => {
  await FetchDataAll(1);
});

// رویداد lazy load برای بارگذاری بیشتر
const onLazyLoad = async () => {
  await FetchDataAll(PageNumber.value + 1);
};



useHead({
    title: 'وبلاگ مدیران گلد',
    meta: [
      { name: 'description', content: 'وبلاگ مدیران گلد کاملترین اطلاعات درباره صنعت طلا و ساخت و ساز ایران و جهان' },
      { name: 'keywords', content: 'طلا،مدیران گلد،scaffolding'},
      { property:'og:title', content: 'وبلاگ مدیران گلد'},
      { property:'og:description' , content:'وبلاگ مدیران گلد کاملترین اطلاعات درباره صنعت طلا و ساخت و ساز ایران و جهان'},
      { property:'og:url', content: 'https://darbastan.com/blogs'},
      { property:'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png'},
    ],
    link: [
    { rel: 'canonical', href: 'https://darbastan.com/blogs'},
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
/* Global styles for the blog page */
.service {
  padding: 60px 0;
}

.service .section-header {
  margin-bottom: 50px;
}

.service .section-header h3 {
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.service-item {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
}

.service-item:hover {
  transform: translateY(-10px);
}

.service-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 2px solid #eee;
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: opacity 0.3s ease;
}

.service-item:hover .service-overlay {
  opacity: 1;
}

.service-overlay p {
  font-size: 16px;
  text-align: center;
  margin: 0;
}

.service-Title h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 15px 0;
}

.service-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-bottom: 2px solid #eee;
}

.service-text h3 {
  font-size: 16px;
  color: #666;
}

.service-text .btn {
  font-size: 20px;
  color: #fff;
  background-color: #007bff;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.service-text .btn:hover {
  background-color: #0056b3;
}

/* Virtual Scroller */
.p-virtualscroller::-webkit-scrollbar {
  display: none;
}

.p-virtualscroller-content {
  position: relative !important;
}

/* Responsive styles */
@media (max-width: 1200px) {
  .service-item {
    margin-bottom: 20px;
  }

  .service-Title h3 {
    font-size: 16px;
  }

  .service-text h3 {
    font-size: 14px;
  }
}

@media (max-width: 992px) {
  .service .section-header h3 {
    font-size: 30px;
  }

  .service-item {
    margin-bottom: 15px;
  }

  .service-Title h3 {
    font-size: 14px;
  }

  .service-text h3 {
    font-size: 12px;
  }

  .service-text .btn {
    font-size: 18px;
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 768px) {
  .service .section-header h3 {
    font-size: 24px;
  }

  .service-item {
    margin-bottom: 10px;
  }

  .service-Title h3 {
    font-size: 14px;
  }

  .service-text h3 {
    font-size: 12px;
  }

  .service-text .btn {
    font-size: 16px;
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 576px) {
  .service .section-header h3 {
    font-size: 20px;
  }

  .service-item {
    margin-bottom: 10px;
  }

  .service-Title h3 {
    font-size: 12px;
  }

  .service-text h3 {
    font-size: 10px;
  }

  .service-text .btn {
    font-size: 14px;
    width: 25px;
    height: 25px;
  }
}


</style>
