<script setup lang="ts">
import clientsCarousel from "../components/clientsCarousel.vue";

</script>

<template>
  <footer> 
    
    <!-- our clients Slider -->
    <div class="our-clients">
      <div class="container">
        <div class="col-md-12">
<clientsCarousel></clientsCarousel>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Information<a class="expander visible-xs" href="#TabBlock-1">+</a></h3>
            <div class="tabBlock" id="TabBlock-1">
              <ul class="list-links list-unstyled">
                <li><a href="#s">Delivery Information</a></li>
                <li><a href="#">Discount</a></li>
                <li><a href="sitemap.html">Sitemap</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="#">Terms &amp; Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Insider<a class="expander visible-xs" href="#TabBlock-3">+</a></h3>
            <div class="tabBlock" id="TabBlock-3">
              <ul class="list-links list-unstyled">
                <li> <a href="sitemap.html">Sites Map </a> </li>
                <li> <a href="#">News</a> </li>
                <li> <a href="#">Trends</a> </li>
                <li> <a href="about_us.html">About Us</a> </li>
                <li> <a href="contact_us.html">Contact Us</a> </li>
                <li> <a href="#">My Orders</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-2 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Service<a class="expander visible-xs" href="#TabBlock-4">+</a></h3>
            <div class="tabBlock" id="TabBlock-4">
              <ul class="list-links list-unstyled">
                <li> <a href="account_page.html">Account</a> </li>
                <li> <a href="wishlist.html">Wishlist</a> </li>
                <li> <a href="shopping_cart.html">Shopping Cart</a> </li>
                <li> <a href="#">Return Policy</a> </li>
                <li> <a href="#">Special</a> </li>
                <li> <a href="#">Lookbook</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12 col-lg-3">
          <h3 class="links-title">Contact us</h3>
          <p>Lorem Ipsum is simply dummy text of the print and typesetting industry.</p>
          <div class="footer-content">
            <div class="email"> <i class="fa fa-envelope"></i>
              <p>Support@themes.com</p>
            </div>
            <div class="phone"> <i class="fa fa-phone"></i>
              <p>(800) 0123 456 789</p>
            </div>
            <div class="address"> <i class="fa fa-map-marker"></i>
              <p> My Company, 12/34 - West 21st Street, New York, USA</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-3">
          <div class="footer-links">
            <div class="footer-newsletter">
              <h3 class="links-title">Sign up for newsletter</h3>
              <form id="newsletter-validate-detail" method="post" action="#">
                <div class="newsletter-inner">
                  <input class="newsletter-email" name='Email' placeholder='Enter Your Email'/>
                  <button class="button subscribe" type="submit" title="Subscribe">Subscribe</button>
                </div>
              </form>
            </div>
            <div class="social">
              <ul class="inline-mode">
                <li class="social-network fb"><a title="Connect us on Facebook" target="_blank" href="https://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
                <li class="social-network googleplus"><a title="Connect us on Google+" target="_blank" href="https://plus.google.com"><i class="fa fa-google-plus"></i></a></li>
                <li class="social-network tw"><a title="Connect us on Twitter" target="_blank" href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                <li class="social-network linkedin"><a title="Connect us on Linkedin" target="_blank" href="https://www.pinterest.com/"><i class="fa fa-linkedin"></i></a></li>
                <li class="social-network rss"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i class="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-coppyright">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12 coppyright"> Copyright © 2017-2022 <a href="#"> Genius </a>. All Rights Reserved. </div>
          <div class="col-sm-6 col-xs-12">
            <div class="payment">
              <ul>
                <li><a href="#"><img title="Visa" alt="Visa" src="../public/images/visa.png"></a></li>
                <li><a href="#"><img title="Paypal" alt="Paypal" src="../public/images/paypal.png"></a></li>
                <li><a href="#"><img title="Discover" alt="Discover" src="../public/images/discover.png"></a></li>
                <li><a href="#"><img title="Master Card" alt="Master Card" src="../public/images/master-card.png"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>
<style scoped>
</style>
