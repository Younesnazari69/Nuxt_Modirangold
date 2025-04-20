<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3 v-if="route.name === 'Registration'">
            فرم ثبت اطلاعات فردی و حرفه ای طلا بندان
          </h3>
          <h3 v-if="route.name === 'RegistrationEN'">
            Personal and professional information registration form for
            scaffolders
          </h3>
          <h3 v-if="route.name === 'RegistrationDE'">
            Persönliche und berufliche Informationen zum Gerüstbau
          </h3>
          <p></p>
        </div>

        <div class="row justify-content-md-center">
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <h6 class="text-center m-3">
                  <Toast />
                </h6>

                <VForm
                  class="form w-100"
                  id="kt_login_signin_form"
                  @submit="onSubmitForm"
                  :validation-schema="RegistrationModel"
                >
                  <div class="row justify-content-md-center">
                    <div class="Login">
                      <Field
                        v-if="route.name === 'Registration'"
                        name="country"
                        value="Iran"
                        type="text"
                        class="form-control text-center"
                        disabled
                        hidden
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage
                            v-if="route.name === 'Registration'"
                            name="country"
                          />
                        </div>
                      </div>

                      <Field
                        v-if="route.name === 'Registration'"
                        name="city"
                        value="TEHRAN"
                        type="text"
                        class="form-control text-center"
                        disabled
                        hidden
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage
                            v-if="route.name === 'Registration'"
                            name="city"
                          />
                        </div>
                      </div>

                      <!--DE-->
                      <Field
                        v-if="route.name === 'RegistrationDE'"
                        name="country"
                        as="select"
                        class="form-control form-select text-center"
                        v-model="DropdownsInfo.country.Selected"
                      >
                        <option value="">Wählen Sie das Land</option>
                        <option
                          v-for="item in DropdownsInfo.country.Items"
                          :value="item.countryname"
                        >
                          {{ item.countryname }}
                        </option>
                      </Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage
                            v-if="route.name === 'RegistrationDE'"
                            name="country"
                          />
                        </div>
                      </div>

                      <!--DE-->
                      <Field
                        v-if="route.name === 'RegistrationDE'"
                        name="city"
                        as="select"
                        class="form-control form-select text-center"
                      >
                        <option value="">Wählen Sie die Stadt</option>
                        <option
                          v-for="item in DropdownsInfo.city.Items"
                          :value="item.cityname"
                        >
                          {{ item.cityname }}
                        </option>
                      </Field>
                      <ErrorMessage
                        v-if="route.name === 'RegistrationDE'"
                        class="p-2 text-danger"
                        name="city"
                      />

                   

                      <Field
                        v-if="route.name === 'RegistrationEN'"
                        name="country"
                        as="select"
                        class="form-control form-select text-center"
                        v-model="DropdownsInfo.country.Selected"
                      >
                        <option value="">Select the country</option>
                        <option
                          v-for="item in DropdownsInfo.country.Items"
                          :value="item.countryname"
                        >
                          {{ item.countryname }}
                        </option>
                      </Field>
                      <ErrorMessage
                        v-if="route.name === 'RegistrationEN'"
                        class="p-2 text-danger"
                        name="country"
                      />
                      <Field
                        v-if="route.name === 'RegistrationEN'"
                        name="city"
                        as="select"
                        class="form-control form-select text-center"
                      >
                        <option value="">Select the city</option>
                        <option
                          v-for="item in DropdownsInfo.city.Items"
                          :value="item.cityname"
                        >
                          {{ item.cityname }}
                        </option>
                      </Field>
                      <ErrorMessage
                        v-if="route.name === 'RegistrationEN'"
                        class="p-2 text-danger"
                        name="city"
                      />

                      <Field
                        name="name"
                        type="text"
                        :placeholder="
                          route.name === 'RegistrationEN'
                            ? 'Name'
                            : route.name === 'RegistrationDE'
                            ? 'Name'
                            : 'نام'
                        "
                        class="form-control text-center"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="name" />
                        </div>
                      </div>

                      <Field
                        name="lastName"
                        type="text"
                        :placeholder="
                          route.name === 'RegistrationEN'
                            ? 'Last Name'
                            : route.name === 'RegistrationDE'
                            ? 'Nachname'
                            : 'نام خانوادگی'
                        "
                        class="form-control text-center"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="lastName" />
                        </div>
                      </div>

                      <Field
                        name="job"
                        type="text"
                        :placeholder="
                          route.name === 'RegistrationEN'
                            ? 'Job Title'
                            : route.name === 'RegistrationDE'
                            ? 'Berufsbezeichnung'
                            : 'شغل'
                        "
                        class="form-control text-center"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="job" />
                        </div>
                      </div>

                      <Field
                        name="yearsOfWorkExperience"
                        type="text"
                        :placeholder="
                          route.name === 'RegistrationEN'
                            ? 'Years of work experience(Number)'
                            : route.name === 'RegistrationDE'
                            ? 'Jahre Berufserfahrung (Anzahl)'
                            : 'تعداد سال سابقه کار'
                        "
                        class="form-control text-center"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="yearsOfWorkExperience" />
                        </div>
                      </div>

                      <Field
                        name="email"
                        type="text"
                        :placeholder="
                          route.name === 'RegistrationEN'
                            ? 'Email Address'
                            : route.name === 'RegistrationDE'
                            ? 'E-Mail'
                            : 'ایمیل'
                        "
                        class="form-control text-center"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="email" />
                        </div>
                      </div>

                      <Field
                        name="phoneNumber"
                        type="text"
                        :placeholder="
                          route.name === 'RegistrationEN'
                            ? 'Phone Number'
                            : route.name === 'RegistrationDE'
                            ? 'Handynummer'
                            : 'شماره همراه'
                        "
                        class="form-control text-center"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage
                            v-if="route.name === 'Registration'"
                            name="phoneNumber"
                          />
                        </div>
                      </div>

                      <Field name="description" v-slot="{ field }">
                        <textarea
                          class="form-control text-center"
                          v-bind="field"
                          id="description"
                          rows="3"
                          :placeholder="
                            route.name === 'RegistrationEN'
                              ? 'Short description about yourself'
                              : route.name === 'RegistrationDE'
                              ? 'Kurze Beschreibung über dich'
                              : 'توضیحات کوتاه درباره خود'
                          "
                        ></textarea>
                      </Field>
                      <div
                        v-if="route.name === 'Registration'"
                        class="fv-plugins-message-container"
                      >
                        <div class="fv-help-block">
                          <ErrorMessage name="description" />
                        </div>
                      </div>

                      <label
                        v-if="route.name === 'Registration'"
                        class="text-center"
                        >بارگذاری سوابق کاری شامل : تصویر پرسنلی،اطلاعات
                        فردی،سوابق شغلی در قالب PDF</label
                      >
                      <Field
                        v-if="route.name === 'Registration'"
                        name="cv"
                        v-slot="{ handleChange, handleBlur }"
                      >
                        <input
                          type="file"
                          @change="handleChange"
                          @blur="handleBlur"
                          class="form-control form-control-sm form-control-solid"
                        />
                      </Field>
                      <ErrorMessage
                        v-if="route.name === 'Registration'"
                        name="cv"
                      />

                      <!--EN-->
                      <label
                        v-if="route.name === 'RegistrationEN'"
                        class="text-center"
                        >Upload work experience including: personnel picture,
                        personal information, job experiences in only PDF
                        format</label
                      >
                      <Field
                        v-if="route.name === 'RegistrationEN'"
                        name="cv"
                        v-slot="{ handleChange, handleBlur }"
                      >
                        <input
                          type="file"
                          @change="handleChange"
                          @blur="handleBlur"
                          class="form-control form-control-sm form-control-solid"
                        />
                      </Field>
                      <ErrorMessage
                        v-if="route.name === 'RegistrationEN'"
                        name="cv"
                      />

                      <!--DE-->
                      <label
                        v-if="route.name === 'RegistrationDE'"
                        class="text-center"
                        >Arbeitserfahrung hochladen, einschließlich:
                        Personalfoto, persönliche Informationen,
                        Berufserfahrungen ausschließlich im PDF-Format</label
                      >
                      <Field
                        v-if="route.name === 'RegistrationDE'"
                        name="cv"
                        v-slot="{ handleChange, handleBlur }"
                      >
                        <input
                          type="file"
                          @change="handleChange"
                          @blur="handleBlur"
                          class="form-control form-control-sm form-control-solid"
                        />
                      </Field>
                      <ErrorMessage
                        v-if="route.name === 'RegistrationDE'"
                        name="cv"
                      />

                      <div
                        v-if="route.name === 'Registration'"
                        class="text-center mt-4"
                      >
                        <button
                          type="submit"
                          ref="submitButton"
                          class="btn btn-primary btnLogin"
                          id="btnPost2"
                        >
                          ثبت و ارسال
                        </button>
                      </div>

                      <div
                        v-if="route.name === 'RegistrationEN'"
                        class="text-center mt-4"
                      >
                        <button
                          type="submit"
                          ref="submitButton"
                          class="btn btn-primary btnLogin"
                          id="btnPost2"
                        >
                          Register and send
                        </button>
                      </div>

                      <div
                        v-if="route.name === 'RegistrationDE'"
                        class="text-center mt-4"
                      >
                        <button
                          type="submit"
                          ref="submitButton"
                          class="btn btn-primary btnLogin"
                          id="btnPost2"
                        >
                          Registrieren und senden
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
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";
import { onBeforeMount, onServerPrefetch, ref, watch } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useToast } from "primevue/usetoast";
import { useRoute } from "vue-router";

import * as Yup from "yup";

const store = useDataStore();
const route = useRoute();
const toast = useToast();
const messages = {
  fa: {
    mixed: {
      required: "وارد کردن این فیلد الزامی است",
    },
    string: {
      min: "حداقل باید ${min} کاراکتر باشد",
      max: "حداکثر باید ${max} کاراکتر باشد",
      email: "آدرس ایمیل نامعتبر است",
    },
    number: {
      min: "عدد باید بزرگتر یا مساوی ${min} باشد",
      max: "عدد باید کوچکتر یا مساوی ${max} باشد",
    },
  },
  en: {
    mixed: {
      required: "This field is required",
    },
    string: {
      min: "Must be at least ${min} characters",
      max: "Must be at most ${max} characters",
      email: "Invalid email address",
    },
    number: {
      min: "Must be greater than or equal to ${min}",
      max: "Must be less than or equal to ${max}",
    },
  },

  de: {
    mixed: {
      required: "Dieses Feld ist erforderlich",
    },
    string: {
      min: "Muss mindestens sein ${min} Charaktere",
      max: "Muss höchstens sein ${max} Charaktere",
      email: "Ungültige E-Mail-Adresse",
    },
    number: {
      min: "Muss größer oder gleich sein ${min}",
      max: "Muss kleiner oder gleich sein ${max}",
    },
  },
  // زبانهای دیگر نیز به همین شکل
};

const setValidationLocale = (locale: string) => {
  Yup.setLocale(messages[locale] || messages.fa); // به صورت پیشفرض از انگلیسی استفاده میشود
};

let routename = route.name;
switch (routename) {
  case "RegistrationEN":
    setValidationLocale("en");
    break;
  case "RegistrationDE":
    setValidationLocale("de");
    break;
  default:
    setValidationLocale("fa");
    break;
}

const RegistrationModel = Yup.object().shape({
  name: Yup.string().required().label("نام"),
  lastName: Yup.string().required().label("نام خانوادگی"),
  job: Yup.string().required().label("شغل"),
  yearsOfWorkExperience: Yup.string().required().label("سابقه کار"),
  email: Yup.string().email().required().label("ایمیل"),
  cv: Yup.mixed().required().label("بارگذاری پی دی اف سابقه کاری و فردی"),
  phoneNumber: Yup.string().nullable().label("شماره همراه"),
  description: Yup.string().label("توضیحات"),
});

const RegistrationData = ref<any | object>(null);
const submitButton = ref<HTMLButtonElement | null>(null);
let Formvalues: any = null;

const UploudFiles = ref<any>([]);

const DropdownsInfo = ref<any | object>({
  country: {
    Selected: null,
    Items: null,
  },
  city: {
    Selected: null,
    Items: null,
  },
});

await useAsyncData("registration", async () => {
    store.FetchCountries().then(() => {
    DropdownsInfo.value.country.Items = store.CountryData.List;
  });
  if (route.path.toLowerCase() === "/Registration".toLowerCase()) {
    useHead({
      title: "ثبت‌ نام طلا ‌بندان برای همکاری با شرکت‌ها",
      meta: [
        {
          name: "description",
          content:
            "اگر طلا‌ بند حرفه‌ای هستید، با ثبت ‌نام در این صفحه می‌توانید به شرکت‌ها معرفی شوید و پروژه‌های بیشتری دریافت کنید. عضویت در شبکه مدیران گلد برای گسترش حرفه و افزایش درآمد.",
        },
        {
          name: "keywords",
          content:
            "ثبت ‌نام طلا‌ بند، همکاری با شرکت‌ها، طلا‌ بندان، معرفی به شرکت‌ها، پروژه طلا، کار در طلا، مدیران گلد",
        },
        {
          property: "og:title",
          content: "ثبت ‌نام طلا‌ بندان برای همکاری با شرکت‌ها",
        },
        {
          property: "og:description",
          content:
            "اگر طلا‌ بند حرفه‌ای هستید، با ثبت‌نام در این صفحه می‌توانید به شرکت‌ها معرفی شوید و پروژه‌های بیشتری دریافت کنید. عضویت در شبکه مدیران گلد برای گسترش حرفه و افزایش درآمد.",
        },
        {
          property: "og:url",
          content: "https://darbastan.com/Registration",
        },
        {
          property: "og:image",
          content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://darbastan.com/Registration",
        },
      ],
    });
  }
  if (route.path.toLowerCase() === "/RegistrationEN".toLowerCase()) {
    useHead({
      title: "Scaffolder Registration for Collaboration with Companies",
      meta: [
        {
          name: "description",
          content:
            "Are you a professional scaffolder? Register now to get introduced to companies and gain more projects. Join the Darbastan network to expand your career and increase your income.",
        },
        {
          name: "keywords",
          content:
            "scaffolder registration, scaffolding jobs, work with companies, scaffolder network, Darbastan, scaffolding projects, scaffolder opportunities",
        },
        {
          property: "og:title",
          content: "Scaffolder Registration for Collaboration with Companies",
        },
        {
          property: "og:description",
          content:
            "Are you a professional scaffolder? Register now to get introduced to companies and gain more projects. Join the Darbastan network to expand your career and increase your income.",
        },
        {
          property: "og:url",
          content: "https://darbastan.com/RegistrationEN",
        },
        {
          property: "og:image",
          content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://darbastan.com/RegistrationEN",
        },
      ],
    });
  }
  if (route.path.toLowerCase() === "/RegistrationDE".toLowerCase()) {
    useHead({
    title: 'Gerüstbauer-Registrierung zur Zusammenarbeit mit Unternehmen',
    meta: [
      { 
        name: 'description', 
        content: 'Sind Sie ein professioneller Gerüstbauer? Registrieren Sie sich jetzt, um Unternehmen vorgestellt zu werden und mehr Projekte zu erhalten. Werden Sie Teil des Darbastan-Netzwerks, um Ihre Karriere auszubauen und Ihr Einkommen zu steigern.' 
      },
      { 
        name: 'keywords', 
        content: 'Gerüstbauer-Registrierung, Zusammenarbeit mit Unternehmen, Gerüstbauer-Netzwerk, Gerüstbau-Projekte, Darbastan, Gerüstbau-Jobs, Möglichkeiten für Gerüstbauer' 
      },
      { 
        property: 'og:title', 
        content: 'Gerüstbauer-Registrierung zur Zusammenarbeit mit Unternehmen' 
      },
      { 
        property: 'og:description', 
        content: 'Sind Sie ein professioneller Gerüstbauer? Registrieren Sie sich jetzt, um Unternehmen vorgestellt zu werden und mehr Projekte zu erhalten. Werden Sie Teil des Darbastan-Netzwerks, um Ihre Karriere auszubauen und Ihr Einkommen zu steigern.' 
      },
      { 
        property: 'og:url', 
        content: 'https://darbastan.com/RegistrationDE' 
      },
      { 
        property: 'og:image', 
        content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' 
      },
    ],
    link: [
      { 
        rel: 'canonical', 
        href: 'https://darbastan.com/RegistrationDE' 
      },
    ]
})
  }
});



watch(DropdownsInfo.value.country, () => {
  if (DropdownsInfo.value.country.Selected != null) {
    store.FetchCitiesWorld(DropdownsInfo.value.country.Selected).then(() => {
      DropdownsInfo.value.city.Items = store.CityWorldData.List;
    });
  }
});

watch(UploudFiles.value, () => {
  const UploudFile = UploudFiles.value.find(
    (UploudFile: any) => UploudFile.GUID == null
  );
  if (UploudFile == null) {
    SaveData();
  }
});

const onSubmitForm = async (values: any) => {
  debugger;
  
  SetFilesUploud(values);
  Formvalues = values;
  //IsSaveing.value = true
  if (submitButton.value) {
    submitButton.value!.disabled = true;
  }
  if (UploudFiles.value.length > 0) {
    debugger;
    const fileExtension = values.cv.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["pdf"];
    if (!allowedExtensions.includes(fileExtension)) {
      toast.add({
        severity: "error",
        summary: "خطای نوع فایل",
        detail: "فقط فایل پی دی اف pdf قابل قبول است ",
        life: 8000,
      });
      submitButton.value!.disabled = false;
      return;
    }

    await FilesUploud();
  } else {
    SaveData();
  }

  setTimeout(() => {
    submitButton.value!.disabled = false;
  }, 60000);

  return;
};
async function SaveData() {
  const UploudFilesList = UploudFiles.value.filter(
    (UploudFile: any) => UploudFile.GUID != null && UploudFile.GUID != ""
  );
  UploudFilesList.forEach((item: any) => {
    switch (item.FormFileTypeId) {
      case "cv":
        Formvalues.cv = item.GUID;
        break;
    }
  });
  store.CreateScaffolderResume(Formvalues).then((res) => {
    if (res.isSuccess === true) {
      toast.add({
        severity: "success",
        summary: "مدیران گلد",
        detail: "اطلاعات فردی و حرفه ای شما در مدیران گلد ثبت گردید",
        life: 10000,
      });
    }
  });
}
async function FilesUploud() {
  const UploudFilesList = UploudFiles.value.filter(
    (UploudFile: any) => UploudFile.GUID == null
  );
  if (UploudFilesList.length > 0) {
    UploudFilesList.forEach((item: any) => {
      store.uploadFiles(item.file, "").then((res) => {
        if (res.isSuccess == true) {
          if (res.data.length > 0) {
            item.GUID = res.data[0];
          } else {
            item.GUID = "";
          }
        } else {
          item.GUID = "";
          toast.add({
            severity: "error",
            summary: "خطا در ثبت",
            detail: res.messages[0],
            life: 8000,
          });
          return;
        }
      });
    });
  } else {
    SaveData();
  }
}

const SetFilesUploud = (values: any) => {
  if (values.cv != null && typeof values.cv == "object") {
    UploudFiles.value.push({
      FormFileTypeId: "cv",
      GUID: null,
      file: values.cv,
    });
  }
};
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
  -webkit-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
}

.info__box .items .item {
  height: 346px;
  border-radius: 33px;
  background: #fff;
  -webkit-box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
  padding: 30px 20px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
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
textarea.form-control {
  margin: 10px;
}
</style>
