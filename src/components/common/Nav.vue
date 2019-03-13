<template>
    <div >
        <nav class="navbar navbar-expand-lg navbar-dark nav-custom">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" style="justify-content: center">
                <ul class="nav nav-pills nav-padding">
                    <li class="nav-item ">
                        <router-link class="nav-link" :class="{ active: isActive('home') }" @click.native="closeToggle('home')" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('vinhomes') }" @click.native="closeToggle('vinhomes')" to="">VINHOMES</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('vinpearl') }" @click.native="closeToggle('vinpearl')" to="">VINPEARL</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('vincom-shophouse') }" @click.native="closeToggle('vincom-shophouse')" to="">VINCOM SHOPHOUSE</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('goc-dau-tu') }" @click.native="closeToggle('goc-dau-tu')" to="">GÓC ĐẦU TƯ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ active: isActive('news') }" @click.native="closeToggle('news')" to="/blog/posts"><span>TIN TỨC</span></router-link>
                    </li>
                    <li class="nav-item last-item">
                        <a class="nav-link active" href="#"><span><font-awesome-icon :icon="['fas', 'phone']" class="icon alt"/></span> HOTLINE 0945505885</a>
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
      }
    }
  }
</script>
