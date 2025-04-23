<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";

import { useRouter, useRoute } from "vue-router";
import { ref, watch, onBeforeMount } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Message from "primevue/message";

import * as Yup from "yup";

const router = useRouter();
const route = useRoute();
const store = useDataStore();
const Page = ref<any>(null);
const Pages = ref<any>({ List: null });
const Comments = ref<any>({ List: null });
const loading = ref<any>(false);
const CreateCommentsForPageData = ref<any | object>(null);
let Formvalues: any = null;
let visible = ref(false);

//Create form validation object
const CommentUserModel = Yup.object().shape({
  author: Yup.string().label("نام").required("نام الزامیست"),
  authorEmail: Yup.string().email().label("ایمیل	").required("ایمیل الزامیست"),
  commentContent: Yup.string().label("متن پیام").required("متن پیام الزامیست"),
});
const onSubmitForm = async (values: any) => {
  Formvalues = values;
  store.CreateCommentsForPage(Formvalues).then((res) => {
    if (res.isSuccess === true) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 3500);
    }
  });
};

onBeforeMount(async () => {
  const PageID = route.params.pageId;
  const pageDataResponse = await store.FetchPage(Number(PageID));
  if (pageDataResponse.isSuccess) {
    Page.value = store.PagesData.Page;
    // اطمینان از اینکه متد replaceAll در مرورگرها کار می‌کند
    Page.value.pageText = Page.value.pageText.replaceAll(
      "/Images/",
      "https://darbastan.storage.c2.liara.space/Images/"
    );
  }
});

await useAsyncData("pageData", async () => {
  const PageID = route.params.pageId;
  CreateCommentsForPageData.value = { pageID: PageID };
  loading.value = true;

  try {
    // Fetch Page Data
    const pageDataResponse = await store.FetchPage(Number(PageID));
    if (pageDataResponse.isSuccess) {
      Page.value = store.PagesData.Page;
      // اطمینان از اینکه متد replaceAll در مرورگرها کار می‌کند
      Page.value.pageText = Page.value.pageText.replaceAll(
        "/Images/",
        "https://darbastan.storage.c2.liara.space/Images/"
      );
    }

    // Fetch Pages
    await store.FetchPages(10, 0);
    Pages.value.List = store.PagesData.List;

    // Fetch Comments
    await store.FetchPageCommentByParam(Number(PageID));
    Comments.value.List = store.PageCommentsData.List;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false; // اطمینان از تغییر وضعیت پس از همه درخواست‌ها
  }
});

onMounted(() => {
  checkPageTitle();
});

watch(Page, checkPageTitle);
function checkPageTitle() {
  if (Page.value != null) {
    const pageSlug = Page.value.pageTitle.replaceAll(" ", "-");
    const routeSlug = route.params.name ? route.params.name : "";
    const otherSlug = route.path ? route.path : "";
    const isSlugDifferent =
      store.normalizeString(pageSlug) !== store.normalizeString(routeSlug);
    const isNotAdminPage = !otherSlug.includes("AdminPages");
    // Compare page title with the route parameter 'name'

    if (isSlugDifferent && isNotAdminPage) {
      router.push("/Error404"); // هدایت به صفحه 404 اگر عناوین تطبیق نداشته باشند و مسیر شامل "AdminPages" نباشد
    }
  }
}

if (Page.value != null) {
  const pageId = Page.value.pageId;
  const pageTitle = Page.value.pageTitle;
  const imagePath = Page.value.imagePath;
  const pageSlug = pageTitle.replaceAll(" ", "-");
  const baseBlogUrl = "https://darbastan.com/Blog/";
  const baseArticlesUrl = "https://darbastan.com/articles/";
  const baseStorageUrl = "https://darbastan.storage.c2.liara.space";
  const canonicalUrl = route.path.includes("articles")
    ? baseArticlesUrl + pageId + "/" + pageSlug
    : baseBlogUrl + pageId + "/" + pageSlug;
  const imageUrl = baseStorageUrl + imagePath;

  useHead({
    title: Page.value.pageTitle,
    meta: [
      { name: "description", content: Page.value.metaDescription },
      { name: "keywords", content: store.PagesData.Page.metaKeywords },
      { property: "og:title", content: store.PagesData.Page.title },
      {
        property: "og:description",
        content: store.PagesData.Page.metaDescription,
      },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: imageUrl },
    ],
    link: [{ rel: "canonical", href: canonicalUrl }],
  });
}

watch(Page, () => {
  document.title = Page.value.pageTitle;
});
</script>
<template>
  <Layout
    :ShowPageHeader="true"
    :PageTitle="Page != null ? Page.pageTitle : 'مدیران گلد'"
  >
    <!-- Single Post Start-->
    <div class="single">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div v-if="Page != null">
              <div class="single-content wow fadeInUp">
                <NuxtImg
                  v-if="Page.imagePath != null"
                  :src="`https://darbastan.storage.c2.liara.space${Page.imagePath}`"
                />
                <h6 class="btn btn-dark btn-sm">
                  تاریخ بروزرسانی :
                  {{
                    new Date(Page.pageDate).toLocaleDateString("fa-IR", {
                      weekday: "long", // روز هفته
                    }) +
                    " " +
                    new Date(Page.pageDate).toLocaleDateString("fa-IR", {
                      year: "numeric", // سال
                      month: "long", // ماه
                      day: "numeric", // روز
                    })
                  }}
                </h6>

                <div v-html="Page.pageText"></div>
              </div>
              <div class="single-tags wow fadeInUp">
                <router-link
                  v-if="Page.tag1 != null"
                  @click="() => store.FetchSearch(Page.tag1)"
                  :to="{
                    name: 'tag',
                    query: {
                      tag: Page.tag1.replaceAll(' ', '-'),
                    },
                  }"
                  class="btn"
                  >{{ Page.tag1 }}
                </router-link>
                <router-link
                  v-if="Page.tag2 != null"
                  @click="() => store.FetchSearch(Page.tag2)"
                  :to="{
                    name: 'tag',
                    query: {
                      tag: Page.tag2.replaceAll(' ', '-'),
                    },
                  }"
                  class="btn"
                  >{{ Page.tag2 }}
                </router-link>
                <router-link
                  v-if="Page.tag3 != null"
                  @click="() => store.FetchSearch(Page.tag3)"
                  :to="{
                    name: 'tag',
                    query: {
                      tag: Page.tag3.replaceAll(' ', '-'),
                    },
                  }"
                  class="btn"
                  >{{ Page.tag3 }}
                </router-link>
                <router-link
                  v-if="Page.tag4 != null"
                  @click="() => store.FetchSearch(Page.tag4)"
                  :to="{
                    name: 'tag',
                    query: {
                      tag: Page.tag4.replaceAll(' ', '-'),
                    },
                  }"
                  class="btn"
                  >{{ Page.tag4 }}
                </router-link>

                <router-link
                  v-if="Page.tag5 != null"
                  @click="() => store.FetchSearch(Page.tag5)"
                  :to="{
                    name: 'tag',
                    query: {
                      tag: Page.tag5.replaceAll(' ', '-'),
                    },
                  }"
                  class="btn"
                  >{{ Page.tag5 }}
                </router-link>
              </div>
              <div
                v-if="Comments.List != null"
                class="single-comment wow fadeInUp"
              >
                <h2>نظرات : {{ Comments.List.length }}</h2>
                <ul v-for="CommentItem in Comments.List" class="comment-list">
                  <li class="comment-item">
                    <div class="comment-body">
                      <div class="comment-img">
                        <NuxtImg src="../public/images/post-5.jpg" />
                      </div>
                      <div class="comment-text">
                        <h3>
                          <a href="#">{{ CommentItem.author }}</a>
                        </h3>
                        <span>
                          {{
                            new Date(
                              CommentItem.commentDate
                            ).toLocaleDateString("fa-IR", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          }}</span
                        >
                        <div v-html="CommentItem.commentContent"></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="comment-form wow fadeInUp">
                <h2>ارسال نظر</h2>
                <Message v-if="visible" severity="success" :life="3000"
                  >پس از تایید منتشر خواهد شد</Message
                >
                <VForm
                  class="form w-100"
                  id="kt_login_signin_form"
                  @submit="onSubmitForm"
                  :validation-schema="CommentUserModel"
                  :initial-values="CreateCommentsForPageData"
                >
                  <div class="form-group">
                    <label>{{
                      CommentUserModel.fields.author.spec.label
                    }}</label>
                    <Field
                      class="form-control p-inputtext"
                      type="text"
                      placeholder=""
                      name="author"
                      autocomplete="off"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="author" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>{{
                      CommentUserModel.fields.authorEmail.spec.label
                    }}</label>
                    <Field
                      class="form-control p-inputtext"
                      type="text"
                      placeholder=""
                      name="authorEmail"
                      autocomplete="off"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="authorEmail" />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>{{
                      CommentUserModel.fields.commentContent.spec.label
                    }}</label>
                    <Field name="commentContent" v-slot="{ field }">
                      <textarea
                        class="form-control p-inputtext"
                        v-bind="field"
                        id="commentContent"
                        rows="3"
                      ></textarea>
                    </Field>

                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="commentContent" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button class="btn" type="submit">
                      <span>ثبت نظر</span>
                    </button>
                  </div>
                </VForm>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Post End-->
  </Layout>
</template>
<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
.table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
