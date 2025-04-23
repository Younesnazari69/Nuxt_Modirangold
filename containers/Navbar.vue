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
<nav class="">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-4 col-xs-3">
          <div class="mm-toggle-wrap">
            <div class="mm-toggle"> <i class="fa fa-align-justify"></i> </div>
            <span class="mm-label hidden-xs">دسته بندی</span> </div>
          <div class="mega-container visible-lg visible-md visible-sm">
            <div class="navleft-container">
              <div class="mega-menu-title">
                <h3>دسته بندی محصولات</h3>
              </div>
              <div class="mega-menu-category">
                <ul class="nav">
                  <li> <a href="#">Jewellery</a>
                    <div class="wrap-popup">
                      <div class="popup">
                        <div class="row">
                          <div class="col-md-4 col-sm-6">
                            <h3>Rings</h3>
                            <ul class="nav">
                              <li><a href="shop_grid.html">Air Fryers</a></li>
                              <li><a href="shop_grid.html">Fans </a></li>
                              <li><a href="shop_grid.html">Water Heaters</a></li>
                              <li><a href="shop_grid.html">Room Heaters</a></li>
                            </ul>
                            <br>
                            <h3>Earrings</h3>
                            <ul class="nav">
                              <li> <a href="shop_grid.html">Juicers</a> </li>
                              <li> <a href="shop_grid.html">Mixers &amp; Grinders</a> </li>
                              <li> <a href="shop_grid.html"> Ovens</a> </li>
                              <li> <a href="shop_grid.html"> Rice Cookers</a> </li>
                              <li> <a href="shop_grid.html">Stand Mixers</a> </li>
                            </ul>
                          </div>
                          <div class="col-md-4 col-sm-6 has-sep">
                            <h3>Pendants</h3>
                            <ul class="nav">
                              <li> <a href="shop_grid.html">Tandoor &amp; Grills</a> </li>
                              <li> <a href="shop_grid.html">Baking Tools</a> </li>
                              <li> <a href="shop_grid.html">Retina Display </a> </li>
                              <li> <a href="shop_grid.html">Washers</a> </li>
                            </ul>
                            <br>
                            <h3>Bracelet</h3>
                            <ul class="nav">
                              <li> <a href="shop_grid.html">Toasters</a> </li>
                              <li> <a href="shop_grid.html">Water Purifiers</a> </li>
                              <li> <a href="shop_grid.html">Glasses</a> </li>
                              <li> <a href="shop_grid.html">Lunch Boxes</a> </li>
                              <li> <a href="shop_grid.html">Knives</a> </li>
                            </ul>
                          </div>
                          <div class="col-md-4 has-sep hidden-sm">
                            <div class="custom-menu-right">
                              <div class="box-banner media">
                                <div class="add-desc">
                                  <h3>Computer <br>
                                    Services </h3>
                                  <div class="price-sale">2016</div>
                                  <a href="#">Shop Now</a> </div>
                                <div class="add-right"><a href="#"><img src="../public/images/menu-img1.jpg" alt=""></a></div>
                              </div>
                              <div class="box-banner media">
                                <div class="add-desc">
                                  <h3>Save up to</h3>
                                  <div class="price-sale">75 <sup>%</sup><sub>off</sub></div>
                                  <a href="#">Shopping Now</a> </div>
                                <div class="add-right"><a href="#"><img src="../public/images/menu-img2.jpg" alt=""></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li> <a href="#">Diamond</a>
                    <div class="wrap-popup">
                      <div class="popup">
                        <div class="row">
                          <div class="col-md-4 col-sm-6">
                            <ul class="nav">
                              <li><a href="shop_grid.html"><span>Necklaces</span></a></li>
                              <li><a href="shop_grid.html"><span>Bangles</span></a></li>
                              <li><a href="shop_grid.html"><span>Bracelets</span> </a></li>
                              <li><a href="shop_grid.html"><span>Nosepins</span> </a></li>
                              <li> <a href="shop_grid.html"><span>Bridal</span></a></li>
                              <li><a href="shop_grid.html"><span>Bookshelves </span></a></li>
                              <li><a href="shop_grid.html"><span>Eternity</span></a></li>
                              <li><a href="shop_grid.html"><span>Center Tables </span></a></li>
                              <li><a href="shop_grid.html"><span>Cabinets</span></a></li>
                            </ul>
                          </div>
                          <div class="col-md-4 col-sm-6 has-sep">
                            <ul class="nav">
                              <li><a href="shop_grid.html"><span>Partitions</span></a></li>
                              <li><a href="shop_grid.html"><span>High-speed</span></a></li>
                              <li><a href="shop_grid.html"><span>Bean Bags </span> </a></li>
                              <li><a href="shop_grid.html"><span>Covers &amp; Refills</span> </a></li>
                              <li> <a href="shop_grid.html"><span>Footstools</span></a></li>
                              <li><a href="shop_grid.html"><span>Inflatable Sofas</span></a></li>
                              <li><a href="shop_grid.html"><span>Ottomans</span></a></li>
                              <li><a href="shop_grid.html"><span>Cabinets</span></a></li>
                              <li><a href="shop_grid.html"><span>Wall Shelves</span></a></li>
                            </ul>
                          </div>
                          <div class="col-md-4 has-sep hidden-sm">
                            <div class="custom-menu-right">
                              <div class="box-banner menu-banner">
                                <div class="add-right"><a href="#"><img src="../public/images/menu-img4.jpg" alt=""></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nosub"><a href="#">Plain Gold</a></li>
                  <li> <a href="shop_grid.html">Gem Stone</a>
                    <div class="wrap-popup column2">
                      <div class="popup">
                        <div class="row">
                          <div class="col-sm-6">
                            <h3>Furniture</h3>
                            <ul class="nav">
                              <li> <a href="shop_grid.html"> Kids' Beds </a> </li>
                              <li> <a href="shop_grid.htmls"> Wall Stickers </a> </li>
                              <li> <a href="shop_grid.html"> Humidifiers </a> </li>
                              <li> <a href="shop_grid.html"> Indoor Lighting </a> </li>
                            </ul>
                          </div>
                          <div class="col-sm-6 has-sep">
                            <h3> Artwork </h3>
                            <ul class="nav">
                              <li> <a href="shop_grid.html"> Art Prints </a> </li>
                              <li> <a href="shop_grid.html"> Posters</a> </li>
                              <li> <a href="shop_grid.html"> Paintings </a> </li>
                              <li> <a href="shop_grid.html"> Drawings </a> </li>
                            </ul>
                          </div>
                          <div class="col-sm-12"> <a class="ads1" href="#"><img class="img-responsive" src="../public/images/menu-img3.jpg" alt=""></a> </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li> <a href="shop_grid.html">Platinum</a>
                    <div class="wrap-popup column1">
                      <div class="popup">
                        <ul class="nav">
                          <li><a href="shop_grid.html"><span>Frying Pans</span></a></li>
                          <li><a href="shop_grid.html"><span>Dinner Sets</span></a></li>
                          <li><a href="shop_grid.html"><span>Baking Tools</span></a></li>
                          <li><a href="shop_grid.html"><span>Spatulas</span></a></li>
                          <li><a href="shop_grid.html"><span>Gas Stoves</span></a></li>
                          <li><a href="shop_grid.html"><span>Glasses</span></a></li>
                          <li><a href="shop_grid.html"><span>Racks &amp; Holders</span></a></li>
                          <li><a href="shop_grid.html"><span>Knives</span></a></li>
                          <li><a href="shop_grid.html"><span>Tableware</span></a></li>
                          <li><a href="shop_grid.html"><span>Kitchen Tools</span></a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li><a href="#">Accessories</a>
                    <div class="wrap-popup column1">
                      <div class="popup">
                        <ul class="nav">
                          <li> <a href="shop_grid.html"> Super Pillow </a> </li>
                          <li> <a href="shop_grid.html"> Hodak Chair</a> </li>
                          <li> <a href="shop_grid.html"> Pendant Light </a> </li>
                          <li> <a href="shop_grid.html"> Shoe Saver </a> </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="nosub"><a href="shop_grid.html">Earring Collection</a></li>
                  <li class="nosub"><a href="shop_grid.html">White Gold</a></li>
                  <li class="nosub"><a href="shop_grid.html">SILVER</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-9 col-sm-6 col-md-6 hidden-xs"> 
          <!-- Search -->
          
          <div class="top-search">
            <div id="search">
              <form>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="جستجو" name="search">
                  <select class="cate-dropdown hidden-xs hidden-sm" name="category_id">
                    <option>دسته بندی ها</option>
                    <option>women</option>
                    <option>&nbsp;&nbsp;&nbsp;Chair </option>
                    <option>&nbsp;&nbsp;&nbsp;Decoration</option>
                    <option>&nbsp;&nbsp;&nbsp;Lamp</option>
                    <option>&nbsp;&nbsp;&nbsp;Handbags </option>
                    <option>&nbsp;&nbsp;&nbsp;Sofas </option>
                    <option>&nbsp;&nbsp;&nbsp;Essential </option>
                    <option>Men</option>
                    <option>Electronics</option>
                    <option>&nbsp;&nbsp;&nbsp;Mobiles </option>
                    <option>&nbsp;&nbsp;&nbsp;Music &amp; Audio </option>
                  </select>
                  <button class="btn-search" type="button"><i class="fa fa-search"></i></button>
                </div>
              </form>
            </div>
          </div>
          
          <!-- End Search --> 
        </div>
        <!-- top cart -->
        <div class="col-md-3 col-xs-9 col-sm-2 top-cart">
          <div class="top-cart-contain">
            <div class="mini-cart">
              <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="#">
                <div class="cart-icon"><i class="fa fa-shopping-basket"></i></div>
                <div class="shoppingcart-inner hidden-xs hidden-sm"><span class="cart-title">سبد خرید</span> <span class="cart-total">4عدد: 520ریال</span></div>
                </a></div>
              <div>
                <div class="top-cart-content">
                  <div class="block-subtitle hidden-xs">محصولات در سبد خرید</div>
                  <ul id="cart-sidebar" class="mini-products-list">
                    <li class="item odd"> <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img src="../public/images/products/img07.jpg" alt="Lorem ipsum dolor" width="65"></a>
                      <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                        <p class="product-name"><a href="shopping_cart.html">Lorem ipsum dolor sit amet Consectetur</a> </p>
                        <strong>1</strong> x <span class="price">$20.00</span> </div>
                    </li>
                    <li class="item even"> <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img src="../public/images/products/img11.jpg" alt="Lorem ipsum dolor" width="65"></a>
                      <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                        <p class="product-name"><a href="shopping_cart.html">Consectetur utes anet adipisicing elit</a> </p>
                        <strong>1</strong> x <span class="price">$230.00</span> </div>
                    </li>
                    <li class="item last odd"> <a href="shopping_cart.html" title="Ipsums Dolors Untra" class="product-image"><img src="../public/images/products/img10.jpg" alt="Lorem ipsum dolor" width="65"></a>
                      <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                        <p class="product-name"><a href="shopping_cart.html">Sed do eiusmod tempor incidist</a> </p>
                        <strong>2</strong> x <span class="price">$420.00</span> </div>
                    </li>
                  </ul>
                  <div class="top-subtotal">جمع کل: <span class="price">ریال520</span></div>
                  <div class="actions">
                    <button class="btn-checkout" type="button"><i class="fa fa-check"></i><span>پرداخت</span></button>
                    <button class="view-cart" type="button"><i class="fa fa-shopping-basket"></i> <span>مشاهده سبد خرید</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>

</style>
