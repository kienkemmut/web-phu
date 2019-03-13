<template>
    <div class="screen-posts">
        <div class="screen-new-posts mt-3">
            <h5 class="mb-3">Tin tức</h5>
            <div class="row">
                <div class="col-lg-9 col-sm-12 block-new-posts">
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <div class="posts-image-1"></div>
                        </div>
                        <div class="col-lg-6 col-sm-12 div-res-image">
                            <p style="font-weight: bold">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <button type="button" class="btn" style="padding: 0 !important;" @click="watchDetailsPost()">Xem chi tiết</button>
                            <br><br><br><br>
                        </div>
                    </div>
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <div class="posts-image-1"></div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <p style="font-weight: bold">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <a>Xem chi tiết</a>
                            <br><br><br><br>
                        </div>
                    </div>
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <div class="posts-image-1"></div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <p style="font-weight: bold">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <a>Xem chi tiết</a>
                            <br><br><br><br>
                        </div>
                    </div>
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <div class="posts-image-1"></div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <p style="font-weight: bold">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <a>Xem chi tiết</a>
                            <br><br><br><br>
                        </div>
                    </div>
                    <div class="row block-1 mb-3">
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <div class="posts-image-1"></div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-12 div-res-image">
                            <p style="font-weight: bold">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                            <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                            <a>Xem chi tiết</a>
                            <br><br><br><br>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 sidebar-posts">
                    <p style="font-weight: bold; text-align: center">Có thể bạn quan tâm?</p>
                    <p>Tháng 6/2018, Vingroup đã chính thức mở bán dự án Vinhomes West Point ra thị trường bất động sản thủ đô Hà Nội.</p>
                    <p>Vinhomes West Point đang được xem là dự án "Hot" nhất trong năm 2018 khi sở hữu 2 mặt tiền rộng lớn đường Phạm Hùng & Đỗ Đức Dục cùng loại hình căn hộ chung cư cao cấp & Officetel độc đáo.</p>
                    <div class="mb-3" style="text-align: center">
                        <button type="button" class="btn btn-sidebar-posts-details">XEM CHI TIẾT</button>
                    </div>
                    <div class="details-posts-image"></div>
                </div>
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
      watchDetailsPost: function () {
        this.$router.push({ name: 'Doitacthicong' })
        console.log('sss')
      }
    }
  }
</script>
