<script setup lang="ts">
import { ref } from 'vue';
import Layout from '../containers/Layout.vue';

const images = [
  { src: "https://darbastan.storage.c2.liara.space/22e1a729-b616-401d-aadf-a6877909abd0.webp", alt: "چهارپایه متحرک صنعتی شماره یک", title: "ارتفاع 4 متر طول 2 متر عرض 1 متر" },
  { src: "https://darbastan.storage.c2.liara.space/f3b60d06-5847-4d42-af17-2ecb52fd90bc.webp", alt: "چهارپایه متحرک صنعتی شماره دو", title: "ارتفاع 3 متر طول 2 متر عرض 1 متر" },
  { src: "https://darbastan.storage.c2.liara.space/5221a425-664d-43ee-90f3-5150d7ada7de.webp", alt: "چهارپایه متحرک صنعتی شماره سه", title: "ارتفاع 4 متر طول 2 متر عرض 1 متر" },
];

const currentImage = ref(null);

const openLightbox = (index: number) => {
  currentImage.value = images[index];
};

const closeLightbox = () => {
  currentImage.value = null;
};

useHead({
  title: 'گالری پروژه‌ها',
  meta: [
    { name: 'description', content: 'در این صفحه، شما می‌توانید نمونه‌های مختلف از پروژه‌های مدیران گلد را مشاهده کنید. پروژه‌های مختلف شامل انواع طلا‌ها، طراحی‌ها و کاربردهای متنوع آنها هستند.' },
    { name: 'keywords', content: 'گالری پروژه‌ها، طلا، پروژه‌های طلا، نمونه کارها، طلا مدیران گلد' },
    { property: 'og:title', content: 'گالری پروژه‌ها' },
    { property: 'og:description', content: 'در این صفحه، شما می‌توانید نمونه‌های مختلف از پروژه‌های مدیران گلد را مشاهده کنید. پروژه‌های مختلف شامل انواع طلا‌ها، طراحی‌ها و کاربردهای متنوع آنها هستند.' },
    { property: 'og:url', content: 'https://darbastan.com/gallery' }, // لینک صحیح صفحه گالری
    { property: 'og:image', content: 'https://darbastan.storage.c2.liara.space/Images/logo.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://darbastan.com/gallery' }, // لینک صحیح صفحه گالری
  ]
})
</script>

<template>
  <Layout :ShowPageHeader="true" :PageTitle="'گالری پروژه ها'">
    <div class="text-center">
        <router-link class="btn btn-success" :to="{ name: 'mobilescaffoldingRequest' }">برای سفارش آنلاین چهارپایه متحرک یا طلای اینجا رو بزن</router-link>
    </div>
    <div class="container py-5">
      <!-- گالری تصاویر -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="(image, index) in images" :key="index" class="col">
          <div class="card">
            <img
              width="200"
              height="600"
              :src="image.src"
              :alt="image.alt"
              class="card-img-top"
              @click="openLightbox(index)"
            />
            <!-- نمایش عنوان تصویر -->
            <div class="card-body">
              <h5 class="card-title">{{ image.title }}</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for Image Preview -->
      <div
        v-if="currentImage"
        class="modal fade show"
        tabindex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="false"
        style="display: block"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <!-- نمایش عنوان تصویر بزرگ در مدال -->
              <h5 class="modal-title" id="imageModalLabel">{{ currentImage.title }}</h5>
              <button
                type="button"
                class="btn-close"
                @click="closeLightbox"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img :src="currentImage.src" class="img-fluid" alt="تصویر بزرگ" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeLightbox"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.card-img-top {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-img-top:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.modal.show {
  display: block;
}
</style>