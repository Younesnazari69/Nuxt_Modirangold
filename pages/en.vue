<script setup lang="ts">
import Layout from "../containers/Layout.vue";

import { useDataStore } from "../stores/data";
import { onBeforeMount, onServerPrefetch } from "vue";

const store = useDataStore();

useHead({
    title: 'English',
    meta: [
      { name: 'description', content: 'Welcome to Darbastan! For information on our scaffolding services, pricing, and contact options in English, visit our English page. Get free consultation for scaffolding services and fast price estimation.' },
      { name: 'keywords', content: 'scaffolding, Darbastan, scaffolding services, free consultation, Darbastan English' },
      { property: 'og:title', content: 'English' },
      { property: 'og:description', content: 'Welcome to Darbastan! For information on our scaffolding services, pricing, and contact options in English, visit our English page. Get free consultation for scaffolding services and fast price estimation.' },
      { property: 'og:url', content: 'https://darbastan.com/en' },
      { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
    ],
    link: [
      { rel: 'canonical', href: 'https://darbastan.com/en' },
    ]
})
</script>
<template>
  <Layout :ShowPageHeader="true" :PageTitle="'Scaffolding Darbastan.com'">
    <div class="service">
      <div class="container">
        <div class="row">
          <p class="lead">
            Darbastan remains an established name amongst the Manufacturers,
            Suppliers and Exporters of scaffolding items in IRAN offering access
            to high quality erection and dismantling services Scaffolders
            Services Welcome to Darbastan, Iran Scaffolding Reference reputable
            Manufacturers, Suppliers and Exporters of scaffolding units in
            Tehran (IRAN). Our name is instantly synonymous with quality and we
            are committed to setting improved standards of efficiency and
            customer satisfaction by constantly enabling you to access high
            quality expertise and operatives. Scaffolding Rental, Cuplock
            Scaffolding, RingLock Scaffolding
          </p>
          <p class="lead">
            <a href="/ModularScaffolding" class="btn btn-lg btn-secondary"
              >Modular Scaffolding</a
            >
            <router-link
              class="btn btn-lg btn-primary"
              :to="{
                name: 'articles',
                params: {
                  pageId: 2852,
                  name: 'Scaffolding-Pipes-and-Tubes',
                },
              }"
              >Scaffolding Pipes and Tubes</router-link
            >
            <a
              href="https://wa.me/message/USQNHQLQNKGMA1"
              class="btn btn-lg btn-success"
              >WhatsApp Contact</a
            >
            <router-link class="btn btn-lg btn-info" :to="{ name: 'RegistrationEN' }">Apply with Your Resume</router-link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
.lead {
  text-align: justify;
  text-align-last: left;
}
</style>
