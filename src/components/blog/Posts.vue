<template>
    <div class="screen-posts">
        <div class="screen-new-posts mt-3">
            <h5 class="mb-3">Tin tức</h5>
            <div class="row">
                <div class="col-lg-9 col-sm-12 block-new-posts">
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <img class="posts-image-1" :src="require('../../assets/images/vincity-ocean-park-new-posts.jpg')" @click="watchDetailsPost()"/>
                        </div>
                        <div class="col-lg-6 col-sm-12 div-res-image">
                            <p style="font-weight: bold; cursor: pointer;" @click="watchDetailsPost()">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <button type="button" class="btn" style="padding: 0 !important;" @click="watchDetailsPost()">Xem chi tiết</button>
                            <br><br><br>
                        </div>
                    </div>
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <img class="posts-image-1" :src="require('../../assets/images/vincity-ocean-park-new-posts.jpg')" @click="watchDetailsPost()"/>
                        </div>
                        <div class="col-lg-6 col-sm-12 div-res-image">
                            <p style="font-weight: bold; cursor: pointer;" @click="watchDetailsPost()">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <button type="button" class="btn" style="padding: 0 !important;" @click="watchDetailsPost()">Xem chi tiết</button>
                            <br><br><br>
                        </div>
                    </div>
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <img class="posts-image-1" :src="require('../../assets/images/vincity-ocean-park-new-posts.jpg')" @click="watchDetailsPost()"/>
                        </div>
                        <div class="col-lg-6 col-sm-12 div-res-image">
                            <p style="font-weight: bold; cursor: pointer;" @click="watchDetailsPost()">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <button type="button" class="btn" style="padding: 0 !important;" @click="watchDetailsPost()">Xem chi tiết</button>
                            <br><br><br>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 sidebar-posts">
                    <img class="details-posts-image" :src="require('../../assets/images/vincity-ocean-park-new-posts.jpg')" @click="showBanner()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalDownload from '../common/ModalDownload.vue'
  export default {
    components: {
        ModalDownload
    },
    data () {
      return {
      }
    },
    methods: {
      watchDetailsPost: function () {
        this.$router.push({ name: 'Doitacthicong' })
        console.log('sss')
      },
      showBanner: function () {
        $('#exampleModalCenter').modal('show')
      }
    }
  }
</script>
