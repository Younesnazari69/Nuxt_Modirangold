<script setup lang="ts">
import { useDataStore } from "@/stores/data"
import { useRouter } from 'vue-router'
import { getAssetPath } from '../Helper/assets';
import { ref, onBeforeMount } from "vue"
const store = useDataStore();
const router = useRouter()

const SearchWord = ref<string>('')
onBeforeMount(() => {
  store.currentUser();
})

const handleLogout = () => {
  // store.logout().then(res => {
  //   window.location.href = "/"
  // })
  localStorage.clear()
  window.location.href = "/"
}
</script>

<template>
<div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-3 col-xs-12"> 
            <!-- Header Logo -->
            <div class="logo"><a title="e-commerce" href="index.html"><img alt="e-commerce" src="../public/images/logo.png"></a> </div>
            <!-- End Header Logo --> 
          </div>
          <div class="col-md-9 col-sm-8 hidden-xs">
            <div class="mtmegamenu">
              <ul>
                <li class="mt-root demo_custom_link_cms">
                  <div class="mt-root-item"><a href="index.html">
                    <div class="title title_font"><span class="title-text">صفحه اصلی</span></div>
                    </a></div>
                  <!-- <ul class="menu-items col-md-3 col-sm-4 col-xs-12" style="top: 59px; left: 15px;">
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="../Version1/index.html"><span>Fruits Store</span></a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="../Version2/index.html"><span>Shoes Store</span></a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="../Version3/index.html"><span>Fashion Store</span></a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="index.html"><span>Jewellery Store</span></a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="../Version5/index.html"><span>Electronic Store</span></a></div>
                    </li> 
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="../rtl-fruits-store/index.html"><span>RTL Fruits Store</span></a></div>
                    </li>                   
                    </ul> -->
                </li>
                <li class="mt-root">
                  <div class="mt-root-item"><a href="#">
                    <div class="title title_font"><span class="title-text">فروشگاه</span></div>
                    </a></div>
                  <ul class="menu-items col-xs-12" style="top: 59px; left: 93.0781px;">
                    <li class="menu-item depth-1 menucol-1-3 ">
                      <div class="title title_font"> <a href="#"> Shop Pages </a></div>
                      <ul class="submenu">
                        <li class="menu-item">
                          <div class="title"> <a href="shop_grid.html"> Shop grid </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="shop_grid_right_sidebar.html"> Shop grid right sidebar</a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="shop_list.html"> Shop list </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="shop_list_right_sidebar.html"> Shop list right sidebar</a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="shop_grid_full_width.html"> Shop grid full width </a></div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item depth-1 menucol-1-3 ">
                      <div class="title title_font"> <a href="#"> Ecommerce Pages </a></div>
                      <ul class="submenu">
                        <li class="menu-item">
                          <div class="title"> <a href="wishlist.html"> Wishlists </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="checkout.html"> Checkout </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="compare.html"> Compare </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="shopping_cart.html"> Shopping cart </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="quick_view.html"> Quick View </a></div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item depth-1 menucol-1-3 ">
                      <div class="title title_font"> <a href="#"> Static Pages </a></div>
                      <ul class="submenu">
                        <li class="menu-item depth-2 category ">
                          <div class="title"> <a href="account_page.html"> Create Account Page </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="about_us.html"> About Us </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="contact_us.html"> Contact us </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="404error.html"> Error 404 </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="faq.html"> FAQ </a></div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item depth-1 menucol-1-3 ">
                      <div class="title title_font"> <a href="#"> Product Categories </a></div>
                      <ul class="submenu">
                        <li class="menu-item">
                          <div class="title"> <a href="cat-3-col.html"> 3 Column Sidebar </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="cat-4-col.html"> 4 Column Sidebar</a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="cat-4-col-full.html"> 4 Column Full width </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="cat-6-col.html"> 6 Columns Full width</a></div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item depth-1 menucol-1-3 ">
                      <div class="title title_font"> <a href="#"> Single Product Pages </a></div>
                      <ul class="submenu">
                        <li class="menu-item">
                          <div class="title"> <a href="single_product.html"> single product </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="single_product_left_sidebar.html"> single product left sidebar</a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="single_product_right_sidebar.html"> single product right sidebar</a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="single_product_magnify_zoom.html"> single product magnify zoom</a></div>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item depth-1 menucol-1-3 ">
                      <div class="title title_font"> <a href="#"> Blog Pages </a></div>
                      <ul class="submenu">
                        <li class="menu-item">
                          <div class="title"> <a href="blog_right_sidebar.html"> Blog – Right Sidebar </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="blog_left_sidebar.html"> Blog – Left Sidebar </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="blog_full_width.html"> Blog – Full-Width </a></div>
                        </li>
                        <li class="menu-item">
                          <div class="title"> <a href="single_post.html"> Single post </a></div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="mt-root">
                  <div class="mt-root-item"><a href="shop_grid.html">
                    <div class="title title_font"><span class="title-text">تماس با ما</span> </div>
                    </a></div>
                </li>
                <li class="mt-root">
                  <div class="mt-root-item"><a href="about_us.html">
                    <div class="title title_font"><span class="title-text">درباره ما</span></div>
                    </a></div>
                </li>
                <li class="mt-root demo_custom_link_cms">
                  <div class="mt-root-item"><a href="blog.html">
                    <div class="title title_font"><span class="title-text">مقالات</span></div>
                    </a></div>
                  <ul class="menu-items col-md-3 col-sm-4 col-xs-12" style="top: 59px; left: 407.25px;">
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="blog_right_sidebar.html"> Blog – Right Sidebar </a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="blog_left_sidebar.html"> Blog – Left Sidebar </a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="blog_full_width.html"> Blog – Full-Width </a></div>
                    </li>
                    <li class="menu-item depth-1">
                      <div class="title"> <a href="single_post.html"> Single post </a></div>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="call-us hidden-sm"> <i class="fa fa-phone"></i>
                <div class="call-us-inner"> <span class="call-text">تماس با شرکت</span> <span class="call-num">09128665320</span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<style scoped>

</style>
