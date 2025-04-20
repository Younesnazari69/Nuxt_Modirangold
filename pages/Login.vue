<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3> ورود به سایت مدیران گلد </h3>
          <p> 
            
          </p>
        </div>

        <div class="row justify-content-md-center">
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <h6 class="text-center m-3">
                  تلفن همراه به صورت 09 می باشد 
                </h6>
                <div v-if="ResMessage != ''" class="alert alert-danger text-center m-2" role="alert">
                  {{ ResMessage }}
                </div>
                <VForm class="form w-100" id="kt_login_signin_form" @submit="onSubmitForm"
                  :validation-schema="LoginModel">
                  <div class="row justify-content-md-center">
                    <div class="Login">
                      <Field name="username" type="text" placeholder="تلفن همراه یا ایمیل"
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="username" />
                        </div>
                      </div>
                      <Field name="password" type="Password" placeholder="کلمه عبور "
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="password" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <input type="checkbox" class="m-2">
                        <label class="text-secondary p-2">مرا بخاطر بسپار</label>
                      </div>
                      <div class="text-center mt-4">
                        <button type="submit" class="btn btn-primary btnLogin" id="btnPost2">ورود</button>
                        <router-link :to="{ name: 'RegisterMobile' }" class="btn btn-warning"> حساب کاربری ندارید؟ ثبت
                          نام کنید </router-link>
                        <router-link :to="{ name: 'ForgotPassword' }" class="forgot__password"> فراموشی رمز
                        </router-link>
                      </div>
                    </div>
                  </div>

                </VForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '../containers/Layout.vue'
import { useDataStore } from '../stores/data'
import { onBeforeMount, onServerPrefetch, ref } from 'vue';
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useRouter } from 'vue-router'

import * as Yup from "yup";


const store = useDataStore()
const router = useRouter()

const LoginModel = Yup.object().shape({
  username: Yup.string().required("نام کاربری الزامیست").label("نام کاربری"),
  password: Yup.string().required("کلمه عبور الزامیست").label("کلمه عبور"),
});
const ResMessage = ref('')

useHead({
    title: 'ورود به حساب کاربری',
    meta: [
      { name: 'description', content: 'برای ورود به حساب کاربری خود، اطلاعات کاربری خود را در این صفحه وارد کنید. در صورتی که حساب کاربری ندارید، می‌توانید از گزینه ثبت‌ نام برای ایجاد حساب جدید استفاده کنید.' },
      { name: 'keywords', content: 'ورود به حساب کاربری، ثبت‌نام، طلا مدیران گلد، حساب کاربری، ورود به سیستم' },
      { property: 'og:title', content: 'ورود به حساب کاربری' },
      { property: 'og:description', content: 'برای ورود به حساب کاربری خود، اطلاعات کاربری خود را در این صفحه وارد کنید. در صورتی که حساب کاربری ندارید، می‌توانید از گزینه ثبت‌نام برای ایجاد حساب جدید استفاده کنید.' },
      { property: 'og:url', content: 'https://darbastan.com/login' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/login' },
    ]
})
const onSubmitForm = (values: any) => {
  debugger
  ResMessage.value = '';
  store.Login(values).then((res) => {
    if (res.isSuccess == true) {
      router.push({ name: "LoginHome" });     
    }
    ResMessage.value = res.messages[0];
  })
  setTimeout(() => {
    ResMessage.value = ''
  }, 10000)

}

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
