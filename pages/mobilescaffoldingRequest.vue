<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="d-flex flex-column section-header text-center">
          <h3
            v-if="
              route.path.toLowerCase() ===
              '/mobilescaffoldingRequest'.toLowerCase()
            "
          >
            ثبت سفارش اجاره یا خرید چهارپایه متحرک صنعتی یا طلای ، اجاره در تهران و فروش
            سراسر کشور
          </h3>
          <p v-if="
              route.path.toLowerCase() ===
              '/mobilescaffoldingRequest'.toLowerCase()
            " @click="goToPage">برای مشاهده نمونه کامل چهارپایه ها اینجا رو بزن</p>
          <h3
            v-if="
              route.path.toLowerCase() ===
              '/QuickOrderScaffoldRental'.toLowerCase()
            "
          >
            سفارش سریع اجاره و نصب طلا ، پیچ و رولپلاک و نماشویی
          </h3>
          <h3
            v-if="
              route.path.toLowerCase() === '/MetalPlankScaffold'.toLowerCase()
            "
          >
            سفارش سریع کف پله طلای و زیرپایی 
          </h3>
          <h3
            v-if="route.path.toLowerCase() === '/RequestDarbast'.toLowerCase()"
          >
            ثبت شکایات و سایر درخواست ها
          </h3>
        </div>

        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h3 class="text-center m-3">
                  <Toast />
                </h3>
                <VForm
                  class="form w-100"
                  id="kt_login_signin_form"
                  :validation-schema="MobileScaffoldingRequestModel"
                >
                  <div class="row justify-content-md-center">
                    <div class="Login">
                      <label class="form-label fw-bold text-dark fs-6"
                        >{{
                          MobileScaffoldingRequestModel.fields.name.spec.label
                        }}
                      </label>
                      <select
                        v-if="
                          route.path.toLowerCase() ===
                          '/mobilescaffoldingRequest'.toLowerCase()
                        "
                        v-model="selectedname"
                        class="form-control form-select text-center"
                      >
                        <option value="" disabled selected>
                          انتخاب نوع درخواست
                        </option>
                        <option value="خرید چهارپایه">خرید چهارپایه</option>
                        <option value="اجاره چهارپایه">اجاره چهارپایه</option>
                      </select>

                      <select
                        v-if="
                          route.path.toLowerCase() ===
                          '/QuickOrderScaffoldRental'.toLowerCase()
                        "
                        v-model="selectedname"
                        class="form-control form-select text-center"
                      >
                        <option value="" disabled selected>
                          انتخاب نوع درخواست
                        </option>
                        <option value="اجاره طلا">اجاره طلا</option>
                        <option value="پیچ و رولپلاک و نماشویی">پیچ و رولپلاک و نماشویی</option>
                      </select>

                      <select
                        v-if="
                          route.path.toLowerCase() ===
                          '/MetalPlankScaffold'.toLowerCase()
                        "
                        v-model="selectedname"
                        class="form-control form-select text-center"
                      >
                        <option value="" disabled selected>
                          انتخاب کف پله طلای یا زیرپایی 
                        </option>
                        <option value="کف پله طلای">کف پله طلای</option>
                        <option value="زیرپایی ">زیرپایی </option>
                      </select>

                      <select
                        v-if="
                          route.path.toLowerCase() ===
                          '/RequestDarbast'.toLowerCase()
                        "
                        v-model="selectedname"
                        class="form-control form-select text-center"
                      >
                        <option value="" disabled selected>
                          انتخاب نوع درخواست
                        </option>
                        <option value="شکایات">شکایات</option>
                        <option value="رپورتاژ آگهی">رپورتاژ آگهی</option>
                        <option value="سایر درخواست ها">سایر درخواست ها</option>
                      </select>

                      <label class="form-label fw-bold text-dark fs-6"
                        >{{
                          MobileScaffoldingRequestModel.fields.ostanId.spec
                            .label
                        }}
                      </label>
                      <select
                        v-model="selectedostan"
                        @change="onChangeoslocation"
                        class="form-control form-select text-center"
                      >
                        <option
                          v-for="ostan in OstanData"
                          :key="ostan.id"
                          :value="ostan.id"
                        >
                          {{ ostan.name }}
                        </option>
                      </select>
                      <label class="form-label fw-bold text-dark fs-6"
                        >{{
                          MobileScaffoldingRequestModel.fields.cityId.spec.label
                        }}
                      </label>
                      <select
                        v-model="selectedcity"
                        class="form-control form-select text-center"
                      >
                        <option
                          v-for="city in CityData"
                          :key="city.id"
                          :value="city.id"
                        >
                          {{ city.name }}
                        </option>
                      </select>
                      <label class="form-label fw-bold text-dark fs-6"
                        >{{
                          MobileScaffoldingRequestModel.fields.phoneNumber.spec
                            .label
                        }}
                      </label>
                      <input
                        v-model="phonenumbertext"
                        id="phonenumber"
                        type="text"
                        placeholder="تلفن همراه"
                        class="form-control text-center"
                        required
                      />
                      <label class="form-label fw-bold text-dark fs-6"
                        >{{
                          MobileScaffoldingRequestModel.fields.flname.spec.label
                        }}
                      </label>
                      <input
                        v-model="flname"
                        id="flname"
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        class="form-control text-center"
                        required
                      />
                      <label class="form-label fw-bold text-dark fs-6"
                        >{{
                          MobileScaffoldingRequestModel.fields.summery.spec
                            .label
                        }}
                      </label>
                      <textarea
                        v-if="
                          route.path.toLowerCase() ===
                          '/mobilescaffoldingRequest'.toLowerCase()
                        "
                        v-model="summery"
                        placeholder="ابعاد چهارپایه و توضیحات"
                        class="form-control text-center"
                      >
                      </textarea>
                      <textarea
                        v-if="
                          route.path.toLowerCase() ===
                          '/QuickOrderScaffoldRental'.toLowerCase()
                        "
                        v-model="summery"
                        placeholder="ابعاد پروژه شامل طول،عرض ، ارتفاع و توضیحات"
                        class="form-control text-center"
                      >
                      </textarea>

                      <textarea
                        v-if="
                          route.path.toLowerCase() ===
                          '/MetalPlankScaffold'.toLowerCase()
                        "
                        v-model="summery"
                        placeholder="لطفا تعداد و توضیحات لازم را وارد کنید"
                        class="form-control text-center"
                      >
                      </textarea>

                      <textarea
                        v-if="
                          route.path.toLowerCase() ===
                          '/RequestDarbast'.toLowerCase()
                        "
                        v-model="summery"
                        placeholder="لطفاً توضیحات را وارد کنید"
                        class="form-control text-center"
                      >
                      </textarea>

                      <div class="text-center mt-4">
                        <button
                          :disabled="isSubmitting"
                          type="submit"
                          class="btn btn-primary btnLogin"
                          @click="onSubmitForm"
                        >
                          {{ isSubmitting ? "در حال ارسال..." : "ثبت سفارش" }}
                        </button>
                      </div>
                    </div>
                  </div>
                </VForm>
                <div
                  v-if="ResMessage != ''"
                  class="alert alert-primary text-center m-2"
                  role="alert"
                >
                  {{ ResMessage }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 text-center"
            v-if="route.path.toLowerCase() !== '/RequestDarbast'.toLowerCase()"
          >
            <div
              v-if="
                route.path.toLowerCase() === '/MetalPlankScaffold'.toLowerCase()
              "
            >
              <router-link
                to="/Blog/3171/کف-پله-طلای-و-زیرپایی--ایمنی-دوام-و-کیفیت"
              >
                <NuxtImg
                  src="https://darbastan.storage.c2.liara.space/Images/sakoyekar1.webp"
                  sizes="sm:100vw md:100vw lg:100vw"
                  loading="lazy"
                  alt="کف پله طلای"
                />
              </router-link>
              <br />
              <router-link
                to="/Blog/3171/کف-پله-طلای-و-زیرپایی--ایمنی-دوام-و-کیفیت"
              >
                <NuxtImg
                  src="https://darbastan.storage.c2.liara.space/Images/zirpayiefelezi.webp"
                  sizes="sm:100vw md:100vw lg:100vw"
                  loading="lazy"
                  class="img-responsive"
                  alt="زیرپایی "
                />
              </router-link>
            </div>
            <NuxtImg
              src="/img/hico11.webp"
              loading="lazy"
              alt="چهارپایه های متحرک صنعتی"
              class="responsive-image"
              v-if="
                route.path.toLowerCase() ===
                '/mobilescaffoldingRequest'.toLowerCase()
              "
            />
            <NuxtImg
              src="https://darbastan.storage.c2.liara.space/Images/22.jpg"
              sizes="sm:100vw md:100vw lg:100vw"
              loading="lazy"
              alt="نصب و اجاره طلا"
              v-if="
                route.path.toLowerCase() ===
                '/QuickOrderScaffoldRental'.toLowerCase()
              "
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../containers/Layout.vue";
import { useDataStore } from "../stores/data";
import { onBeforeMount, onServerPrefetch, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import { useRoute } from "vue-router";

//let Formvalues: any = null;
let visible = ref(false);
let isSubmitting = ref(false);
const route = useRoute();
const router = useRouter()

const OstanData = ref<any | object>(null);
const CityData = ref<any | object>(null);

let selectedostan: any = null;
let selectedcity: any = null;
let selectedname: any = null;
let flname: any = null;
let phonenumbertext: any = null;
let summery: any = null;
const toast = useToast();

const MobileScaffoldingRequestModel = Yup.object().shape({
  name: Yup.string().label("درخواست").required("عنوان درخواست الزامیست"),
  ostanId: Yup.number().label("استان"),
  cityId: Yup.number().label("شهر"),
  flname: Yup.string()
    .label("نام و نام خانوادگی	")
    .required("نام و نام خانوادگی الزامیست"),
  phoneNumber: Yup.string().label("تلفن همراه").required("تلفن همراه الزامیست"),
  summery: Yup.string().label("متن پیام").required("متن پیام الزامیست"),
});
const store = useDataStore();
const data = ref({ typeScaffold: 1, length: null, width: null, height: null });
const ResMessage = ref("");

const onSubmitForm = async () => {
  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
  }, 9000);

  const dataToSend = {
    name: selectedname,
    ostanId: selectedostan,
    cityId: selectedcity,
    phonenumber: phonenumbertext,
    flname: flname,
    summery: summery,
  };

  if (
    dataToSend.flname === null ||
    dataToSend.phonenumber === null ||
    dataToSend.name === null ||
    dataToSend.ostanId === null ||
    dataToSend.cityId === null
  ) {
    toast.add({
      severity: "error",
      summary: "خطا در ثبت سفارش",
      detail: "تمامی اطلاعات درخواستی باید پر شود",
      life: 5000,
    });
    return;
  }

  store.CreateMobileScaffolding(dataToSend).then((res) => {
    if (res.isSuccess === true) {
      visible.value = true;
      toast.add({
        severity: "success",
        summary: "مدیران گلد",
        detail:
          "سفارش شما با موفقیت برای کارشناس چهارپایه های مدولار ارسال گردید به زودی با شما تماس می گیریم",
        life: 8000,
      });
      setTimeout(() => {
        visible.value = false;
      }, 3500);
    } else {
    }
  });
};

const onChangeoslocation = async () => {
  store.FetchCity(selectedostan).then(() => {
    CityData.value = store.CityData.List;
  });
};

if (OstanData.value === null) {
  store.FetchOstan().then(() => {
    OstanData.value = store.OstanData.List;
  });

}

const goToPage = () => {
  router.push({ name: 'gallery' }) // نام روت مقصد را به اینجا بدهید
}

await useAsyncData("requestsdarbastan", async () => {

  store.FetchOstan().then(() => {
    OstanData.value = store.OstanData.List;
  });

  if (route.path.toLowerCase() === "/mobilescaffoldingRequest".toLowerCase()) {
    useHead({
      title: "ثبت سفارش چهارپایه طلای یا متحرک",
      meta: [
        {
          name: "description",
          content:
            "برای درخواست چهارپایه طلای یا متحرک، اطلاعات مورد نظر خود را وارد کرده و درخواست خود را ثبت کنید. این صفحه برای ارائه خدمات چهارپایه طلای یا متحرک به شما با قیمت مناسب و شرایط مناسب طراحی شده است.",
        },
        {
          name: "keywords",
          content:
            "درخواست چهارپایه طلای یا متحرک،چهارپایه طلای یا متحرک، خدمات طلا، طلا مدیران گلد",
        },
        {
          property: "og:title",
          content: "ثبت سفارش چهارپایه طلای یا متحرک",
        },
        {
          property: "og:description",
          content:
            "برای درخواست طلا موبایل، اطلاعات مورد نظر خود را وارد کرده و درخواست خود را ثبت کنید. این صفحه برای ارائه خدمات طلا موبایل به شما با قیمت مناسب و شرایط مناسب طراحی شده است.",
        },
        {
          property: "og:url",
          content: "https://darbastan.com/mobilescaffoldingRequest",
        },
        {
          property: "og:image",
          content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://darbastan.com/mobilescaffoldingRequest",
        },
      ],
    });
  }

  if (route.path.toLowerCase() === "/QuickOrderScaffoldRental".toLowerCase()) {
    useHead({
      title: "درخواست سریع اجاره و نصب طلا",
      meta: [
        {
          name: "description",
          content:
            "برای درخواست سریع اجاره طلا پیچ و رولپلاک و نماشویی، اطلاعات خود را وارد کرده و سفارش خود را ثبت کنید. این صفحه به شما کمک می‌کند تا به سرعت طلا مورد نیاز خود را اجاره کنید و از خدمات سریع و قابل اعتماد طلا مدیران گلد بهره‌مند شوید.",
        },
        {
          name: "keywords",
          content:
            "پیچ و رولپلاک و نماشویی،درخواست اجاره طلا، اجاره طلا، خدمات طلا، طلا مدیران گلد، اجاره سریع طلا",
        },
        { property: "og:title", content: "پیچ و رولپلاک و نماشویی درخواست سریع اجاره و نصب طلا" },
        {
          property: "og:description",
          content:
            "برای درخواست سریع اجاره طلا پیچ و رولپلاک و نماشویی، اطلاعات خود را وارد کرده و سفارش خود را ثبت کنید. این صفحه به شما کمک می‌کند تا به سرعت طلا مورد نیاز خود را اجاره کنید و از خدمات سریع و قابل اعتماد طلا مدیران گلد بهره‌مند شوید.",
        },
        {
          property: "og:url",
          content: "https://darbastan.com/QuickOrderScaffoldRental",
        },
        {
          property: "og:image",
          content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://darbastan.com/QuickOrderScaffoldRental",
        },
      ],
    });
  }

  if (route.path.toLowerCase() === "/MetalPlankScaffold".toLowerCase()) {
    useHead({
      title: "ثبت سفارش کف پله طلای یا زیرپایی ",
      meta: [
        {
          name: "description",
          content:
            "برای مشاهده خدمات طلا پله ، انواع پله‌های ، و مشخصات فنی طلا پله  طلا مدیران گلد، به این صفحه مراجعه کنید. دریافت خدمات طلا پله  با کیفیت بالا و مقرون به صرفه.",
        },
        {
          name: "keywords",
          content:
            "طلا پله ، پله ، خدمات طلا، طلا مدیران گلد، scaffolding, metal plank scaffolding",
        },
        {
          property: "og:title",
          content: "ثبت سفارش کف پله طلای یا زیرپایی ",
        },
        {
          property: "og:description",
          content:
            "برای مشاهده خدمات طلا پله ، انواع پله‌های ، و مشخصات فنی طلا پله  طلا مدیران گلد، به این صفحه مراجعه کنید. دریافت خدمات طلا پله  با کیفیت بالا و مقرون به صرفه.",
        },
        {
          property: "og:url",
          content: "https://darbastan.com/MetalPlankScaffold",
        },
        {
          property: "og:image",
          content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
        },
      ],
      link: [
        { rel: "canonical", href: "https://darbastan.com/MetalPlankScaffold" },
      ],
    });
  }
  if (route.path.toLowerCase() === "/RequestDarbast".toLowerCase()) {
    useHead({
      title: "ثبت شکایات و سایر درخواست ها",
      meta: [
        {
          name: "description",
          content:
            "برای ثبت شکایات و سایر درخواست ها، اطلاعات خود را وارد کرده و درخواست خود را ثبت کنید. این صفحه به شما کمک می‌کند تا به راحتی ثبت شکایات و سایر درخواست ها مورد نیاز خود را درخواست کنید و از خدمات سریع و باکیفیت طلا مدیران گلد بهره‌مند شوید.",
        },
        { name: "keywords", content: "شکایات،درخواست ها،رپورتاژ آگهی" },
        { property: "og:title", content: "ثبت شکایات و سایر درخواست ها" },
        {
          property: "og:description",
          content:
            "برای ثبت شکایات و سایر درخواست ها، اطلاعات خود را وارد کرده و درخواست خود را ثبت کنید. این صفحه به شما کمک می‌کند تا به راحتی ثبت شکایات و سایر درخواست ها مورد نیاز خود را درخواست کنید و از خدمات سریع و باکیفیت طلا مدیران گلد بهره‌مند شوید.",
        },
        { property: "og:url", content: "https://darbastan.com/RequestDarbast" },
        {
          property: "og:image",
          content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
        },
      ],
      link: [
        { rel: "canonical", href: "https://darbastan.com/RequestDarbast" },
      ],
    });
  }
  if (route.path.toLowerCase() === "/mobilescaffoldingRequest".toLowerCase()) {
    document.title = "ثبت سفارش چهارپایه طلای";
  }

  if (route.path.toLowerCase() === "/QuickOrderScaffoldRental".toLowerCase()) {
    document.title = "ثبت سفارش اجاره و نصب طلا";
  }

  if (route.path.toLowerCase() === "/MetalPlankScaffold".toLowerCase()) {
    document.title = "ثبت سفارش کف پله طلای یا زیرپایی ";
  }

  if (route.path.toLowerCase() === "/RequestDarbast".toLowerCase()) {
    document.title = "ثبت شکایات و سایر درخواست ها";
  }


});



</script>

<style>
.card {
  box-shadow: inset 0px 0px 10px 2px #fdbe33;
}

.Login {
  padding-right: 20px;
  padding-left: 40px;
}

.card #UserName,
#Password {
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
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
