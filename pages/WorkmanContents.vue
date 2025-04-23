<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";
import { onBeforeMount, ref, onServerPrefetch } from "vue";

const store = useDataStore();

onServerPrefetch(async () => {
  store.SetMetaTags(
    "استخدام طلا بندان",
    "استخدام طلا بندان",
    "استخدام،طلا بند ",
    "استخدام طلا بندان",
    "استخدام طلا بندان",
    "https://darbastan.com/WorkmanContents",
    "https://darbastan.storage.c2.liara.space/Images/logo.png",
    "https://darbastan.com/WorkmanContents"
  );
});
onBeforeMount(async () => {
  document.title = "کارگر،استادکار،استخدام،کارفرما،پیمانکار،طلا بند";
});
useHead({
  title: 'طلا بندان مدیران گلد',
  meta: [
    { name: 'description', content: 'اگر شما یک طلا‌ بند حرفه‌ای هستید، در مدیران گلد می‌توانید به راحتی به پروژه‌های مختلف دست پیدا کنید و با شرکت‌ها همکاری کنید. به شبکه مدیران گلد بپیوندید و شغلتان را گسترش دهید.' },
    { name: 'keywords', content: 'طلا بندان، طلا‌ بند، پروژه طلا، مدیران گلد، همکاری با شرکت‌ها، فرصت‌های شغلی طلا' },
    { property: 'og:title', content: 'طلا بندان مدیران گلد' },
    { property: 'og:description', content: 'اگر شما یک طلا ‌بند حرفه‌ای هستید، به مدیران گلد بپیوندید و با شرکت‌ها همکاری کنید. فرصت‌های شغلی جدید و پروژه‌های طلا را در اینجا پیدا کنید.' },
    { property: 'og:url', content: 'https://darbastan.com/WorkmanContents' },
    { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://darbastan.com/WorkmanContents' },
  ]
});
</script>
<template>
  <Layout
    :ShowPageHeader="true"
    :PageTitle="'صفحه ویژه استادکاران و طلا بندان'"
  >
    <div class="service">
      <div class="container">
        <div class="row">
       
    <h5>طلا بندی از مشاغل سخت دنیا می باشد بنابراین باید آموزش های ضروری قبل از شروع این شغل طی شود خصوصاً ایمنی طلا بندان که اهمیت ویژه ای دارد.
    </h5>
        
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="service-item">
              <div class="service-img">
                <img src="/public/images/service-4.jpg" alt="Image" />
                <div class="service-overlay">
                    <router-link class="nav-item nav-link" :to="{ name: 'Registration' }"> <p>
                  قبل از ثبت اطلاعات حتماً پاسخ سوالات احتمالی شما در انتهای همین صفحه مطالعه کنید این به شما کمک می کند تا اطلاعات دقیق و درستی برای ما ارسال کنید.
                  </p></router-link>
                </div>
              </div>
              <div class="service-text">
                <h3>
                    <router-link class="nav-item nav-link" :to="{ name: 'Registration' }">ثبت اطلاعات فردی و شغلی</router-link>
                </h3>
                <router-link class="btn" :to="{ name: 'Registration' }">+</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item">
              <div class="service-img">
                <img src="/public/images/service-5.jpg" alt="Image" />
                <div class="service-overlay">
                  <router-link
                    :to="{
                      name: 'tag',query: {
                        tag: 'طلا-بند',
                          },
                    }"
                    ><p>
                     طلا بندان می توانند اطلاعات زیادی در مورد حرفه خود کسب کنند
                  </p>
                  </router-link
                  >
                </div>
              </div>
              <div class="service-text">
                <router-link
                    :to="{
                      name: 'tag',query: {
                        tag: 'طلا-بند',
                          },
                    }"
                    ><h3>مقالات مربوط به طلا بندان</h3></router-link
                  >
                
                  <router-link
                    class="btn"
                    :to="{
                      name: 'tag',query: {
                        tag: 'طلا-بند',
                          },
                    }"
                    >+</router-link
                  >
                  
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="service-item">
              <div class="service-img">
                <img src="/public/images/service-6.jpg" alt="Image" />
                <div class="service-overlay">
                  <p>
                   بازارچه مدیران گلد جایی برای معرفی محصولاتی از قبیل لوله طلای ، ملزومات طلا ، کمربند ایمنی ، آچار طلای و سایر محصولات تولیدکنندگان این صنعت است که به زودی راه اندازی می شود
                  </p>
                </div>
              </div>
              <div class="service-text">
                <h3>بازارچه مدیران گلد</h3>
                <a
                  class="btn"
                  href="/public/images/service-6.jpg"
                  data-lightbox="service"
                  >+</a
                >
              </div>
            </div>
          </div>

          <!-- FAQs Start -->
          <div class="faqs">
            <div class="container">
              <div class="section-header text-center">
                <p>پاسخ به سوالات</p>
                <h2>شما</h2>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div id="accordion-1">
                    <div class="card wow fadeInLeft" data-wow-delay="0.1s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseOne"
                        >
                          با ثبت درخواست اطلاعات فردی و حرفه ای استخدام می شویم
                          ؟
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          خیر ، مدیران گلد هیچ گونه تضمینی در خصوص استخدام شما نمی
                          دهد اما با توجه به درخواست پیمانکاران یا شرکت ها رزومه
                          شما را به آنها معرفی خواهد کرد
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.2s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                        >
                          پر کردن دقیق اطلاعات مهم است ؟
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          بله ، اولویت همواره با کسانی است که اطلاعات دقیق تری
                          پر کرده اند
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.3s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                        >
                          بارگذاری مدارک به چه صورت است ؟
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          مدارک شما باید فرمت پی دی اف باشد اطلاعاتی که در این
                          فایل وجود دارد شامل عکس پرسنلی ، اطلاعات فردی ، سوابق
                          کاری ، و تصویر گواهینامه های طلا بند باشد
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.4s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                        >
                          آیا مدیران گلد در قبال آگهی هایی که در سایت یا شبکه های
                          اجتماعی مدیران گلد منتشر می کند مسئولیتی دارد ؟
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          خیر ، کارگر یا استادکار گرامی در صورت مشاهده اطلاعیه
                          استخدام از طریق سایت یا شبکه های اجتماعی مدیران گلد حتما
                          قبل از هرگونه قراردادی از معتبر بودن شرکتی که می
                          خواهید در آن استخدام شوید اطلاعات کسب کنید مدیران گلد
                          هیچگونه مسئولیتی در این خصوص نمی پذیرد
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInLeft" data-wow-delay="0.5s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseFive"
                        >
                          پیمانکار طلا یا شرکت درخواست کننده نیرو در قبال
                          نیروی معرفی شده چه وظیفه ای دارد ؟
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-parent="#accordion-1"
                      >
                        <div class="card-body">
                          پیمانکار محترم قبل از توافق با استادکار یا شاگرد حتماً
                          سابقه کار و تخصص را صحت سنجی کنید
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div id="accordion-2">
                    <div class="card wow fadeInRight" data-wow-delay="0.1s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseSix"
                        >
                          برای استخدام شدنم در شرکتها باید چکار کنم ؟
                        </a>
                      </div>
                      <div
                        id="collapseSix"
                        class="collapse"
                        data-parent="#accordion-2"
                      >
                        <div class="card-body">
                          شما باید ابتدا اطلاعات فردی و حرفه ای خود را برای ما
                          بفرستید سپس پس از تایید در صورت درخواست پیمانکاران یا
                          شرکتها در اختیار آنها قرار داده خواهد شد
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInRight" data-wow-delay="0.2s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseSeven"
                        >
                          آیا اطلاعات من در اختیار عموم قرار می گیرد ؟
                        </a>
                      </div>
                      <div
                        id="collapseSeven"
                        class="collapse"
                        data-parent="#accordion-2"
                      >
                        <div class="card-body">
                          شما پس از ثبت اطلاعات خود فقط می پذیرید که اطلاعات شما
                          در اختیار پیمانکاران یا شرکتها قرار گیرد.
                        </div>
                      </div>
                    </div>
                    <div class="card wow fadeInRight" data-wow-delay="0.3s">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseEight"
                        >
                          آیا ثبت اطلاعات فردی و حرفه ای برای متخصصین صنعت
                          طلا رایگان است ؟
                        </a>
                      </div>
                      <div
                        id="collapseEight"
                        class="collapse"
                        data-parent="#accordion-2"
                      >
                        <div class="card-body">
                          بله ، ثبت اطلاعات برای متخصصین صنعت طلا رایگان می
                          باشد.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- FAQs End -->
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped></style>
