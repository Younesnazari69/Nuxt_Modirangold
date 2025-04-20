<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3> ورود به سایت مدیران گلد </h3>
          <p> مدیران گلد ، رونق کسب و کارتان
          </p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h6 class="text-center m-3">
                  نام کاربری همان ایمیل شما در زمان ثبت نام می باشد.
                </h6>
                <div v-if="ResMessage != ''" class="alert alert-danger text-center m-2" role="alert">
                  {{ ResMessage }}
                </div>
                <div v-if="Registerstep == 1">
                  <VForm class="form w-100" id="kt_login_signin_form" @submit="onSubmitForm"
                    :validation-schema="RegisterMobileModel" :initial-values="RegisterMobileData">
                    <div class="row justify-content-md-center">
                      <div class="Login">
                        <Field name="ucId" as="select" class="form-control form-select text-center">
                          <option value="">--نوع فعالیت را انتخاب کنید--</option>
                          <option v-for="item in DropdownsInfo.ucId.Items" :value="item.id">{{ item.nameType }}</option>
                        </Field>
                        <ErrorMessage class="p-2 text-danger" name="ucId" />
                        <Field name="phoneNumber" type="text" placeholder="تلفن همراه مثال : 09338121682"
                          class="form-control text-center " />
                        <ErrorMessage class="p-2 text-danger" name="phoneNumber" />
                        <Field name="password" type="Password" placeholder="کلمه عبور"
                          class="form-control text-center " />
                        <ErrorMessage class="p-2 text-danger" name="password" />
                        <Field name="ostanId" as="select" class="form-control form-select text-center"
                          v-model="DropdownsInfo.ostanId.Selected">
                          <option value="">استان را انتخاب کنید</option>
                          <option v-for="item in DropdownsInfo.ostanId.Items" :value="item.id">{{ item.name }}</option>
                        </Field>
                        <ErrorMessage class="p-2 text-danger" name="ostanId" />
                        <Field name="cityId" as="select" class="form-control form-select text-center">
                          <option value="">شهر را انتخاب کنید</option>
                          <option v-for="item in DropdownsInfo.cityId.Items" :value="item.id">{{ item.name }}</option>
                        </Field>
                        <ErrorMessage class="p-2 text-danger" name="cityId" />
                        <div class="d-flex flex-row align-items-center">
                          <input type="checkbox" class="m-2">
                          <label class="text-secondary p-2">قوانین را قبول دارم</label>
                        </div>
                        <div class="text-center mt-4">
                          <button type="submit" class="btn btn-primary btnLogin" id="btnPost2">ثبت نام</button>
                          <a href="/Account/RegisterMobile" class="btn btn-warning">حساب کاربری دارید؟ وارد شوید</a>
                        </div>
                      </div>
                    </div>
                  </VForm>
                </div>
                <div v-if="Registerstep == 2">
                  <VForm class="form w-100" id="kt_login_signin_form" @submit="onSubmitVerifyMobileForm"
                    :validation-schema="VerifyMobileModel">
                    <div class="row justify-content-md-center">
                      <div class="Login">
                        <Field name="Code" type="text" placeholder="کد دریافتی را وارد کنید"
                          class="form-control text-center " />

                        <ErrorMessage class="p-2 text-danger" name="Code" />
                        <div class="text-center mt-4">
                          <button type="submit" class="btn btn-primary btnLogin" id="btnPost2">ثبت نام</button>
                        </div>
                      </div>
                    </div>
                  </VForm>


                </div>

              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info__box">
              <div class="items">
                <div class="item">
                  <span>
                    ۰۱
                  </span>
                  <h6>
                    عضويت سطح دو (اعضاي طلایی )
                  </h6>
                  <p>
                    با ثبت نام در اين سطح و يا ارتقا به اين سطح هديه استفاده از پك تبليغاتي I۰۱ و I۰۳ به اين عضو تعلق
                    خواهد گرفت همچنين در صورت تمديد ساليانه اين هديه مجددا جهت اعضاي نقره اي قابل استفاده خواهد بود . <a
                      href="https://link.darbastan.com/a8fa72">آشنايي با پك هاي تبليغاتي مجموعه مدیران گلد</a>
                  </p>
                  <div class="line">

                  </div>
                  <small>
                    تبلیغات در مدیران گلد
                  </small>
                </div>
                <a href="/Advertising" class="more">
                  اطلاعات بیشتر
                </a>
              </div>
              <div class="items">
                <div class="item">
                  <span>
                    ۰۱
                  </span>
                  <h6>
                    عضويت رایگان (اعضاي برنزی )
                  </h6>
                  <p>
                    در اين سطح عضويت ،پروفايل ثبت نام كننده بدون شماره تماس و لينك سايت نمايش داده خواهد شد . يك جايگاه
                    آگهي تصويري جهت معرفي محصول و يا خدمات در اختيار عضوييت رايگان قرار ميگيرد . مخاطبين آشنايي با اين
                    عضو و يا متقاضيان استفاده از محصول يا خدمات بعد از تماس با مديريت سايت به ايشان معرفي خواهند شد .
                    عضو رايگان در هر زمان مي تواند جهت ارتقا به سطوح بالاتر اقدام نمايد .
                  </p>
                  <div class="line">

                  </div>
                  <small>
                    تبلیغات در مدیران گلد
                  </small>
                </div>
                <a href="/Advertising" class="more">
                  اطلاعات بیشتر
                </a>
              </div>
              <div class="items">
                <div class="item">
                  <span>
                    ۰۱
                  </span>
                  <h6>
                    عضويت سطح يك (اعضاي نقره ای)
                  </h6>
                  <p>
                    در اين سطح عضويت ،پروفايل ثبت نام كننده به همراه شماره تماس و لينك سايت نمايش داده خواهد شد . سه
                    جايگاه آگهي تصويري جهت معرفي محصول و يا خدمات در اختيار عضوييت نقره اي قرار ميگيرد . مخاطبين آشنايي
                    با اين عضو و يا متقاضيان استفاده از محصول يا خدمات مي توانند بصورت مستقيم با اعضاي نقره اي در تماس
                    باشند . با ثبت نام در اين سطح و يا ارتقا به اين سطح هديه استفاده از پك تبليغاتي <a
                      href="https://link.darbastan.com/a8fa72">I۰۱</a> به اين عضو تعلق خواهد گرفت همچنين در صورت تمديد
                    ساليانه اين هديه مجددا جهت اعضاي نقره اي قابل استفاده خواهد بود . <a
                      href="https://link.darbastan.com/a8fa72">آشنايي با پك هاي تبليغاتي مجموعه مدیران گلد</a>
                  </p>
                  <div class="line">

                  </div>
                  <small>
                    تبلیغات در مدیران گلد
                  </small>
                </div>
                <a href="/Advertising" class="more">
                  اطلاعات بیشتر
                </a>
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
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { onBeforeMount, onServerPrefetch, ref, watch } from 'vue';
import { useRouter } from 'vue-router'

import * as Yup from "yup";

const store = useDataStore()
const router = useRouter()
const Registerstep = ref<number>(1);
const RegisterMobileModel = Yup.object().shape({
  ucId: Yup.number().required("نوع مشتری الزامیست").label("نوع مشتری"),
  phoneNumber: Yup.string().required("شماره همراه الزامیست").label("شماره همراه"),
  password: Yup.string().required("کلمه عبور الزامیست").label("کلمه عبور"),
  ostanId: Yup.number().required("استان الزامی می باشد").label("استان"),
  cityId: Yup.number().required("شهر الزامیست").label("شهر"),
});
const VerifyMobileModel = Yup.object().shape({
  Code: Yup.number().required("کد الزامیست").label("کد OTP"),
});



const RegisterMobileData = ref<any | object>(null);
const DropdownsInfo = ref<any | object>({
  ucId: {
    Selected: null,
    Items: null
  },
  ostanId: {
    Selected: null,
    Items: null
  },
  cityId: {
    Selected: null,
    Items: null
  },
})

const ResMessage = ref('')



await useAsyncData('registermobile', async () => {
  store.FetchOstan().then(() => {
    DropdownsInfo.value.ostanId.Items = store.OstanData.List;
  });

  store.GetUserCategoriesAll().then(() => {
    DropdownsInfo.value.ucId.Items = store.UserCategoriesData.List;
  });

});

watch(DropdownsInfo.value.ostanId, () => {
  debugger
  if (DropdownsInfo.value.ostanId.Selected != null) {
    store.FetchCity(DropdownsInfo.value.ostanId.Selected).then(() => {
      DropdownsInfo.value.cityId.Items = store.CityData.List;
    });
  }
});

const onSubmitForm = (values: any) => {
  debugger
  ResMessage.value = '';
  RegisterMobileData.value = values;
  store.RegisterMobile(values).then((res) => {
    if (res.isSuccess == true) {
      Registerstep.value = 2
    }
    ResMessage.value = res.messages[0];
  })
  setTimeout(() => {
    ResMessage.value = ''
  }, 10000)

}
const onSubmitVerifyMobileForm = (values: any) => {
  debugger
  ResMessage.value = '';
  values.PhoneNumber = RegisterMobileData.value.phoneNumber;
  store.VerifyMobile(values).then((res) => {
    if (res.isSuccess == true) {
      ResMessage.value ="ثبت نام شما با موفقیت انجام شد بعد از چند ثانیه به صفحه لاگین منتقل می شوید";
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

useHead({
    title: 'ثبت‌ نام مدیران گلد',
    meta: [
      { name: 'description', content: 'برای ثبت‌ نام در سایت طلا مدیران گلد و دریافت خدمات طلا، مشخصات خود را وارد کنید. ثبت‌نام سریع و ساده برای دریافت تخمین قیمت و مشاوره رایگان.' },
      { name: 'keywords', content: 'ثبت‌ نام، طلا، مدیران گلد، خدمات طلا، ثبت‌ نام آنلاین، تخمین قیمت' },
      { property: 'og:title', content: 'ثبت‌نام موبایل' },
      { property: 'og:description', content: 'برای ثبت‌ نام در سایت مدیران گلد و دریافت خدمات طلا، مشخصات خود را وارد کنید. ثبت‌ نام سریع و ساده برای دریافت تخمین قیمت و مشاوره رایگان.' },
      { property: 'og:url', content: 'https://darbastan.com/RegisterMobile' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/RegisterMobile' },
    ]
})
</script>

<style>
.card {
  box-shadow: inset 0px 0px 10px 2px #fdbe33;
}

.Login {
  padding-right: 20px;
  padding-left: 40px;
}

.card input,
select {
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

.info__box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.info__box .items {
  width: calc(50% - 20px);
  margin: 10px;
  height: 380px;
  position: relative;
  -webkit-transition: .3s ease-in;
  transition: .3s ease-in;
}

.info__box .items .item {
  height: 346px;
  border-radius: 33px;
  background: #fff;
  -webkit-box-shadow: 0 2px 16px rgba(0, 0, 0, .1);
  box-shadow: 0 2px 16px rgba(0, 0, 0, .1);
  padding: 30px 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: .3s ease-in;
  transition: .3s ease-in;
}

.info__box .items .item p {
  height: 102px;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  text-align: justify;
  color: #757575;
  overflow: hidden;
}

.info__box .items .more {
  position: absolute;
  width: 215px;
  height: 63px;
  border-radius: 31.5px;
  background: #b29355;
  bottom: 5px;
  right: 50%;
  -webkit-transform: translateX(50%);
  transform: translateX(50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #fff;
}
</style>
