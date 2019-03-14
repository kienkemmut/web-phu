<template>
    <div class="screen-popup">
        <div class="card text-center mx-auto" style="width: 50rem">
            <div class="card-header" style="font-weight: bold">
                THÔNG BÁO
            </div>
            <div class="card-body">
                <h5 class="card-title">Xin cảm ơn quý khách. Quý đã đăng ký thành công</h5>
                <p class="card-text">Chúng tôi sẽ phản hồi quý khách trong thời gian sớm nhất</p>
                <a href="#" class="btn btn-go-back" @click="goBack()">QUAY LẠI</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
