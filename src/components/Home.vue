<template>
    <div>
        <div class="content-box">
            <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    controls
                    :interval="4000"
                    indicators
            >
                <b-carousel-slide caption="" :img-src="require('../assets/images/slide-1.jpg')" @click.native="changeDetails()"/>
                <b-carousel-slide caption="" :img-src="require('../assets/images/slide-2.jpg')" />
            </b-carousel>
            <form class="mt-3" action="https://jumprock.co/mail/kienkem" method="post">
                <div class="form-group form-register-home">
                    <label style="font-weight: bold; font-size: 24px; color: #ffffff; margin-bottom: 1em">Nhận trọn bộ tài liệu</label>
                    <div class="form-group row">
                        <div class="input-group col-lg-3 col-sm-12 mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" :style="{color: '#424F7E'}" class="icon alt"/></span>
                            </div>
                            <input type="text" name="name" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Họ và tên*">
                        </div>
                        <div class="input-group col-lg-3 col-sm-12 mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'phone']" :style="{color: '#424F7E'}" class="icon alt"/></span>
                            </div>
                            <input type="text" name="phone" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Số điện thoại*">
                        </div>
                        <div class="input-group col-lg-3 col-sm-12 mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'envelope']" :style="{color: '#424F7E'}" class="icon alt"/></span>
                            </div>
                            <input type="email" name="email" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Email*">
                        </div>
                        <div class="col-lg-3 col-sm-12">
                            <button type="submit" class="btn btn-custom-register-home">ĐĂNG KÝ NGAY</button>
                            <input type="hidden" name="after" value="http://localhost:8080/category/notification">
                        </div>
                    </div>
                </div>
            </form>
            <p class="title-box mt-2">CÁC DỰ ÁN VINHOMES - VINGROUP ĐANG HOT</p>
            <div class="image-line"></div>
            <p class="text-1">Vinhomes là thương hiệu bất động sản uy tín nhất tại Việt Nam do chủ tập đoàn Vingroup xây dựng và phát triển. Các dự án mang thương hiệu Vinhomes của Vingroup luôn nhận được sự quan tâm đặc biệt của người dân Việt Nam bởi các dự án của Vingroup luôn luôn có chất lượng vượt trội, góp phần thay đổi diện mạo của toàn bộ khu vực xung quanh dự án.</p>
            <p>Tính tới năm 2018, Vingroup đã triển khai 11 dự án bất động sản cao cấp tại Hà Nội và con số này sẽ tiếp tục tăng lên không ngừng trong thời gian tới. VinhomesCorp.vn sẽ cập nhật liên tục thông tin và tư vấn về các dự án của tập đoàn Vingroup giúp quý khách hàng nắm được thông tin tổng quan về dự án cũng như dễ dàng hơn trong việc lựa chọn căn hộ ưng ý cho gia đình.</p>
            <p class="text-2">Các dự án đang mở bán hấp dẫn khách hàng nhất hiện nay</p>
            <div class="row box-details-1 mb-3">
                <div class="col-lg-6 col-sm-12 chil-box-1">
                    <div class="image-vin-west" @click="changeDetails()"></div>
                    <h5 style="font-weight: bold;">VINHOMES WEST POINT</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Đỗ Đức Dục, Hà Nội</li>
                        <li>Loại hình: Chung cư cao cấp, Văn phòng</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button @click="changeDetails()" type="button" class="btn btn-watch-details">XEM CHI TIẾT</button>
                </div>
                <div class="col-lg-6 col-sm-12  chil-box-2">
                    <div class="image-vin-gialam"></div>
                    <h5 style="font-weight: bold;">VINCITY GIA LÂM</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Gia Lâm, Hà Nội</li>
                        <li>Chung cư, Biệt Thự, LK, Shophouse</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button type="button" class="btn btn-watch-details">XEM CHI TIẾT</button>
                </div>
            </div>
            <h4 style="text-align: left; font-weight: bold; color: #54608A;">Tin tức mới nhất</h4>
            <div class="row mb-3 screen-block-new-home">
                <div class="col-lg-4 block-new-home">
                    <img class="img-block-news" src="../assets/images/vincity-ocean-park-new-posts.jpg" @click="changeNewDetails()"/>
                    <p class="title-block-news" @click="changeNewDetails()">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                    <p style="color: rgb(121,122,123);">18/03/2019</p>
                    <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                </div>
                <div class="col-lg-4 block-new-home">
                    <img class="img-block-news" src="../assets/images/vincity-ocean-park-new-posts.jpg"/>
                    <p class="title-block-news">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                    <p style="color: rgb(121,122,123);">18/03/2019</p>
                    <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                </div>
                <div class="col-lg-4 block-new-home" style="border: none !important;">
                    <img class="img-block-news" src="../assets/images/vincity-ocean-park-new-posts.jpg"/>
                    <p class="title-block-news">Đối tác thi công biển hồ nước mặn tại Vincity Ocean Park “khủng” cỡ nào?</p>
                    <p style="color: rgb(121,122,123);">18/03/2019</p>
                    <p>Theo thông tin Vingroup mới hé lộ, dự án biển hồ nước mặn rộng 6.1 ha tại khu đô thị Vincity Ocean Park Gia Lâm sẽ do đơn vị Crystal Lagoons triển khai thi công xây dựng. Liệu Crystal …</p>
                </div>
            </div>
            <div style="text-align: center">
                <button type="button" class="btn btn-watch-more-home" @click="changeNews()">XEM THÊM</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
    changeDetails: function () {
      this.$router.push({ name: 'Vinhomeswest' })
    },
    changeNews: function () {
      this.$router.push({ name: 'Posts' })
    },
    changeNewDetails: function () {
      this.$router.push({ name: 'Doitacthicong' })
    }
  }
}
</script>
