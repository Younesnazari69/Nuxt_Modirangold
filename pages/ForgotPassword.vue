<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3> فراموشی کلمه عبور </h3>
          <p> مدیران گلد ، رونق کسب و کارتان
          </p>
        </div>

        <div class="row justify-content-md-center">
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <h6 class="text-center m-3">
                  نام کاربری همان ایمیل شما در زمان ثبت نام می باشد.
                </h6>
                <div v-if="ResMessage != ''" class="alert alert-danger text-center m-2" role="alert">
                  {{ ResMessage }}
                </div>
                <VForm v-if="Step==1" class="form w-100" id="kt_ForgotPassword_signin_form" @submit="onSubmitForm"
                  :validation-schema="ForgotPasswordModel">
                  <div class="row justify-content-md-center">
                    <div class="ForgotPassword">
                      <Field name="phoneNumber" type="text" placeholder="تلفن همراه "
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="phoneNumber" />
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <button type="submit" class="btn btn-primary btnForgotPassword" id="btnPost2">ارسال کد</button>                     
                      </div>
                    </div>
                  </div>
                </VForm>
                <VForm v-if="Step==2" class="form w-100" id="kt_ForgotPassword_signin_form" @submit="onResetPasswordSubmitForm"
                  :validation-schema="ResetPasswordModel">
                  <div class="row justify-content-md-center">
                    <div class="ForgotPassword">
                      <Field name="code" type="text" placeholder="کد ارسالی"
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="code" />
                        </div>
                      </div>
                      <!-- <Field name="phoneNumber" type="text" placeholder="تلفن همراه یا ایمیل"
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="phoneNumber" />
                        </div>
                      </div> -->
                      <Field name="newPassword" type="Password" placeholder="کلمه عبور جدید"
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="newPassword" />
                        </div>
                      </div>
                      <Field name="confirmPassword" type="Password" placeholder="تایید کلمه عبور"
                        class="form-control text-center " />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="confirmPassword" />
                        </div>
                      </div>
                      <div class="text-center mt-4">
                        <button type="submit" class="btn btn-primary btnForgotPassword" id="btnPost2">ثبت</button>                     
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
const phoneNumber = ref<string>(null)
  const Step = ref<number>(1)

  const ResMessage = ref('')

const ForgotPasswordModel = Yup.object().shape({
  phoneNumber: Yup.string().required("تلفن همراه الزامیست").label("تلفن همراه"),
});
const ResetPasswordModel = Yup.object().shape({
  code: Yup.string().required("کد ارسالی الزامیست").label("کد ارسالی"),
  newPassword: Yup.string().required("کلمه عبور جدید الزامیست").label("کلمه عبور جدید"),
  confirmPassword: Yup.string().required("تایید کلمه عبور الزامیست").label("تایید کلمه عبور"),

});


useHead({
    title: 'فراموشی رمز عبور',
    meta: [
      { name: 'description', content: 'اگر رمز عبور خود را فراموش کرده‌اید، از طریق این صفحه می‌توانید درخواست بازنشانی رمز عبور خود را ارسال کنید. تنها کافیست ایمیل خود را وارد کرده و دستورالعمل‌های ارسال شده را دنبال کنید.' },
      { name: 'keywords', content: 'فراموشی رمز عبور، بازیابی رمز عبور، بازنشانی رمز عبور، طلا مدیران گلد' },
      { property: 'og:title', content: 'فراموشی رمز عبور' },
      { property: 'og:description', content: 'اگر رمز عبور خود را فراموش کرده‌اید، از طریق این صفحه می‌توانید درخواست بازنشانی رمز عبور خود را ارسال کنید. تنها کافیست ایمیل خود را وارد کرده و دستورالعمل‌های ارسال شده را دنبال کنید.' },
      { property: 'og:url', content: 'https://darbastan.com/ForgotPassword' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/ForgotPassword' },
    ]
})
const onSubmitForm = (values: any) => {
  debugger
  phoneNumber.value=values.phoneNumber
  ResMessage.value = '';
  store.ForgotPassword(values).then((res) => {
    if (res.isSuccess == true) {
      Step.value=2;
    }
    ResMessage.value = res.messages[0];
  })
  setTimeout(() => {
    ResMessage.value = ''
  }, 10000)

}
const onResetPasswordSubmitForm = (values: any) => {
  debugger
  values.phoneNumber=phoneNumber.value;

  ResMessage.value = '';
  store.ResetPassword(values).then((res) => {
    if (res.isSuccess == true) {
      ResMessage.value ="تغییر کلمه عبور شماانجام شد بعد از چند ثانیه به صفحه لاگین منتقل می شوید";
      setTimeout(() => {
        router.push({ name: "Login" });
      }, 7000)
    }else{
      ResMessage.value = res.messages[0];
    }

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

.ForgotPassword {
  padding-right: 20px;
  padding-left: 40px;
}

.card input {
  height: 58px;
  margin: 10px;
}

.btnForgotPassword {
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
