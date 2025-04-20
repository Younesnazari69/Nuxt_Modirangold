<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";
import { onBeforeMount, ref, onServerPrefetch } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";

const store = useDataStore();
const CreateContactData = ref<any | object>(null);
let Formvalues: any = null;
let visible = ref(false);
let visibleerror = ref(false);


const ContactUserModel = Yup.object().shape({
  name: Yup.string().label("نام").required("نام الزامیست"),
  email: Yup.string().email().label("ایمیل	").required("ایمیل الزامیست"),
  subject: Yup.string().label("موضوع").required("موضوع الزامیست"),
  body: Yup.string().label("متن پیام").required("متن پیام الزامیست"),
});
const onSubmitForm = async (values: any) => {
  Formvalues = values;
  store.CreateContact(Formvalues).then((res) => {

    if(res === undefined)
    {
        visibleerror.value === true
    }
    if (res.isSuccess === true) {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 3500);
    }
  

  });
};

onServerPrefetch(async () => {
  store.SetMetaTags("تماس با ما", "تماس با ما", "تماس با ما،مدیران گلد","تماس با ما","تماس با ما","https://darbastan.com/contact","https://darbastan.storage.c2.liara.space/Images/logo.png","https://darbastan.com/contact");
});
onBeforeMount(async () => {
  document.title = "تماس با ما";
});


useHead({
    title: 'تماس با ما',
    meta: [
      { name: 'description', content: 'برای ارتباط با تیم طلا مدیران گلد و دریافت مشاوره رایگان خدمات طلا، فرم تماس با ما را پر کنید یا از شماره‌های پشتیبانی استفاده کنید. دریافت خدمات آنلاین طلا و تخمین قیمت، درخواست سریع طلا.' },
      { name: 'keywords', content: 'طلا،مدیران گلد،scaffolding'},
      { property:'og:title', content: 'تماس با ما'},
      { property:'og:description' , content:'برای ارتباط با تیم طلا مدیران گلد و دریافت مشاوره رایگان خدمات طلا، فرم تماس با ما را پر کنید یا از شماره‌های پشتیبانی استفاده کنید. دریافت خدمات آنلاین طلا و تخمین قیمت، درخواست سریع طلا.'},
      { property:'og:url', content: 'https://darbastan.com/contact'},
      { property:'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png'},
    ],
    link: [
    { rel: 'canonical', href: 'https://darbastan.com/contact'},
    ]
  })
</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'تماس با ما'">
    <!-- Contact Start -->
    <div class="contact wow fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contact-info">
              <div class="contact-item">
                <i class="flaticon-address"></i>
                <div class="contact-text">
                  <h2>آدرس</h2>
                  <p>
                    منطقه شهرداری شادآباد، خیابان ۱۷ شهریور، خیابان شهید میرزایی
                  </p>
                </div>
              </div>
              <div class="contact-item">
                <i class="flaticon-call"></i>
                <div class="contact-text">
                  <h2>تلفن</h2>
                  <p>
                    مشاوره رایگان خدمات طلا و تخمین قیمت<br />
                    <a href="/QuickOrderScaffoldRental">درخواست آنلاین طلا</a
                    ><br />
                    <a href="/mobilescaffoldingRequest"
                      >درخواست آنلاین چهارپایه های هیکو</a
                    ><br />
                    <span
                      class="text-danger"
                      onclick="location.href = 'tel:09122449016'"
                      ><br />
                      &zwnj;۰۹۱۲۲۴۴۹۰۱۶ - خوانساری مشاوره خدمات طلا ، پیچ و رولپلاک و نماشویی</span
                    ><br />
                    صرفاً جهت پشتیبانی با شماره های زیر تماس بگیرید در غیر
                    اینصورت درخواست آنلاین بفرستید:<br />
                    <span onclick="location.href = 'tel:09338121682'"
                      ><br />
                      &zwnj;۰۹۳۳۸۱۲۱۶۸۲ </span
                    ><br />
                    ۰۲۱۶۶۳۹۳۵۴۹
                  </p>
                </div>
              </div>
              <div class="contact-item">
                <i class="flaticon-send-mail"></i>
                <div class="contact-text">
                  <h2>ایمیل</h2>
                  <p>info[at]darbastan.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-form">
                <Message v-if="visible" severity="success" :life="3000">با موفقیت برای مدیریت مدیران گلد ارسال گردید.</Message>
                <Message v-if="visibleerror" severity="error" :life="3000">تعداد درخواست بیش از حد مجاز</Message>
              <VForm
                class="form w-100"
                id="kt_login_signin_form"
                @submit="onSubmitForm"
                :validation-schema="ContactUserModel"
                :initial-values="CreateContactData"
              >
                <div class="control-group">
                  <label>{{ ContactUserModel.fields.name.spec.label }}</label>
                  <Field
                    class="form-control p-inputtext"
                    type="text"
                    placeholder=""
                    name="name"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="name" />
                    </div>
                  </div>
                </div>
                <div class="control-group">
                  <label>{{ ContactUserModel.fields.email.spec.label }}</label>
                  <Field
                    class="form-control p-inputtext"
                    type="text"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <div class="control-group">
                  <label>{{
                    ContactUserModel.fields.subject.spec.label
                  }}</label>
                  <Field
                    class="form-control p-inputtext"
                    type="text"
                    placeholder=""
                    name="subject"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="subject" />
                    </div>
                  </div>
                </div>
                <div class="control-group">
                    <label>{{ ContactUserModel.fields.body.spec.label }}</label>
                    <Field name="body" v-slot="{ field }">
                      <textarea class="form-control p-inputtext" v-bind="field" id="body" rows="3"></textarea>
                    </Field>

                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="body" />
                      </div>
                    </div>
                </div>
                <div>
                  <button class="btn" type="submit">
                    ارسال
                  </button>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact End -->
  </Layout>
</template>
<style scoped></style>
