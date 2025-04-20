<script setup lang="ts">
import Layout from '../containers/Layout.vue'

import { useDataStore } from '../stores/data'
import { onBeforeMount, ref,onServerPrefetch } from 'vue';


const store = useDataStore()
const Pages = ref<any>({ List: null })


onServerPrefetch(async () => {
    store.SetMetaTags('تیم مدیران گلد','تیم مدیران گلد', 'تیم،مدیران گلد',"تیم مدیران گلد","تیم مدیران گلد","https://darbastan.com/team","https://darbastan.storage.c2.liara.space/Images/logo.png","https://darbastan.com/team");
});
onBeforeMount(async () => {
    document.title = 'تیم مدیران گلد'
})

useHead({
  title: 'تیم مدیران گلد - کارشناسان و متخصصان خدمات طلا',
  meta: [
    { name: 'description', content: 'آشنایی با تیم مدیران گلد که متشکل از کارشناسان و متخصصان خدمات طلا است. تیم ما با تجربه و دانش خود، بهترین خدمات طلای را برای پروژه‌های شما ارائه می‌دهد.' },
    { name: 'keywords', content: 'تیم مدیران گلد، خدمات طلا، متخصصان طلا، کارشناسان طلا، پروژه طلا، مدیران گلد' },
    { property: 'og:title', content: 'تیم مدیران گلد - کارشناسان و متخصصان خدمات طلا' },
    { property: 'og:description', content: 'آشنایی با تیم مدیران گلد و خدمات حرفه‌ای تیم ما در زمینه طلا. تیم مدیران گلد با سال‌ها تجربه در ارائه خدمات طلا به پروژه‌های مختلف می‌پردازد.' },
    { property: 'og:url', content: 'https://darbastan.com/team' },
    { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/team-logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://darbastan.com/team' },
  ]
});

</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'تیم مدیران گلد'">
    <div class="service">
      <div class="container">
        <div class="row" >
                  <!-- Team Start -->
                  <div class="team">
                <div class="container">
                    <div class="section-header text-center">
                        <p>تیم ما</p>
                        <!-- <h2>توسعه مدیران گلد</h2> -->
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item">
                                <div class="team-img">
                                    <NuxtImg src="../public/img/pakpour.jpg" alt="بنیانگذار و توسعه دهنده"/>
                                </div>
                                <div class="team-text">
                                    <h2>حمیدرضا پاکپور - Hamidreza Pakpour</h2>
                                    <p>بنیانگذار و توسعه دهنده - Founder and Developer</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href="https://twitter.com/darbastan"><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href="https://www.facebook.com/darbastan"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href="https://ir.linkedin.com/in/hamidreza-pakpour"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href="https://www.instagram.com/darbastaan/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <NuxtImg src="../public/img/nazari.webp" alt="FrontEnd Developer"/>
                                </div>
                                <div class="team-text">
                                    <h2>یونس نظری ثمر</h2>
                                    <p>FrontEnd Developer</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href="https://twitter.com/darbastan"><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href="https://www.facebook.com/darbastan"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href="https://ir.linkedin.com/in/younes-nazari-970a98201"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href="https://www.instagram.com/darbastaan/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item">
                                <div class="team-img">
                                    <NuxtImg src="../public/img/Logo1.png" alt="کارشناس خدمات طلا"/>
                                </div>
                                <div class="team-text">
                                    <h2>خانساری</h2>
                                    <p>کارشناس خدمات طلا</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href="https://twitter.com/darbastan"><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href="https://www.facebook.com/darbastan"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href="https://www.instagram.com/darbastaan/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="team-item">
                                <div class="team-img">
                                    <NuxtImg src="../public/img/Logo1.png" alt="کارشناس چهارپایه های طلای"/>
                                </div>
                                <div class="team-text">
                                    <h2>برزگر</h2>
                                    <p>کارشناس چهارپایه های طلای یا مدولار</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-tw" href="https://twitter.com/darbastan"><i class="fab fa-twitter"></i></a>
                                    <a class="social-fb" href="https://www.facebook.com/darbastan"><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-li" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="social-in" href="https://www.instagram.com/darbastaan/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Team End -->

        </div>
      </div>
    </div>
  </Layout>

</template>
<style scoped></style>
