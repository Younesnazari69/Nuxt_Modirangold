<script setup lang="ts">
//import { de } from "element-plus/es/locale";
import Layout from "../../containers/Layout.vue";
import { useDataStore } from "../../stores/data";
import VirtualScroller from "primevue/virtualscroller";

import { onBeforeMount, ref, onServerPrefetch } from "vue";
import { useRouter, useRoute } from "vue-router";

const store = useDataStore();
const router = useRouter();

const route = useRoute();
const LocationInfo = ref<any>({ Id: null, Title: null });

const Users = ref<any>({ List: null });
const User = ref<any>(null);

const lazyItems = ref<any>([]);
const lazyLoading = ref(false);
const rowHeight = 433;
const PageNumber = ref<number>(0);

await useAsyncData("cities", async () => {
  switch (route.path) {
    case "/Tehran":
      LocationInfo.value.id = 1;
      LocationInfo.value.Title = "تهران";
      break;
    case "/tehran":
      LocationInfo.value.id = 1;
      LocationInfo.value.Title = "تهران";
      break;
    case "/Esfahan":
      LocationInfo.value.id = 6;
      LocationInfo.value.Title = "اصفهان";
      break;
    case "/esfahan":
      LocationInfo.value.id = 6;
      LocationInfo.value.Title = "اصفهان";
      break;
    case "/Fars":
      LocationInfo.value.id = 16;
      LocationInfo.value.Title = "شیراز";
      break;
    case "/fars":
      LocationInfo.value.id = 16;
      LocationInfo.value.Title = "شیراز";
      break;
    case "/SistanvaBalochestan":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "زاهدان";
      break;
    case "/sistanvabalochestan":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "زاهدان";
      break;
    case "/KohgiloyevaBoyerAhmad":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "یاسوج";
      break;
    case "/kohgiloyevaboyerAhmad":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "یاسوج";
      break;
    case "/Gilan":
      LocationInfo.value.id = 23;
      LocationInfo.value.Title = "رشت";
      break;
    case "/gilan":
      LocationInfo.value.id = 23;
      LocationInfo.value.Title = "رشت";
      break;
    case "/Boshehr":
      LocationInfo.value.id = 31;
      LocationInfo.value.Title = "بوشهر";
      break;
    case "/boshehr":
      LocationInfo.value.id = 31;
      LocationInfo.value.Title = "بوشهر";
      break;
    case "/Alborz":
      LocationInfo.value.id = 7;
      LocationInfo.value.Title = "کرج";
      break;
    case "/alborz":
      LocationInfo.value.id = 7;
      LocationInfo.value.Title = "کرج";
      break;
    case "/Azarbaijansharghi":
      LocationInfo.value.id = 3;
      LocationInfo.value.Title = "تبریز";
      break;
    case "/azarbaijansharghi":
      LocationInfo.value.id = 3;
      LocationInfo.value.Title = "تبریز";
      break;
    case "/Zanjan":
      LocationInfo.value.id = 13;
      LocationInfo.value.Title = "زنجان";
      break;
    case "/zanjan":
      LocationInfo.value.id = 13;
      LocationInfo.value.Title = "زنجان";
      break;
    case "/Kermanshah":
      LocationInfo.value.id = 20;
      LocationInfo.value.Title = "کرمانشاه";
      break;
    case "/kermanshah":
      LocationInfo.value.id = 20;
      LocationInfo.value.Title = "کرمانشاه";
      break;
    case "/Hormozgan":
      LocationInfo.value.id = 27;
      LocationInfo.value.Title = "بندرعباس";
      break;
    case "/hormozgan":
      LocationInfo.value.id = 27;
      LocationInfo.value.Title = "بندرعباس";
      break;
    case "/Golestan":
      LocationInfo.value.id = 22;
      LocationInfo.value.Title = "گرگان";
      break;
    case "/golestan":
      LocationInfo.value.id = 22;
      LocationInfo.value.Title = "گرگان";
      break;
    case "/Lorestan":
      LocationInfo.value.id = 24;
      LocationInfo.value.Title = "خرم آباد";
      break;
    case "/lorestan":
      LocationInfo.value.id = 24;
      LocationInfo.value.Title = "خرم آباد";
      break;
    case "/KhorasanRazavi":
      LocationInfo.value.id = 10;
      LocationInfo.value.Title = "مشهد";
      break;
    case "/khorasanrazavi":
      LocationInfo.value.id = 10;
      LocationInfo.value.Title = "مشهد";
      break;
    case "/Khozestan":
      LocationInfo.value.id = 12;
      LocationInfo.value.Title = "اهواز";
      break;
    case "/khozestan":
      LocationInfo.value.id = 12;
      LocationInfo.value.Title = "اهواز";
      break;
    case "/Hamedan":
      LocationInfo.value.id = 28;
      LocationInfo.value.Title = "همدان";
      break;
    case "/hamedan":
      LocationInfo.value.id = 28;
      LocationInfo.value.Title = "همدان";
      break;
    case "/Kerman":
      LocationInfo.value.id = 19;
      LocationInfo.value.Title = "کرمان";
      break;
    case "/kerman":
      LocationInfo.value.id = 19;
      LocationInfo.value.Title = "کرمان";
      break;
    case "/Mazandaran":
      LocationInfo.value.id = 25;
      LocationInfo.value.Title = "ساری";
      break;
    case "/mazandaran":
      LocationInfo.value.id = 25;
      LocationInfo.value.Title = "ساری";
      break;
    case "/Kordestan":
      LocationInfo.value.id = 18;
      LocationInfo.value.Title = "سنندج";
      break;
    case "/kordestan":
      LocationInfo.value.id = 18;
      LocationInfo.value.Title = "سنندج";
      break;
    case "/Yazd":
      LocationInfo.value.id = 29;
      LocationInfo.value.Title = "یزد";
      break;
    case "/yazd":
      LocationInfo.value.id = 29;
      LocationInfo.value.Title = "یزد";
      break;
    case "/markazi":
      LocationInfo.value.id = 26;
      LocationInfo.value.Title = "اراک";
      break;
    case "/Markazi":
      LocationInfo.value.id = 26;
      LocationInfo.value.Title = "اراک";
      break;
    case "/qom":
      LocationInfo.value.id = 17;
      LocationInfo.value.Title = "قم";
      break;
    case "/Qom":
      LocationInfo.value.id = 17;
      LocationInfo.value.Title = "قم";
      break;
    default:
      break;
  }
  await FetchUsersForPaging(1);
 
});



onBeforeMount(async () => {
  switch (route.path) {
    case "/Tehran":
      LocationInfo.value.id = 1;
      LocationInfo.value.Title = "تهران";
      break;
    case "/tehran":
      LocationInfo.value.id = 1;
      LocationInfo.value.Title = "تهران";
      break;
    case "/Esfahan":
      LocationInfo.value.id = 6;
      LocationInfo.value.Title = "اصفهان";
      break;
    case "/esfahan":
      LocationInfo.value.id = 6;
      LocationInfo.value.Title = "اصفهان";
      break;
    case "/Fars":
      LocationInfo.value.id = 16;
      LocationInfo.value.Title = "شیراز";
      break;
    case "/fars":
      LocationInfo.value.id = 16;
      LocationInfo.value.Title = "شیراز";
      break;
    case "/SistanvaBalochestan":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "زاهدان";
      break;
    case "/sistanvabalochestan":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "زاهدان";
      break;
    case "/KohgiloyevaBoyerAhmad":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "یاسوج";
      break;
    case "/kohgiloyevaboyerAhmad":
      LocationInfo.value.id = 15;
      LocationInfo.value.Title = "یاسوج";
      break;
    case "/Gilan":
      LocationInfo.value.id = 23;
      LocationInfo.value.Title = "رشت";
      break;
    case "/gilan":
      LocationInfo.value.id = 23;
      LocationInfo.value.Title = "رشت";
      break;
    case "/Boshehr":
      LocationInfo.value.id = 31;
      LocationInfo.value.Title = "بوشهر";
      break;
    case "/boshehr":
      LocationInfo.value.id = 31;
      LocationInfo.value.Title = "بوشهر";
      break;
    case "/Alborz":
      LocationInfo.value.id = 7;
      LocationInfo.value.Title = "کرج";
      break;
    case "/alborz":
      LocationInfo.value.id = 7;
      LocationInfo.value.Title = "کرج";
      break;
    case "/AzarbaijanSharghi":
      LocationInfo.value.id = 3;
      LocationInfo.value.Title = "تبریز";
      break;
    case "/azarbaijansharghi":
      LocationInfo.value.id = 3;
      LocationInfo.value.Title = "تبریز";
      break;
    case "/Zanjan":
      LocationInfo.value.id = 13;
      LocationInfo.value.Title = "زنجان";
      break;
    case "/zanjan":
      LocationInfo.value.id = 13;
      LocationInfo.value.Title = "زنجان";
      break;
    case "/Kermanshah":
      LocationInfo.value.id = 20;
      LocationInfo.value.Title = "کرمانشاه";
      break;
    case "/kermanshah":
      LocationInfo.value.id = 20;
      LocationInfo.value.Title = "کرمانشاه";
      break;
    case "/Hormozgan":
      LocationInfo.value.id = 27;
      LocationInfo.value.Title = "بندرعباس";
      break;
    case "/hormozgan":
      LocationInfo.value.id = 27;
      LocationInfo.value.Title = "بندرعباس";
      break;
    case "/Golestan":
      LocationInfo.value.id = 22;
      LocationInfo.value.Title = "گرگان";
      break;
    case "/golestan":
      LocationInfo.value.id = 22;
      LocationInfo.value.Title = "گرگان";
      break;
    case "/Lorestan":
      LocationInfo.value.id = 24;
      LocationInfo.value.Title = "خرم آباد";
      break;
    case "/lorestan":
      LocationInfo.value.id = 24;
      LocationInfo.value.Title = "خرم آباد";
      break;
    case "/KhorasanRazavi":
      LocationInfo.value.id = 10;
      LocationInfo.value.Title = "مشهد";
      break;
    case "/khorasanrazavi":
      LocationInfo.value.id = 10;
      LocationInfo.value.Title = "مشهد";
      break;
    case "/Khozestan":
      LocationInfo.value.id = 12;
      LocationInfo.value.Title = "اهواز";
      break;
    case "/khozestan":
      LocationInfo.value.id = 12;
      LocationInfo.value.Title = "اهواز";
      break;
    case "/Hamedan":
      LocationInfo.value.id = 28;
      LocationInfo.value.Title = "همدان";
      break;
    case "/hamedan":
      LocationInfo.value.id = 28;
      LocationInfo.value.Title = "همدان";
      break;
    case "/Kerman":
      LocationInfo.value.id = 19;
      LocationInfo.value.Title = "کرمان";
      break;
    case "/kerman":
      LocationInfo.value.id = 19;
      LocationInfo.value.Title = "کرمان";
      break;
    case "/Mazandaran":
      LocationInfo.value.id = 25;
      LocationInfo.value.Title = "ساری";
      break;
    case "/mazandaran":
      LocationInfo.value.id = 25;
      LocationInfo.value.Title = "ساری";
      break;
    case "/Kordestan":
      LocationInfo.value.id = 18;
      LocationInfo.value.Title = "سنندج";
      break;
    case "/kordestan":
      LocationInfo.value.id = 18;
      LocationInfo.value.Title = "سنندج";
      break;
    case "/Yazd":
      LocationInfo.value.id = 29;
      LocationInfo.value.Title = "یزد";
      break;
    case "/yazd":
      LocationInfo.value.id = 29;
      LocationInfo.value.Title = "یزد";
      break;
    case "/markazi":
      LocationInfo.value.id = 26;
      LocationInfo.value.Title = "اراک";
      break;
    case "/Markazi":
      LocationInfo.value.id = 26;
      LocationInfo.value.Title = "اراک";
      break;
    case "/qom":
      LocationInfo.value.id = 17;
      LocationInfo.value.Title = "قم";
      break;
    case "/Qom":
      LocationInfo.value.id = 17;
      LocationInfo.value.Title = "قم";
      break;
    default:
      break;
  }
  await FetchUsersForPaging(1);

  document.title = " خدمات دهندگان " + LocationInfo.value.Title;
});

const FetchUsersForPaging = async (page: number) => {
  lazyLoading.value = true;
  await store.FetchCompanyUsersAll(10, page, LocationInfo.value.id).then(() => {
    const result = [];
    for (let i = 0; i < store.CompanyUserData.List.length; i += 3) {
      result.push(store.CompanyUserData.List.slice(i, i + 3));
    }
    if (page == 1) {
      lazyItems.value = result;
    } else {
      lazyItems.value.push(...result);
    }
    PageNumber.value = page;
    lazyLoading.value = false;
  });
};
const onLazyLoad = (event: any) => {
  FetchUsersForPaging(PageNumber.value + 1);
};

useHead({
  title: `خدمات دهندگان ${LocationInfo.value.Title}`,
  meta: [
    {
      name: "description",
      content: `لیست خدمات دهندگان در ${LocationInfo.value.Title}.`,
    },
    {
      property: "og:title",
      content: `خدمات دهندگان ${LocationInfo.value.Title}`,
    },
    {
      property: "og:description",
      content: `لیست خدمات دهندگان در ${LocationInfo.value.Title}.`,
    },
    { property: "og:url", content: "https://darbastan.com/" },
    {
      name: "twitter:title",
      content: `خدمات دهندگان ${LocationInfo.value.Title}`,
    },
    {
      name: "twitter:description",
      content: `لیست خدمات دهندگان در ${LocationInfo.value.Title}.`,
    },
  ],
  link: [{ rel: "canonical", href: `https://darbastan.com/${route.name}` }],
});
</script>
<template>
  <Layout
    :ShowPageHeader="true"
    :PageTitle="
      User != null ? User.pageTitle : 'خدمات دهندگان ' + LocationInfo.Title
    "
  >
    <!-- Single Post Start-->
    <div class="single">
      <div class="service">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="single-content wow fadeInUp">
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
                            <img
                              v-if="item.imagePath != null"
                              :src="`https://darbastan.storage.c2.liara.space${item.imagePath}`"
                              :alt="`${item.companyName}`"
                            />
                            <img
                              v-else="item.imagePath == null"
                              src="/images/empty.jpg"
                              :alt="`${item.companyName}`"
                            />
                            <div class="service-overlay">
                              <p>
                                {{ item.addressCo }}
                              </p>
                            </div> 
                          </div>
                          <div class="service-Title">
                            <h3>
                              <router-link
                                class="title"
                                :to="{
                                  name: 'ScaffoldingCompany',
                                  params: {
                                    Id: item.id,
                                    companyName: item.companyName.replaceAll(
                                      ' ',
                                      '-'
                                    ),
                                  },
                                }"
                                >{{ item.companyName }}</router-link
                              >
                            </h3>
                          </div>
                          <div class="service-text">
                            <h3>
                              {{
                                new Date(
                                  item.dateOfRegistration
                                ).toLocaleDateString("fa-IR", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              }}
                            </h3>
                            <!-- <router-link class="btn" :to="{
                              name: 'Blog',
                              params: {
                                pageId: item.pageId,
                                name: item.pageTitle.replaceAll(' ', '-'),
                              },
                            }">+</router-link> -->
                            <!-- <h3>نظرات : ۰</h3> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </VirtualScroller>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="sidebar">
                <!-- <div class="sidebar-widget wow fadeInUp">
                  <div class="search-widget">
                    <form>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="جستجو"
                      />
                      <button class="btn"><i class="fa fa-search"></i></button>
                    </form>
                  </div>
                </div> -->

                <div
                  v-if="Users.List != null"
                  class="sidebar-widget wow fadeInUp"
                >
                  <h2 class="widget-title">مطالب اخیر</h2>
                  <div v-for="PageItem in Users.List" class="recent-post">
                    <div class="post-item">
                      <!-- <div class="post-img">
                      <img :src="`https://darbastan.com`+PageItem.imagePath" />
                    </div> -->
                      <div class="post-text">
                        <!-- <a href="">{{ PageItem.pageTitle }}</a> -->
                        <router-link
                          :to="{
                            name: 'Blog',
                            params: {
                              pageId: PageItem.pageId,
                              name: PageItem.pageTitle.replaceAll(' ', '-'),
                            },
                          }"
                          >{{ PageItem.pageTitle }}</router-link
                        >
                        <!-- <div class="post-meta">
                        <p>By<a href="">Admin</a></p>
                        <p>In<a href="">Design</a></p>
                      </div> -->
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar-widget wow fadeInUp">
                  <h2 class="widget-title">تگ ها</h2>
                  <div class="tag-widget">
                    <NuxtLink
                      @click="
                        () =>
                          store.FetchSearch('طلا{{ LocationInfo.Title }}')
                      "
                      :to="{
                        name: 'tag',
                        query: { tag: 'طلا-' + LocationInfo.Title },
                      }"
                    >
                      طلا {{ LocationInfo.Title }}
                    </NuxtLink>
                    <NuxtLink
                      @click="
                        () =>
                          store.FetchSearch(
                            'طلا {{ LocationInfo.Title }}'
                          )
                      "
                      :to="{
                        name: 'tag',
                        query: { tag: 'طلا--' + LocationInfo.Title },
                      }"
                    >
                      طلا  {{ LocationInfo.Title }}
                    </NuxtLink>

                    <NuxtLink
                      @click="() => store.FetchSearch('نصب طلا')"
                      :to="{
                        name: 'tag',
                        query: { tag: 'نصب-طلا' },
                      }"
                    >
                      نصب طلا
                    </NuxtLink>
                    <NuxtLink
                      @click="() => store.FetchSearch('چهارپایه طلای')"
                      :to="{
                        name: 'tag',
                        query: { tag: 'چهارپایه-طلای' },
                      }"
                    >
                      چهارپایه طلای
                    </NuxtLink>
                    <NuxtLink
                      @click="() => store.FetchSearch('زیرپایی ')"
                      :to="{
                        name: 'tag',
                        query: { tag: 'زیرپایی-' },
                      }"
                    >
                      زیرپایی 
                    </NuxtLink>
                    <NuxtLink
                      @click="() => store.FetchSearch('خرید طلا')"
                      :to="{
                        name: 'tag',
                        query: { tag: 'خرید-طلا' },
                      }"
                    >
                      خرید و فروش طلا
                    </NuxtLink>
                  </div>
                </div>

                <div class="sidebar-widget wow fadeInUp">
                  <h2 class="widget-title">
                    مدیران گلد - {{ LocationInfo.Title }}
                  </h2>
                  <div class="text-widget">
                    <p>
                      خدمات در {{ LocationInfo.Title }} شهر
                      {{ LocationInfo.Title }} و سایر شهرهای
                      {{ LocationInfo.Title }} با انتخاب هر شرکت می توانید
                      جرئیات آن را مطالعه کنید دقت داشته باشید که برخی شرکت ها
                      نمونه کار دارند و به انتخاب شما کمک می کند تا شرکت هایی که
                      سابقه خوبی دارند انتخاب کنید قبل از هر تماسی قوانین را
                      بخوانید زیرا در تصمیم گیری شما تاثیر گذار است اگر به توافق
                      رسیدید و کار شما اتمام یافت می توانید به شرکت مورد نظر
                      امتیاز دهید و این کار با پر کردن فرم ارزشیابی امکان پذیر و
                      به ما کمک می کند تا شرکت های برتر را به شما معرفی کنیم.
                      خدمات اجاره و نصب طلا  مدیران گلد با همکاری بیش از
                      ۳۰۰ شرکت طلای در سراسر کشور سعی دارد تا خدمات با قیمت
                      مناسب و با کیفیت اجرا شود با بهترین شرکت های طلای در
                      ایران آشنا شوید اگر در انتخاب کردن تردید دارید بهترین
                      گزینه انتخاب از برترین شرکت های خدمات دهنده طلا به شما
                      پیشنهاد می شود.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Post End-->
  </Layout>
</template>
<style>
.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.grid-item {
  width: calc(33.33% - 10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-virtualscroller::-webkit-scrollbar {
  display: none;
}

.p-virtualscroller-content {
  position: relative !important;
}

.single .single-content img {
  margin-bottom: 20px;
  width: 100% !important;
  height: 200px !important;
}
</style>
