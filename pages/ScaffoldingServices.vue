<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";

import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";

const router = useRouter();
const route = useRoute();
const store = useDataStore();
const Topic = ref<any>(null);
const Pages = ref<any>({ List: null });
const loading = ref<any>(false);

await useAsyncData("scaffoldingservices", async () => {
  const TopicID = route.params.topicId;
  loading.value = true;

  await store.FetchTopicByParam(Number(TopicID)).then((res: any) => {
    if (res.isSuccess == true) {
      Topic.value = store.TopicByParamData.Topic;
      Topic.value.content = Topic.value.content.replaceAll(
        "/Images/",
        "https://darbastan.storage.c2.liara.space/Images/"
      );
    }
    loading.value = false;
  });
  await store.FetchPages(6, 0).then(() => {
    Pages.value.List = store.PagesData.List;
  });
});

onMounted(() => {
  checkPageTitle();
});

watch(Topic, checkPageTitle);

function checkPageTitle() {
  if (Topic.value != null) {
    debugger
    const otherSlug = route.path ? route.path : ''
    const isTopics = otherSlug.includes('Topics');
     const postId = route.query.postId
     const pageName = route.query.pageName
  
    if(isTopics){
      router.push({
  path: '/Topics/Post',
  query: {
    postId: postId,
    pageName: encodeURIComponent(pageName)  // رمزگذاری پارامتر
  }
});
    }
    else
    {

      if (
      store
        .normalizeString(Topic.value.title.replaceAll(" ", "-"))
        .toLowerCase() !==
      (typeof route.params.title === "string"
        ? store.normalizeString(route.params.title).toLowerCase()
        : "")
    ) {
      router.push("/Error404");
    }

    }


    
  }
}

if (Topic.value != null) {
  useHead({
    title: Topic.value.title,
    meta: [
      { name: "description", content: Topic.value.metaDescription },
      { name: "keywords", content: Topic.value.metaKeywords },
      { property: "og:title", content: Topic.value.title },
      { property: "og:description", content: Topic.value.metaDescription },
      {
        property: "og:url",
        content:
          "https://darbastan.com/ScaffoldingServices/" +
          Topic.value.topicId +
          "/" +
          Topic.value.title.replaceAll(" ", "-"),
      },
      {
        property: "og:image",
        content:
          "https://darbastan.storage.c2.liara.space" + Topic.value.picture,
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://darbastan.com/ScaffoldingServices/" +
          Topic.value.topicId +
          "/" +
          Topic.value.title.replaceAll(" ", "-"),
      },
    ],
  });
}

watch(Topic, () => {
  document.title = Topic.value.title;
});
</script>
<template>
  <Layout
    :ShowPageHeader="true"
    :PageTitle="Topic != null ? Topic.title : 'مدیران گلد'"
  >
    <!-- Single Post Start-->
    <div class="single">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div v-if="Topic != null">
              <div class="single-content wow fadeInUp">
                <div class="card mb-3" style="text-align: center; width: 100%">
                  <div class="card-body">
                    <img
                      v-if="Topic.picture != null"
                      :src="`https://darbastan.storage.c2.liara.space${Topic.picture}`"
                    />
                  </div>
                </div>

                <div class="card mb-3" style="text-align: center; width: 100%">
                  <div class="card-body">
                    <h5 class="card-title">اطلاعات تماس</h5>
                    <a
                      v-if="Topic.phone !== null"
                      :href="`tel:{{ Topic.phone }}`"
                      class="btn btn-primary"
                      >{{ Topic.phone }}</a
                    >
                    <router-link
                      v-else
                      class="btn btn-warning"
                      :to="{
                        name: 'QuickOrderScaffoldRental',
                      }"
                      >سفارش آنلاین
                    </router-link>
                  </div>
                </div>

                <div class="card mb-3" style="text-align: center; width: 100%">
                  <div class="card-body">
                    <h5 class="card-title">شبکه های اجتماعی</h5>
                    <a
                      v-if="Topic.website != null"
                      :href="`{{ Topic.website }}`"
                      class="btn btn-primary"
                      >اینستاگرام</a
                    >
                    <a
                      v-else
                      href="https://www.instagram.com/darbastaan"
                      class="btn btn-primary"
                      >اینستاگرام</a
                    >
                    <a
                      href="https://wa.me/message/USQNHQLQNKGMA1"
                      class="btn btn-success"
                      >ارسال درخواست به واتس اپ مدیران گلد</a
                    >
                  </div>
                </div>

                <div v-html="Topic.content"></div>
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
                    ><img src="/public/img/blog-3.jpg" alt="Image"
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
