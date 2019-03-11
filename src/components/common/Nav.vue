<template>
    <div >
        <nav class="navbar navbar-expand-lg navbar-light nav-custom">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" style="justify-content: center">
                <ul class="nav nav-pills nav-padding">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">VINHOMES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">VINPEARL</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">VINCOM SHOPHOUSE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">GÓC ĐẦU TƯ</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog/posts">TIN TỨC</router-link>
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
        // msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goHome: function () {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>
