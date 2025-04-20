<script setup lang="ts">
import Carousel from 'primevue/carousel';
const props = defineProps(["products", "numVisible","numScroll","responsiveOptions"]);

</script>

<template>
    <Carousel :value="props.products" :numVisible="props.numVisible" :numScroll="props.numScroll" :showIndicators="false" :autoplayInterval="5000"
        :circular="true" :responsiveOptions="props.responsiveOptions">
        <template #item="slotProps">
            <div class="product-item animated-item">
                <div class="item-inner">
                    <div class="product-thumb has-hover-img"> <a title="Ipsums Dolors Untra" href="single_product.html">
                            <figure> <img :src="`/_nuxt/public/images/products/${slotProps.data.image1}`" alt="">
                                 <img class="hover-img"
                                :src="`/_nuxt/public/images/products/${slotProps.data.image2}`" alt=""></figure>
                        </a>
                        <div class="pr-info-area animated animate6"><a href="quick_view.html" class="quick-view"><i
                                    class="fa fa-search"><span>Quick view</span></i></a> <a href="wishlist.html"
                                class="wishlist"><i class="fa fa-heart"><span>Wishlist</span></i></a> <a
                                href="compare.html" class="compare"><i
                                    class="fa fa-exchange"><span>Compare</span></i></a> </div>
                    </div>
                    <div class="item-info">
                        <div class="info-inner">
                            <div class="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">Ipsums
                                    Dolors Untra </a> </div>
                            <div class="item-content">
                                <div class="rating"> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i
                                        class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i
                                        class="fa fa-star-o"></i> </div>
                                <div class="item-price">
                                    <div class="price-box"> <span class="regular-price"> <span
                                                class="price">$125.00</span> </span> </div>
                                </div>
                                <div class="pro-action">
                                    <button type="button" class="add-to-cart-mt"> <i
                                            class="fa fa-shopping-basket"></i><span> Add to Cart</span> </button>
                                </div>
                            </div>
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
