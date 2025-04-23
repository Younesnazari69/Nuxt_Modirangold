<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";
import Knob from "primevue/knob";
import { useRouter,useRoute } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const route = useRoute();
const store = useDataStore();
const User = ref<any>(null);
const Pages = ref<any>({ List: null });
const loading = ref<any>(false);






onMounted(() => {
  checkTitle()
})

watch(User, checkTitle)

function checkTitle() {
  if (User.value != null) {
    if (
    store.normalizeString(User.value.companyName.replaceAll(' ', '-')).toLowerCase() !== 
  (typeof route.params.companyName === 'string' ? store.normalizeString(route.params.companyName).toLowerCase() : '')
   ) {
  router.push('/Error404');
   }
  }
}

await useAsyncData('scaffoldingcompany', async () => {
  const ID = route.params.Id;
  loading.value = true;

  try {
    // بارگذاری شرکت
    const res = await store.FetchUserCompanyByParam(ID);
    if (res.isSuccess === true) {
      User.value = store.UserCompanyByParamData.User;
      User.value.content = (User.value.addressCo || '').replaceAll(
        "/Images/",
        "https://darbastan.storage.c2.liara.space/Images/"
      );
    }

    // بارگذاری صفحات
    await store.FetchPages(8, 0);
    Pages.value.List = store.PagesData.List;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
  
  
  if (User.value != null) {

    useHead({
    title: User.value.companyName,
    meta: [
      { name: 'description', content: User.value.metaDescription },
      { name: 'keywords', content: User.value.metaKeywords},
      { property:'og:title', content: User.value.companyName},
      { property:'og:description' , content: User.value.metaDescription},
      { property:'og:url', content: "https://darbastan.com/ScaffoldingCompany/" +
          User.value.id +
          "/" +
          User.value.companyName.replaceAll(" ", "-")},
      { property:'og:image', content: "https://darbastan.storage.c2.liara.space" + User.value.imagePath},
    ],
    link: [
    { rel: 'canonical', href: "https://darbastan.com/ScaffoldingCompany/" +
          User.value.id +
          "/" +
          User.value.companyName.replaceAll(" ", "-")},
    ]
  })

  }
  

watch(User, () => {
  document.title = User.value.companyName;
});
</script>
<template>
  <Layout
    :ShowPageHeader="true"
    :PageTitle="User != null ? User.companyName : 'مدیران گلد'"
  >
    <!-- Single Post Start-->
    <div class="single" v-if="!loading">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div v-if="User != null">
              <div class="single-content wow fadeInUp">
                <div class="card mb-3" style="text-align: center; width: 100%">
                  <div class="card-body">
                    <img
                      v-if="User.imagePath != null"
                      :src="`https://darbastan.storage.c2.liara.space${User.imagePath}`"
                    />


                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title text-center">امتیاز</h5>
                        <Knob class="text-center" v-model="User.score" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body text-center">
                        <h5 class="card-title">اطلاعات تماس</h5>
                        <a
                          v-if="User.phoneNumber !== null"
                          :href="`tel:{{ User.phoneNumber }}`"
                          class="btn btn-primary"
                          >{{ User.phoneNumber }}</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">استان</h5>
                        <p class="card-text">{{ User.ostanName }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mb-3" style="text-align: center; width: 100%">
                  <div class="card-body">
                    <h5 class="card-title">لینک های مرتبط</h5>
                    <a
                      href="https://www.instagram.com/darbastaan"
                      class="btn btn-primary"
                      >اینستاگرام</a
                    >
                    <a
                      href="https://wa.me/message/USQNHQLQNKGMA1"
                      class="btn btn-success"
                      >ارسال درخواست به واتس اپ مدیران گلد</a
                    >
                    <router-link :to="{ name: 'CustomerSatisfaction' }" class="btn btn-info"
            >فرم ارزشیابی پیمانکار یا شرکت</router-link
          >
    
                  </div>
                </div>
       
                <div v-html="User.addressCo"></div>
              </div>
              <div class="single-tags wow fadeInUp"></div>

            </div>
          </div>

          <div class="col-lg-4">
            <div class="sidebar">
              <div
                v-if="Pages.List != null"
                class="sidebar-widget wow fadeInUp"
              >
                <h2 class="widget-title">مطالب اخیر</h2>
                <div v-for="PageItem in Pages.List" class="recent-post">
                  <div class="post-item">
                    <div class="post-text">
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
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar-widget wow fadeInUp">
                <div class="image-widget">
                  <a href="#"
                    ><img src="/public/images/blog-3.jpg" alt="Image"
                  /></a>
                </div>
              </div>

              <div class="sidebar-widget wow fadeInUp">
                <h2 class="widget-title">تگ ها</h2>
                <div class="tag-widget">
                  <router-link
                    :to="{
                      name: 'tag',
                      query: {
                        tag: 'طلا',
                      },
                    }"
                    >طلا</router-link
                  >
                  <router-link
                    :to="{
                      name: 'tag',
                      query: {
                        tag: 'طلا-',
                      },
                    }"
                    >طلا </router-link
                  >
                  <router-link
                    :to="{
                      name: 'tag',
                      query: {
                        tag: 'اجاره-طلا',
                      },
                    }"
                    >اجاره طلا</router-link
                  >
                  <router-link
                    :to="{
                      name: 'tag',
                      query: {
                        tag: 'نصب-طلا',
                      },
                    }"
                    >نصب طلا</router-link
                  >
                  <router-link
                    :to="{
                      name: 'tag',
                      query: {
                        tag: 'چهارپایه-طلای',
                      },
                    }"
                    >چهارپایه طلای</router-link
                  >
                  <router-link
                    :to="{
                      name: 'tag',
                      query: {
                        tag: 'طلا-متحرک',
                      },
                    }"
                    >طلا متحرک</router-link
                  >
                </div>
              </div>

              <div class="sidebar-widget wow fadeInUp">
                <h2 class="widget-title">مدیران گلد</h2>
                <div class="text-widget">
                  <p>مرجع طلا ایران</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Post End-->
    <div v-else>
      <p>در حال بارگذاری...</p>
    </div>
  </Layout>
</template>
<style scoped>
.single .single-content img {
  margin-bottom: 20px;
  width: 250px !important;
  height: auto !important;
}
.test {
  position: relative;
}
</style>
