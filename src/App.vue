<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Nav class="nav-sticky"></Nav>
    <router-view/> 
    <Footer></Footer>
    <div>
      <button class="hotline">HOTLINE 0945505885
        <div class="lds-ripple"><span class="icon-phone-cus"><font-awesome-icon :icon="['fas', 'phone']" :style="{color: '#ffffff'}" class="icon alt icon-phone-custom"/></span><div></div><div></div></div>
      </button>
    </div>
    <div>
      <button class="download" data-toggle="modal" data-target="#exampleModalCenter">TẢI MẶT BẰNG - BẢNG GIÁ - CHÍNH SÁCH
        <div class="lds-ripple-down"><span class="icon-download-cus"><font-awesome-icon :icon="['fas', 'download']" :style="{color: '#424F7E'}" class="icon alt icon-download-custom"/></span><div></div><div></div></div>
      </button>
    </div>
    <div class="p-1" style="background-color:#304658; text-align: center; color:  #ffffff">Copyright 2019 © VinCityVN</div>
    <ModalDownload></ModalDownload>
  </div>
</template>

<script>
import Footer from './components/common/Footer.vue'
import Nav from './components/common/Nav.vue'
import ModalDownload from './components/common/ModalDownload.vue'
export default {
  components: {
    Footer,
    Nav,
    ModalDownload
  },
  name: 'App'
}
</script>
