<template>
  <Layout>
    <div class="service">
      <div class="container">
        <div class="section-header text-center">
          <h3>قیمت آنلاین طلا</h3>
        </div>
        <div class="row">
          <div class="col-md-8">
            <h4>
              تخمین آنلاین قیمت خدمات طلا در تهران
              {{ new Date().toLocaleDateString("fa-IR", { year: "numeric" }) }}
            </h4>
            <h5>محاسبه قیمت ها برای یک ماه می باشد</h5>
            <p>
              طلا های نما معمولاً به صورت مترمربع محاسبه می شوند ولی در برخی
              نماها که برآمدگی دارد از مترمکعب استفاده می شود. کفراژ،طلا مسقف
              و زیر بتن نیز مترمکعب می باشد.
            </p>
            <router-link
              class="btn btn-primary"
              :to="{ name: 'QuickOrderScaffoldRental' }"
              >مشاوره و سفارش سریع</router-link
            >
            <router-link
              class="btn btn-primary"
              :to="{
                name: 'Blog',
                params: {
                  pageId: 183,
                  name: 'قیمت-نصب-و-اجاره-طلا--اعم-از-نما-،-بتن-ریزی-،-آسانسور،طاق-نصرت-،-بنری-،-پایه-متحرک-و-غیره',
                },
              }"
              >لیست کامل قیمت ها</router-link
            >
            <div class="card mt-3">
              <div class="card-body">
                <div class="form">
                  <div class="d-flex flex-wrap justify-content-center m-2">
                    <div class="form-check m-1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        بر اساس متر مکعب
                      </label>
                      <input
                        v-model="data.typeScaffold"
                        class="form-check-input"
                        type="radio"
                        name="typeScaffold"
                        id="flexRadioDefault1"
                        value="1"
                      />
                    </div>
                    <div class="form-check m-1">
                      <label class="form-check-label" for="flexRadioDefault2">
                        بر اساس کفراژ
                      </label>
                      <input
                        v-model="data.typeScaffold"
                        class="form-check-input"
                        type="radio"
                        name="typeScaffold"
                        id="flexRadioDefault2"
                        value="2"
                      />
                    </div>
                    <div class="form-check m-1">
                      <label class="form-check-label" for="flexRadioDefault2">
                        بر اساس طلا مسقف
                      </label>
                      <input
                        v-model="data.typeScaffold"
                        class="form-check-input"
                        type="radio"
                        name="typeScaffold"
                        id="flexRadioDefault2"
                        value="3"
                      />
                    </div>
                    <div class="form-check m-1">
                      <label class="form-check-label" for="flexRadioDefault2">
                        براساس زیر بتن
                      </label>
                      <input
                        v-model="data.typeScaffold"
                        class="form-check-input"
                        type="radio"
                        name="typeScaffold"
                        id="flexRadioDefault2"
                        value="4"
                      />
                    </div>
                  </div>
                  <div class="row justify-content-md-center">
                    <div class="col-md-6">
                      <input
                        v-model="data.length"
                        id="kafazht"
                        type="number"
                        placeholder="طول"
                        class="form-control text-center mt-3"
                      />
                      <input
                        v-model="data.width"
                        id="kafazha"
                        type="number"
                        placeholder="عرض"
                        class="form-control text-center mt-3"
                      />
                      <input
                        v-model="data.height"
                        id="kafazhe"
                        type="number"
                        placeholder="ارتفاع"
                        class="form-control text-center mt-3"
                      />
                      <div class="text-center m-3">
                        <button
                          type="submit"
                          class="btn btn-primary"
                          id="btnPost2"
                          @click="calc"
                        >
                          محاسبه
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
          <div class="col-md-4">
            <NuxtImg
              src="https://darbastan.storage.c2.liara.space/Images/e80e7a98-1d8b-4382-bd30-057a80fbc1a1.webp"
              sizes="sm:100vw md:50vw lg:100vw"
              width="500"
              height="300"
              class="img-fluid mx-auto d-block"
              loading="lazy"
              alt="مترمربع"
            /><br />
            <NuxtImg
              src="https://darbastan.storage.c2.liara.space/Images/22.jpg"
              sizes="sm:100vw md:50vw lg:100vw"
              loading="lazy"
              width="500"
              height="300"
              class="img-fluid mx-auto d-block"
              alt="متر مکعب"
            />
          </div>

          <div class="advertisements mt-5">
            <div class="container">
              <div class="section-header text-center">
                <h3>پیشنهادات ویژه</h3>
              </div>
              <div class="row justify-content-center">
                <!-- تبلیغ 1 -->
                <div class="col-md-3 col-sm-6">
                  <div class="ad-card">
                    <router-link to="/MetalPlankScaffold" class="ad-link">
                      <NuxtImg
                        src="../public/img/post-5.jpg"
                        alt="تبلیغ 1"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <h4>زیرپایی </h4>
                      <p>مناسب برای انواع طلا</p>
                    </router-link>
                  </div>
                </div>
                <!-- تبلیغ 2 -->
                <div class="col-md-3 col-sm-6">
                  <div class="ad-card">
                    <router-link to="/MetalPlankScaffold" class="ad-link">
                      <NuxtImg
                        src="../public/img/post-4.jpg"
                        alt="تبلیغ 2"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <h4>کف پله طلای</h4>
                      <p>کف پله طلای مناسب برای پروژه های ساختمانی</p>
                    </router-link>
                  </div>
                </div>
                <!-- تبلیغ 3 -->
                <div class="col-md-3 col-sm-6">
                  <div class="ad-card">
                    <router-link to="/mobilescaffoldingRequest" class="ad-link">
                      <NuxtImg
                        src="../public/img/post-3.jpg"
                        alt="تبلیغ 3"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <h4>چهارپایه متحرک یا طلای</h4>
                      <p>اجاره یا فروش چهارپایه طلای یا متحرک</p>
                    </router-link>
                  </div>
                </div>
                <!-- تبلیغ 4 -->
                <div class="col-md-3 col-sm-6">
                  <div class="ad-card">
                    <router-link to="/QuickOrderScaffoldRental" class="ad-link">
                      <NuxtImg
                        src="../public/img/post-2.jpg"
                        alt="تبلیغ 4"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <h4>خدمات سریع طلا</h4>
                      <p>ارسال و نصب سریع طلا در تهران</p>
                    </router-link>
                  </div>
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
import { ref } from "vue";

const store = useDataStore();
const data = ref({ typeScaffold: 1, length: null, width: null, height: null });
const ResMessage = ref("");
const currentYear = new Date().toLocaleDateString("fa-IR", {
  year: "numeric",
});

useHead({
  title: `${currentYear} تخمین آنلاین قیمت اجاره و نصب طلا `,
  meta: [
    {
      name: "description",
      content:
        "برای تخمین آنلاین قیمت اجاره و نصب طلا ، از این صفحه استفاده کنید. کافیست مشخصات پروژه خود را وارد کنید تا قیمت دقیق و مناسب برای اجاره و نصب طلا  را دریافت کنید.",
    },
    {
      name: "keywords",
      content:
        "محاسبه قیمت طلا،تخمین قیمت طلا، اجاره طلا ، نصب طلا ، قیمت طلا،طلا مدیران گلد",
    },
    {
      property: "og:title",
      content: `${currentYear} تخمین آنلاین قیمت اجاره و نصب طلا `,
    },
    {
      property: "og:description",
      content:
        "برای تخمین آنلاین قیمت اجاره و نصب طلا ، از این صفحه استفاده کنید. کافیست مشخصات پروژه خود را وارد کنید تا قیمت دقیق و مناسب برای اجاره و نصب طلا  را دریافت کنید.",
    },
    {
      property: "og:url",
      content: "https://darbastan.com/OnlineScaffoldPrice",
    },
    {
      property: "og:image",
      content: "https://darbastan.storage.c2.liara.space/Images/logo.png",
    },
  ],
  link: [
    { rel: "canonical", href: "https://darbastan.com/OnlineScaffoldPrice" },
  ],
});

const calc = () => {
  debugger;
  ResMessage.value = "";
  store.GetScaffoldPriceAll(data.value).then((res) => {
    ResMessage.value = res.messages[0];
  });
  setTimeout(() => {
    ResMessage.value = "";
  }, 10000);
};
</script>

<style scoped>
/* استایل کلی برای رادیو باتن‌ها و برچسب‌ها */
.form-check {
  display: block; /* رادیو باتن‌ها و برچسب‌ها در خط‌های جداگانه قرار می‌گیرند */
  margin-bottom: 15px; /* فاصله بیشتر بین رادیو باتن‌ها */
  text-align: right; /* تراز به راست برای نمایش بهتر در زبان فارسی */
}

.form-check .form-check-input {
  width: 22px; /* اندازه مناسب برای رادیو باتن‌ها */
  height: 22px;
  border-radius: 50%;
  border: 2px solid #007bff;
  margin-right: 12px; /* فاصله بیشتر بین رادیو باتن و متن */
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.form-check .form-check-input:checked {
  background-color: #007bff;
  border-color: #0056b3;
}

.form-check .form-check-label {
  font-size: 16px; /* اندازه فونت برای برچسب‌ها */
  color: #333;
  word-wrap: break-word;
  padding: 5px;
}

/* تنظیمات برای صفحات موبایل */
@media (max-width: 768px) {
  /* تنظیم رادیو باتن‌ها در حالت موبایل */
  .d-flex {
    flex-wrap: wrap; /* امکان بسته‌بندی آیتم‌ها به خطوط مختلف */
    justify-content: flex-start; /* تراز رادیو باتن‌ها به سمت چپ */
  }

  /* بهبود استایل برای رادیو باتن‌ها */
  .form-check {
    display: block; /* تغییر به block برای جلوگیری از بهم‌ریختگی */
    width: 100%; /* عرض کامل برای هر رادیو باتن */
    margin-bottom: 10px; /* فاصله کمتر بین رادیو باتن‌ها */
    text-align: right; /* تراز به راست */
  }

  .form-check .form-check-input {
    width: 25px; /* اندازه مناسب برای موبایل */
    height: 25px;
    margin-right: 15px; /* فاصله بیشتر برای موبایل‌ها */
  }

  .form-check .form-check-label {
    font-size: 14px; /* کاهش اندازه فونت برای موبایل */
  }

  /* تغییرات برای فرم‌ها */
  .form-control {
    font-size: 14px;
    padding: 10px; /* تنظیم فضای مناسب برای ورودی‌ها */
  }

  /* تنظیم فاصله برای دکمه‌ها */
  .btn {
    font-size: 14px;
    padding: 10px 16px; /* اندازه دکمه‌ها در موبایل */
  }

  /* تنظیم تصاویر تبلیغاتی */
  .ad-card img {
    width: 100%;
    height: auto; /* مناسب‌سازی تصاویر */
  }
}

/* استایل برای صفحات موبایل کوچک */
@media (max-width: 576px) {
  .form-check {
    width: 100%;
  }

  .form-check .form-check-input {
    width: 30px;
    height: 30px;
    margin-right: 18px; /* فاصله بیشتر برای موبایل‌های خیلی کوچک */
  }

  .form-check .form-check-label {
    font-size: 13px;
  }

  /* فاصله و اندازه دکمه‌ها */
  .btn {
    font-size: 13px;
    padding: 8px 12px;
  }

  /* اندازه فرم‌ها در صفحات کوچک */
  .form-control {
    font-size: 13px;
    padding: 8px;
  }
}
</style>
