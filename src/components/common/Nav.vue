<template>
    <div >
        <nav class="navbar navbar-expand-lg navbar-light nav-custom">
            <!--<img class="logo-header" src="../../assets/images/motbuoc.jpg" @click="changeHome()"/>-->

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="logo-header" @click="clickHome()"></div>
            <div class="collapse navbar-collapse" id="navbarNav" style="justify-content: flex-start">
                <ul class="nav nav-pills nav-padding">
                    <li class="nav-item ">
                        <router-link class="nav-link" :class="{ active: isActive('home') }" @click.native="closeToggle('home')" to="/">TRANG CHỦ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('position') }" @click.native="closeToggle('position')" to="/vi-tri">VỊ TRÍ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('matbang') }" @click.native="closeToggle('matbang')" to="/mat-bang">MẶT BẰNG THIẾT KẾ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('chinhsach') }" @click.native="closeToggle('chinhsach')" to="/chinh-sach"><span>CHÍNH SÁCH BÁN HÀNG</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('canhomau') }" @click.native="closeToggle('canhomau')" to="/can-ho-mau"><span>CĂN HỘ MẪU</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('news') }" @click.native="closeToggle('news')" to="/blog/posts"><span>TIN TỨC</span></router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
  export default {
    name: 'Nav',
    data () {
      return {
        activeItem: 'home'
      }
    },
    methods: {
      closeToggle: function (menuItem) {
        this.activeItem = menuItem
        $('.collapse').collapse('hide')
      },
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      clickHome: function () {
        this.$router.push({ name: 'Vinhomeswest' })
      }
    }
  }
</script>
