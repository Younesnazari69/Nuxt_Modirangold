<script setup lang="ts">
import { getAssetPath } from "../Helper/assets";
import Layout from "../containers/Layout.vue";
import MainSlider from "../components/MainSlider.vue";
import ComentsSlider from "../components/ComentsSlider.vue";
import ProductCarousel from "../components/ProductCarousel.vue";
import LatestNewsCarousel from "../components/LatestNewsCarousel.vue";


import { useDataStore } from "../stores/data";
import { ref } from "vue";

const store = useDataStore();
const Pages = ref<any>({ List: null });
const Topics = ref<any>({ List: null });
const responsiveOptions = ref(
  {
    special: [
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 4,
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
    ],
    topsellers: [
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
    ],



  }

);

const products = ref([
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image1: 'img10.jpg',
    image2: 'img01.jpg',
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
    image1: 'img13.jpg',
    image2: 'img03.jpg', price: 72,
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
    image1: 'img09.jpg',
    image2: 'img05.jpg', price: 79,
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
    image1: 'img15.jpg',
    image2: 'img06.jpg', price: 29,
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
    image1: 'img05.jpg',
    image2: 'img08.jpg', price: 15,
    category: 'Accessories',
    quantity: 73,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
])




await useAsyncData('index', async () => {
  await store.FetchPages(3, 0).then(() => {
    Pages.value.List = store.PagesData.List;
  });
  await store.FetchTopics(4, 0).then(() => {
    Topics.value.List = store.TopicsData.List;
  });
});

</script>
<template>
  <Layout :ShowPageHeader="false">
    <MainSlider></MainSlider>



    <div class="jtv-service-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="jtv-service">
              <div class="ser-icon"> <i class="fa fa-truck flip-horizontal"></i> </div>
              <div class="service-content">
                <h5>FREE SHIPPING WORLDWIDE </h5>
                <p>free ship-on oder over $299.00</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="jtv-service">
              <div class="ser-icon"> <i class="fa fa-mail-forward"></i> </div>
              <div class="service-content">
                <h5>MONEY BACK GUARATEE! </h5>
                <p>30 days money back guarantee!</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="jtv-service">
              <div class="ser-icon"> <i class="fa fa-comments flip-horizontal"></i> </div>
              <div class="service-content">
                <h5>24/7 CUSTOMER SERVICE </h5>
                <p>We support online 24 hours a day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="jtv-category-area">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <div class="jtv-single-cat">
              <div class="page-header">
                <h2>Best sale of week</h2>
              </div>
              <div class="jtv-product">
                <div class="product-img"> <a href="single_product.html"> <img src="../public/images/products/img10.jpg"
                      alt=""> <img class="secondary-img" src="../public/images/products/img11.jpg" alt=""> </a> </div>
                <div class="jtv-product-content">
                  <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                  <div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                      class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>
                  <div class="price-box"> <span class="regular-price"> <span class="price">$125.00</span> </span> </div>
                  <div class="jtv-product-action">
                    <div class="jtv-extra-link">
                      <div class="button-cart">
                        <button><i class="fa fa-shopping-basket"></i></button>
                      </div>
                      <a href="quick_view.html"><i class="fa fa-search"></i></a> <a href="wishlist.html"><i
                          class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jtv-product">
                <div class="product-img"> <a href="single_product.html"> <img src="../public/images/products/img12.jpg"
                      alt=""> <img class="secondary-img" src="../public/images/products/img13.jpg" alt=""> </a> </div>
                <div class="jtv-product-content">
                  <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                  <div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i>
                  </div>
                  <div class="price-box"> <span class="regular-price"> <span class="price">$125.00</span> </span> </div>
                  <div class="jtv-product-action">
                    <div class="jtv-extra-link">
                      <div class="button-cart">
                        <button><i class="fa fa-shopping-basket"></i></button>
                      </div>
                      <a href="quick_view.html"><i class="fa fa-search"></i></a> <a href="wishlist.html"><i
                          class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jtv-product jtv-cat-margin">
                <div class="product-img"> <a href="single_product.html"> <img src="../public/images/products/img14.jpg"
                      alt=""> <img class="secondary-img" src="../public/images/products/img15.jpg" alt=""> </a> </div>
                <div class="jtv-product-content">
                  <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                  <div class="rating"> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i
                      class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>
                  <div class="price-box">
                    <p class="special-price"> <span class="price-label">Special Price</span> <span class="price">
                        $456.00 </span> </p>
                    <p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price"> $567.00
                      </span> </p>
                  </div>
                  <div class="jtv-product-action">
                    <div class="jtv-extra-link">
                      <div class="button-cart">
                        <button><i class="fa fa-shopping-basket"></i></button>
                      </div>
                      <a href="quick_view.html"><i class="fa fa-search"></i></a> <a href="wishlist.html"><i
                          class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jtv-product jtv-cat-margin">
                <div class="product-img"> <a href="single_product.html"> <img src="../public/images/products/img08.jpg"
                      alt=""> <img class="secondary-img" src="../public/images/products/img07.jpg" alt=""> </a> </div>
                <div class="jtv-product-content">
                  <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                  <div class="rating"> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i
                      class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>
                  <div class="price-box">
                    <p class="special-price"> <span class="price-label">Special Price</span> <span class="price">
                        $456.00 </span> </p>
                    <p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price"> $567.00
                      </span> </p>
                  </div>
                  <div class="jtv-product-action">
                    <div class="jtv-extra-link">
                      <div class="button-cart">
                        <button><i class="fa fa-shopping-basket"></i></button>
                      </div>
                      <a href="quick_view.html"><i class="fa fa-search"></i></a> <a href="wishlist.html"><i
                          class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jtv-product jtv-cat-margin">
                <div class="product-img"> <a href="single_product.html"> <img src="../public/images/products/img06.jpg"
                      alt=""> <img class="secondary-img" src="../public/images/products/img05.jpg" alt=""> </a> </div>
                <div class="jtv-product-content">
                  <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                  <div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> <i
                      class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> <i class="fa fa-star-o"></i> </div>
                  <div class="price-box">
                    <p class="special-price"> <span class="price-label">Special Price</span> <span class="price">
                        $456.00 </span> </p>
                    <p class="old-price"> <span class="price-label">Regular Price:</span> <span class="price"> $567.00
                      </span> </p>
                  </div>
                  <div class="jtv-product-action">
                    <div class="jtv-extra-link">
                      <div class="button-cart">
                        <button><i class="fa fa-shopping-basket"></i></button>
                      </div>
                      <a href="quick_view.html"><i class="fa fa-search"></i></a> <a href="wishlist.html"><i
                          class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jtv-product jtv-cat-margin">
                <div class="product-img"> <a href="single_product.html"> <img src="../public/images/products/img02.jpg"
                      alt=""> <img class="secondary-img" src="../public/images/products/img01.jpg" alt=""> </a> </div>
                <div class="jtv-product-content">
                  <h3><a href="single_product.html">Lorem ipsum dolor sit amet</a></h3>
                  <div class="rating"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>
                  </div>
                  <div class="price-box"> <span class="regular-price"> <span class="price">$225.00</span> </span> </div>
                  <div class="jtv-product-action">
                    <div class="jtv-extra-link">
                      <div class="button-cart">
                        <button><i class="fa fa-shopping-basket"></i></button>
                      </div>
                      <a href="quick_view.html"><i class="fa fa-search"></i></a> <a href="wishlist.html"><i
                          class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- banner -->
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="jtv-banner">
              <div class="upper">
                <div class="jtv-subbanner1"><a href="#"><img class="img-respo" alt="jtv-subbanner1"
                      src="../public/images/banner4.jpg"></a>
                  <div class="text-block">
                    <div class="text1"><a href="#">Designer</a></div>
                    <div class="text2"><a href="#">Save Upto 25% off</a></div>
                    <div class="text3"><a href="#">Shop Now</a></div>
                  </div>
                </div>
                <div class="jtv-subbanner2"><a href="#"><img class="img-respo" alt="jtv-subbanner2"
                      src="../public/images/banner5.jpg"></a>
                  <div class="text-block">
                    <div class="text1"><a href="#">Jewellery</a></div>
                    <div class="text2"><a href="#">Exclusive offer</a></div>
                    <div class="text3"><a href="#">Shop Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container" dir="ltr">
      <div class="special-products">
        <div class="page-header">
          <h2>special products</h2>
        </div>
        <ProductCarousel :products="products" :numVisible="4" :numScroll="1"
          :responsiveOptions="responsiveOptions.special">
        </ProductCarousel>
      </div>
    </div>

    <div class="top-banner">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="jtv-banner1"><a href="#"><img src="../public/images/banner1.jpg" alt=""></a>
              <div class="hover_content">
                <div class="hover_data">
                  <div class="title"> Couple Ring </div>
                  <div class="desc-text"> Wedding </div>
                  <div class="shop-now"><a href="#">Shop now</a></div>
                </div>
              </div>
            </div>
            <div class="jtv-banner2"><a href="#"><img src="../public/images/banner2.jpg" alt=""></a>
              <div class="hover_content">
                <div class="hover_data">
                  <div class="title">bracelets for men</div>
                  <div class="desc-text"> 35% Off all items </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="jtv-banner3">
              <div class="jtv-banner3-inner"><a href="#"><img src="../public/images/banner3.jpg" alt=""></a>
                <div class="hover_content">
                  <div class="hover_data">
                    <div class="title">jewelry sets</div>
                    <div class="desc-text"> Lorem ipsum dolor sit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-container col1-layout">
      <div class="container">
        <div class="row">

          <div class="col-md-3 col-sm-4 col-xs-12">
            <div class="jtv-banner-top">
              <div class="jtv-banner-box">
                <div class=""> <a class="jtv-banner-inner-text" href="#">
                    <div class="jtv-text">
                      <p class="animated animate1"><span>sale up to</span><span>25% off</span></p>
                      <p class="animated animate2">On selected products</p>
                    </div>
                    <div class="jtv-banner-box-image"> <img src="../public/images/chair-img.png" alt="Catbox-Images">
                    </div>
                  </a> </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8 col-md-9 col-xs-12">
            <div class="special-products" dir="ltr">
              <div class="page-header">
                <h2>special products</h2>
              </div>
              <ProductCarousel :products="products" :numVisible="3" :numScroll="1"
                :responsiveOptions="responsiveOptions.topsellers"></ProductCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end main container -->
    <div class="container">
      <div class="block-static2-inner">
        <div class="img"><a href="#"><img class="alignnone size-full" src="../public/images/banner6.jpg"
              alt="banner6"></a></div>
        <div class="content">
          <h3>big offer 2016</h3>
          <h2>45% off</h2>
          <p>Lorem Ipsum is simply dummy text. </p>
        </div>
        <div class="trending">
          <div class="trending-inner">
            <h3>Creative</h3>
            <h2>HUGE SALE</h2>
            <p>New Design </p>
          </div>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">

        <!-- daily deal section-->
        <div class="col-md-6">
          <div class="daily-deal-section daily-deal-parallax">
            <div class="daily-deal">
              <h3 class="deal-title">DEAL THIS WEEK</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.</p>
              <div class="box-timer">
                <div class="time" data-countdown="countdown" data-date="09-30-2025-10-20-50"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <!-- Testimonials Box -->
          <div class="testimonials">
            <ComentsSlider></ComentsSlider>
          </div>
        </div>
        <!-- End Testimonials Box -->

      </div>
    </div>

    <!-- Latest news start -->

    <div class="container">
      <div id="latest-news" class="news">
        <div class="page-header">
          <h2>Latest news</h2>
        </div>
        <div class="slider-items-products" dir="ltr">
          <LatestNewsCarousel></LatestNewsCarousel>

        </div>
      </div>
    </div>




  </Layout>
</template>
<style scoped></style>
