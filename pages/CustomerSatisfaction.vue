<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3 class="mb-3">
            فرم رضایت مندی مشتریان از شرکتها و پیمانکاران صنعت طلا
          </h3>
          <!-- کاهش margin-bottom -->
          <p>
            دقت داشته باشید که اطلاعات توسط خود مشتری پر شود در غیر اینصورت هیچ
            امتیازی به شرکت مربوطه داده نخواهد شد.
          </p>
        </div>

        <div class="row justify-content-center align-items-stretch">
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <div class="form">
                  <div>
                    <Toast />
                  </div>
                  <div>
                    <VForm
                      class="form w-100"
                      id="kt_login_signin_form"
                      @submit="onSubmitForm"
                      :validation-schema="RegisterCustomerSatisfactionModel"
                      :initial-values="RegisterCustomerSatisfactionData"
                    >
                      <div class="row justify-content-md-center">
                        <div class="Login">
                          <Field
                            name="name"
                            type="text"
                            placeholder="نام پیمانکار یا شرکت"
                            class="form-control text-center"
                          />
                          <ErrorMessage class="p-2 text-danger" name="name" />

                          <Field
                            name="lfirstname"
                            type="text"
                            placeholder="نام و نام خانوادگی"
                            class="form-control text-center"
                          />
                          <ErrorMessage
                            class="p-2 text-danger"
                            name="lfirstname"
                          />

                          <Field
                            name="ostanId"
                            as="select"
                            class="form-control form-select text-center"
                            v-model="DropdownsInfo.ostanId.Selected"
                          >
                            <option value="">استان را انتخاب کنید</option>
                            <option
                              v-for="item in DropdownsInfo.ostanId.Items"
                              :value="item.id"
                            >
                              {{ item.name }}
                            </option>
                          </Field>
                          <ErrorMessage
                            class="p-2 text-danger"
                            name="ostanId"
                          />
                          <Field
                            name="cityId"
                            as="select"
                            class="form-control form-select text-center"
                          >
                            <option value="">شهر را انتخاب کنید</option>
                            <option
                              v-for="item in DropdownsInfo.cityId.Items"
                              :value="item.id"
                            >
                              {{ item.name }}
                            </option>
                          </Field>
                          <ErrorMessage class="p-2 text-danger" name="cityId" />

                          <Field
                            name="phoneNumber"
                            type="text"
                            placeholder="تلفن همراه مثال : 09338121682"
                            class="form-control text-center"
                          />
                          <ErrorMessage
                            class="p-2 text-danger"
                            name="phoneNumber"
                          />
                          <hr />
                          <label>نحوه برخورد عوامل با شما :</label>
                          <div class="d-flex flex-row align-items-center">
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs1"
                                value="20"
                                class="mr-2"
                              />
                              عالی
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs1"
                                value="15"
                                class="mr-2"
                              />
                              خوب
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs1"
                                value="10"
                                class="mr-2"
                              />
                              متوسط
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs1"
                                value="5"
                                class="mr-2"
                              />
                              بد
                            </label>
                          </div>
                          <ErrorMessage class="p-2 text-danger" name="cs1" />
                          <hr />

                          <label>قیمت نسبت به سایر خدمات دهندگان :</label>
                          <div class="d-flex flex-row align-items-center">
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs2"
                                value="20"
                                class="mr-2"
                              />
                              عالی
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs2"
                                value="15"
                                class="mr-2"
                              />
                              خوب
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs2"
                                value="10"
                                class="mr-2"
                              />
                              متوسط
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs2"
                                value="5"
                                class="mr-2"
                              />
                              بد
                            </label>
                          </div>
                          <ErrorMessage class="p-2 text-danger" name="cs2" />
                          <hr />
                          <label>کیفیت انجام کار :</label>
                          <div class="d-flex flex-row align-items-center">
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs3"
                                value="20"
                                class="mr-2"
                              />
                              عالی
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs3"
                                value="15"
                                class="mr-2"
                              />
                              خوب
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs3"
                                value="10"
                                class="mr-2"
                              />
                              متوسط
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs3"
                                value="5"
                                class="mr-2"
                              />
                              بد
                            </label>
                          </div>
                          <ErrorMessage class="p-2 text-danger" name="cs3" />
                          <hr />
                          <label>رعایت نکات ایمنی در انجام کار:</label>
                          <div class="d-flex flex-row align-items-center">
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs4"
                                value="20"
                                class="mr-2"
                              />
                              عالی
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs4"
                                value="15"
                                class="mr-2"
                              />
                              خوب
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs4"
                                value="10"
                                class="mr-2"
                              />
                              متوسط
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs4"
                                value="5"
                                class="mr-2"
                              />
                              بد
                            </label>
                          </div>
                          <ErrorMessage class="p-2 text-danger" name="cs4" />
                          <hr />
                          <label>تمایل به کار مجدد با پیمانکار یا شرکت :</label>
                          <div class="d-flex flex-row align-items-center">
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs5"
                                value="20"
                                class="mr-2"
                              />
                              عالی
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs5"
                                value="15"
                                class="mr-2"
                              />
                              خوب
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs5"
                                value="10"
                                class="mr-2"
                              />
                              متوسط
                            </label>
                            <label class="d-flex align-items-center mr-3">
                              <Field
                                type="radio"
                                name="cs5"
                                value="5"
                                class="mr-2"
                              />
                              بد
                            </label>
                          </div>
                          <ErrorMessage class="p-2 text-danger" name="cs5" />

                          <Field
                            name="summery"
                            type="text"
                            placeholder="توضیحات"
                            class="form-control text-center custom-textarea"
                          />
                          <ErrorMessage
                            class="p-2 text-danger"
                            name="summery"
                          />

                          <div class="text-center mt-4">
                            <button
                              type="submit"
                              class="btn btn-primary btnLogin"
                              id="btnPost2"
                            >
                              ارسال ارزشیابی شما
                            </button>
                          </div>
                        </div>
                      </div>
                    </VForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="card">
              <div class="card-body">
                <div class="table">
                  <DataTable
                    :value="CustomerSatisfactionList"
                    :dataKey="'id'"
                    :loading="loading"
                    paginator
                    :rows="30"
                    :rowsPerPageOptions="[5, 10, 20, 50]"
                    v-model:filters="filters"
                    filterDisplay="row"
                    :globalFilterFields="['name', 'ostanName']"
                  >
                    <template #header>
                      <div class="flex justify-content-between">
                        <span class="p-input-icon-left">
                          <CoSearch></CoSearch>
                          <InputText
                            v-model="filters['global'].value"
                            placeholder="جستجو کنید"
                          />
                        </span>
                      </div>
                    </template>

                    <Column field="name" header="نام شرکت یا پیمانکار"></Column>
                    <Column
                      field="lfirstname"
                      header="نام حقیقی یا حقوقی مشتری"
                    ></Column>
                    <Column field="ostanName" header="استان"></Column>
                    <Column field="cityName" header="شهر"></Column>
                    <Column field="summery" header="توضیحات" ></Column>
                    <Column field="cs1" header="امتیاز نهایی">
                      <template #body="{ data }">
                        <Knob class="text-center" v-model="data.totalScore" :disabled="true" />
                      </template>
                    </Column>
                    <Column field="requestDate" header="تاریخ ثبت" class="p-2">
                      <template #body="{ data }">
                        <span>
                          {{
                            new Date(data.requestDate).toLocaleDateString(
                              "fa-IR",
                              {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                              }
                            )
                          }}</span
                        >
                      </template>
                    </Column>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { onBeforeMount, onServerPrefetch, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { FilterMatchMode } from "@primevue/core/api";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Knob from "primevue/knob";

import * as Yup from "yup";

const store = useDataStore();
const router = useRouter();
const toast = useToast();
const CustomerSatisfactionList = ref<any>([]);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  pageTitle: { value: null, matchMode: FilterMatchMode.CONTAINS },
  pageId: { value: null, matchMode: FilterMatchMode.CONTAINS },
});
const loading = ref(false);

const RegisterCustomerSatisfactionModel = Yup.object().shape({
  name: Yup.string()
    .required("نام پیمانکار یا شرکت الزامیست")
    .label("نام پیمانکار یا شرکت"),
  lfirstname: Yup.string()
    .required("نام و نام خانوادگی الزامیست")
    .label("نام و نام خانوادگی"),
  phoneNumber: Yup.string()
    .required("شماره همراه الزامیست")
    .label("شماره همراه"),
  cs1: Yup.string()
    .required("نحوه برخورد عوامل با شما الزامیست")
    .label("نحوه برخورد عوامل با شما"),
  cs2: Yup.string()
    .required("قیمت نسبت به سایر خدمات دهندگان الزامیست")
    .label("قیمت نسبت به سایر خدمات دهندگان"),
  cs3: Yup.string()
    .required("کیفیت انجام کار الزامیست")
    .label("کیفیت انجام کار"),
  cs4: Yup.string()
    .required("رعایت نکات ایمنی در انجام کار الزامیست")
    .label("رعایت نکات ایمنی در انجام کار"),
  cs5: Yup.string()
    .required("تمایل به کار مجدد با پیمانکار یا شرکت الزامیست")
    .label("تمایل به کار مجدد با پیمانکار یا شرکت"),
  summery: Yup.string().required("توضیحات الزامی می باشد").label("توضیحات"),
  ostanId: Yup.number().required("استان الزامی می باشد").label("استان"),
  cityId: Yup.number().required("شهر الزامیست").label("شهر"),
});

const RegisterCustomerSatisfactionData = ref<any | object>(null);
const DropdownsInfo = ref<any | object>({
  ostanId: {
    Selected: null,
    Items: null,
  },
  cityId: {
    Selected: null,
    Items: null,
  },
});

const ResMessage = ref("");


await useAsyncData('customersatisfaction', async () => {
  loading.value = true;
  await store.GetCustomerSatisfactionAll().then(() => {
    CustomerSatisfactionList.value = store.CustomersSatisfactionData.List;
    loading.value = false;
  });

  store.FetchOstan().then(() => {
    DropdownsInfo.value.ostanId.Items = store.OstanData.List;
  });

});

watch(DropdownsInfo.value.ostanId, () => {
  if (DropdownsInfo.value.ostanId.Selected != null) {
    store.FetchCity(DropdownsInfo.value.ostanId.Selected).then(() => {
      DropdownsInfo.value.cityId.Items = store.CityData.List;
    });
  }
});


const onSubmitForm = (values: any) => {
  ResMessage.value = "";
  RegisterCustomerSatisfactionData.value = values;
  store.CreateCustomerSatisfaction(values).then((res) => {
    if (res.isSuccess == true) {
      toast.add({
        severity: "success",
        summary: "مدیران گلد",
        detail:
          "ارزیابی شرکت یا پیمانکار برای مدیران گلد با موفقیت ارسال شد پس از صحت سنجی تایید و منتشر خواهد شد",
        life: 9000,
      });
    }
    ResMessage.value = res.messages[0];
  });
  setTimeout(() => {
    ResMessage.value = "";
  }, 10000);
};

useHead({
    title: 'رضایت مشتری',
    meta: [
      { name: 'description', content: 'برای مشاهده نظرات و بازخوردهای مشتریان در خصوص خدمات طلا مدیران گلد، به صفحه رضایت مشتریان مراجعه کنید. مشاهده تجربیات مشتریان و ارزیابی کیفیت خدمات طلا. کسب اطلاعات در مورد رضایت مشتری و تعاملات حرفه‌ای با مدیران گلد.' },
      { name: 'keywords', content: 'رضایت مشتری، نظرات مشتریان، طلا، مدیران گلد، scaffolding feedback'},
      { property: 'og:title', content: 'رضایت مشتری' },
      { property: 'og:description', content: 'برای مشاهده نظرات و بازخوردهای مشتریان در خصوص خدمات طلا مدیران گلد، به صفحه رضایت مشتریان مراجعه کنید. مشاهده تجربیات مشتریان و ارزیابی کیفیت خدمات طلا. کسب اطلاعات در مورد رضایت مشتری و تعاملات حرفه‌ای با مدیران گلد.' },
      { property: 'og:url', content: 'https://darbastan.com/customersatisfaction' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/customersatisfaction' },
    ]
})
</script>

<style scoped>
.card {
  box-shadow: inset 0px 0px 10px 2px #fdbe33;
  height: 100%;
  margin: 0;
}

.Login {
  padding-right: 10px;
  padding-left: 10px;
}

.card input,
select {
  height: 45px; /* ارتفاع کاهش داده‌شده */
  margin: 5px; /* کاهش فاصله‌ها */
}

.btnLogin {
  width: 100%;
  border-radius: 30px; /* ظاهر دکمه گردتر */
  padding: 12px;
}

h3.mb-3 {
  margin-bottom: 15px; /* فاصله مناسب‌تر */
}

.full-height {
  display: flex;
  justify-content: center;
  align-items: stretch; /* برای اینکه دو ستون یک ارتفاع یکسان داشته باشند */
  min-height: 80vh;
}

.custom-textarea {
  min-height: 100px; /* تنظیم ارتفاع */
  padding: 10px;
  resize: vertical; /* کاربر می‌تواند ارتفاع را تنظیم کند */
}

label {
  font-weight: bold; /* تاکید بر برچسب‌ها */
}

.d-flex label {
  margin-left: 10px;
  margin-right: 0;
}

.form-control {
  text-align: right;
  direction: rtl; /* جهت برای زبان فارسی */
}

.card-body a {
  font-weight: 400;
  font-size: 12px;
  color: #489cff;
  text-decoration: none;
}

.card-body .forgot__password {
  color: #489cff;
}

.info__box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.info__box .items {
  width: calc(50% - 10px);
  margin: 5px;
}

.info__box .items .item {
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.info__box .items .item p {
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  color: #757575;
}

.info__box .items .more {
  background: #b29355;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}



@media (max-width: 768px) {
  .Login {
    padding: 10px;
  }

  .card input,
  select {
    height: 40px;
  }

  .btnLogin {
    padding: 10px;
    font-size: 14px;
  }

  .full-height {
    min-height: auto;
  }

  h3.mb-3 {
    font-size: 18px;
  }

  .custom-textarea {
    min-height: 80px;
  }
  .p-datatable-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .p-datatable th:nth-child(2), 
  .p-datatable td:nth-child(2) {
    display: none; /* مخفی کردن ستون دوم در موبایل */
  }

}
</style>
