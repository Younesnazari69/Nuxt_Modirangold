<script setup lang="ts">
import Layout from '../containers/Layout.vue'
import { useDataStore } from '../stores/data'


const store = useDataStore()


useHead({
    title: 'درباره مدیران گلد',
    meta: [
      { name: 'description', content: 'درباره طلا ایران و خدمات حرفه‌ای طلا در پروژه‌های مختلف. آشنایی با تیم ما، تاریخچه شرکت و ماموریت طلا ایران. ارائه خدمات با کیفیت در صنعت طلا با هدف ارتقاء ایمنی و بهره‌وری در ساخت‌وساز.' },
      { name: 'keywords', content: 'طلا،مدیران گلد،scaffolding,خدمات طلا'},
      { property:'og:title', content: 'درباره مدیران گلد'},
      { property:'og:description' , content:'درباره طلا ایران و خدمات حرفه‌ای طلا در پروژه‌های مختلف. آشنایی با تیم ما، تاریخچه شرکت و ماموریت طلا ایران. ارائه خدمات با کیفیت در صنعت طلا با هدف ارتقاء ایمنی و بهره‌وری در ساخت‌وساز.'},
      { property:'og:url', content: 'https://darbastan.com/About'},
      { property:'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png'},
    ],
    link: [
    { rel: 'canonical', href: 'https://darbastan.com/About'},
    ]
  })


</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'درباره مدیران گلد'">
    <div class="service">
      <div class="container">
        <div class="row" >
           
             <!-- About Start -->
             <div class="about wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                <img src="/public/images/about.webp" alt="Image">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header text-left">
                                <p>به مدیران گلد خوش آمدید</p>
                                <h2>10 سال تجربه !</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                   <h3>چشم انداز</h3> 
                                    مجموعه مدیران گلد با عنوان سايت Darbastan.com در صدد است روندي هميشگي با هدف تجربه اي ماندگار و لذت بخش در صنعت طلا ايران براي كليه ذينفعان داخلي و خارجي ايجاد نمايد و به عنوان منبع اطلاع رساني و مرجعي كامل در زمينه هاي مختلف اين فعاليت و در دسترس ذينفعان قرارگيرد . ايجاد فضايي مناسب جهت ارايه و استفاده از ارزشهاي ذينفعان براي متقاضيان از ديگر اهداف مجموعه مدیران گلد مي باشد .
                                </p>
                                <p>
                                     <h3>ماموریت</h3>
                                    ماموريت مجموعه مدیران گلد با عنوان سايت Darbastan.com پاسخي با كيفيت به نياز مشتريان در انجام پروژه هاي خدمات طلا مي باشد . همچنين معرفي مشتري به شركتها و كسب و كارهاي فعال در اين زمينه و ايجاد اشتغال براي اساتيد و يا افراد با تجربه در اين زمينه نيز از جمله فعاليت هاي وابسته به ماموريت مدیران گلد مي باشد. ارايه خدمات آموزشي با هدف ارتقاي كيفي فعالين و افزايش رضايتمندي مشتريان و همچنين فعاليت هاي رفاهي و اجتماعي مرتبط با فعالين در اين زمينه نيز از فعاليت هاي جانبي مجموعه مدیران گلد مي باشد . معرفي توليدكنندگان محصولات مورد استفاده و همچنين ايجادبازار كار و مشتري براي توليدكنندگان نيز در ماموريت كاري مدیران گلد قراردارد.                                </p>
                                <router-link class="btn" :to="{ name: 'contact' }"> تماس با ما </router-link>

                                <a
                target="_blank"
                rel="prefetch"
                href="https://trustseal.enamad.ir/?id=147579&amp;Code=VmAib6CEATEiYH7Fb2HF"
                class="pic"
              >
                <img
                  src="https://enamad.ir/Content/Images/News/M/enamad2.png?v=5.0.0.33"
                  loading="lazy"
                  width="300"
                  height="200"
                  alt="نماد الکترونیکی"
                  style="cursor: pointer"
                  id="VmAib6CEATEiYH7Fb2HF"
                />
              </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->

        </div>
      </div>
    </div>
  </Layout>

</template>
<style scoped></style>
