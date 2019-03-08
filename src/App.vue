<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <Nav class="nav-sticky"></Nav>
    <router-view/> 
    <Footer></Footer>
    <button class="hotline">HOTLINE 0945505885</button>
    <button class="download">TẢI MẶT BẰNG - BẢNG GIÁ - CHÍNH SÁCH</button>
    <div class="p-1" style="background-color:#304658; text-align: center; color:  #ffffff">Copyright 2019 © VinCity Sportia</div>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
import Nav from './components/common/Nav.vue'
export default {
  components: {
    Header,
    Footer,
    Nav
  },
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
/*}*/
</style>
