<script setup lang="ts">
import Carousel from 'primevue/carousel';
const responsiveOptions = ref([
	{
		breakpoint: '1400px',
		numVisible: 3,
		numScroll: 1
	},
	{
		breakpoint: '1199px',
		numVisible: 3,
		numScroll: 1
	},
	{
		breakpoint: '767px',
		numVisible: 3,
		numScroll: 1
	},
	{
		breakpoint: '575px',
		numVisible: 1,
		numScroll: 1
	}
]);

const products = ref([
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'blog-img1.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: 'blog-img2.jpg',
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
                {
                    id: '1002',
                    code: 'zz21cz3c1',
                    name: 'Blue Band',
                    description: 'Product Description',
                    image: 'blog-img3.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3
                },
                {
                    id: '1003',
                    code: '244wgerg2',
                    name: 'Blue T-Shirt',
                    description: 'Product Description',
                    image: 'blog-img1.jpg',
                    price: 29,
                    category: 'Clothing',
                    quantity: 25,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1004',
                    code: 'h456wer53',
                    name: 'Bracelet',
                    description: 'Product Description',
                    image: 'blog-img2.jpg',
                    price: 15,
                    category: 'Accessories',
                    quantity: 73,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
               
            ])
</script>

<template>
		<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
			<template #item="slotProps">
                <div class="item animated-item">
                <div class="jtv-single-blog">
                  <div class="blog-image"> <a href="single_post.html"> <img :src="`/_nuxt/public/images/${slotProps.data.image}`"
                        alt="Blog"> </a> <span class="blog-date"> <a href="#"> <span
                          class="month-date"><small>20</small>Feb</span> </a> </span> </div>
                  <div class="blog-content">
                    <div class="title-desc"> <a href="single_post.html">
                        <h4>Sed do eiusmod sit amet</h4>
                      </a>
                      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,</p>
                    </div>
                    <div class="blog-info"> <span class="author-name"> <i class="fa fa-user"></i>By <a href="#">John
                          Doe</a> </span> <span class="comments-number"> <i class="fa fa-comment"></i>20 Comment </span>
                    </div>
                  </div>
                </div>
              </div>				
			</template>
		</Carousel>
</template>
<style scoped>
/* انیمیشن برای آیتم‌ها */
.animated-item {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 2.10s ease, transform 2.10s ease;
}

::v-deep .p-carousel-item-active .animated-item {
  opacity: 1;
  transform: translateX(0);
}
</style>
