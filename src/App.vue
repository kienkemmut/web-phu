<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <nav class="navbar navbar-expand-lg navbar-light nav-custom nav-sticky">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav nav-pills nav-padding">
          <li class="nav-item">
            <a class="nav-link active" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/> 
    <Footer></Footer>
    <button class="hotline">HOTLINE</button>
    <button class="download">Tải về mặt bằng</button>
    <div class="p-3" style="background-color:#ffc942; text-align: center">Copyright 2019 © VinCity Sportia</div>

  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
