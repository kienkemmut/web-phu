<template>
  <div>
  	<div class="screen-header row">
		<div class="col-xl-3 col-md-5 div-logo-header">
			<img class="logo-header" src="../../assets/images/motbuoc.jpg" @click="changeHome()"/>
		</div>
		<div class="col-xl-9 col-md-7 div-img-header">
			<img class="img-header" src="../../assets/images/city-night.jpg" @click="changeHome()"/>
		</div>
  	</div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeHome: function () {
      this.$router.push({ name: 'Home' })
    },
  }
}
</script>
