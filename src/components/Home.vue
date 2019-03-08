<template>
    <div>
        <div class="content-box">
            <p class="title-box">CÁC DỰ ÁN VINHOMES - VINGROUP ĐANG HOT</p>
            <div class="image-line"></div>
            <p class="text-1">Vinhomes là thương hiệu bất động sản uy tín nhất tại Việt Nam do chủ tập đoàn Vingroup xây dựng và phát triển. Các dự án mang thương hiệu Vinhomes của Vingroup luôn nhận được sự quan tâm đặc biệt của người dân Việt Nam bởi các dự án của Vingroup luôn luôn có chất lượng vượt trội, góp phần thay đổi diện mạo của toàn bộ khu vực xung quanh dự án.</p>
            <p>Tính tới năm 2018, Vingroup đã triển khai 11 dự án bất động sản cao cấp tại Hà Nội và con số này sẽ tiếp tục tăng lên không ngừng trong thời gian tới. VinhomesCorp.vn sẽ cập nhật liên tục thông tin và tư vấn về các dự án của tập đoàn Vingroup giúp quý khách hàng nắm được thông tin tổng quan về dự án cũng như dễ dàng hơn trong việc lựa chọn căn hộ ưng ý cho gia đình.</p>
            <p class="text-2">Các dự án đang mở bán hấp dẫn khách hàng nhất hiện nay</p>
            <div class="row box-details-1">
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 chil-box-1">
                    <div class="image-vin-west"></div>
                    <h5 style="font-weight: bold;">VINHOMES WEST POINT</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Đỗ Đức Dục, Hà Nội</li>
                        <li>Loại hình: Chung cư cao cấp, Văn phòng</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button @click="changeDetails()" type="button" class="btn btn-success">XEM CHI TIẾT</button>
                </div>
                <!-- <div class="space"></div> -->
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 chil-box-2">
                    <div class="image-vin-gialam"></div>
                    <h5 style="font-weight: bold;">VINCITY GIA LÂM</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Gia Lâm, Hà Nội</li>
                        <li>Chung cư, Biệt Thự, LK, Shophouse</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button type="button" class="btn btn-success">XEM CHI TIẾT</button>
                </div>
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
            </div>
        </div>
        <div class="content-box">
            <p class="title-box">CÁC DỰ ÁN VINHOMES - VINGROUP SẮP MỞ BÁN</p>
            <div class="image-line"></div>
            <div class="row box-details-2">
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 chil-box-1">
                    <div class="image-vin-west"></div>
                    <h5 style="font-weight: bold;">VINHOMES WEST POINT</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Đỗ Đức Dục, Hà Nội</li>
                        <li>Loại hình: Chung cư cao cấp, Văn phòng</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button type="button" class="btn btn-success">XEM CHI TIẾT</button>
                </div>
                <!-- <div class="space"></div> -->
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 chil-box-2">
                    <div class="image-vin-gialam"></div>
                    <h5 style="font-weight: bold;">VINCITY GIA LÂM</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Gia Lâm, Hà Nội</li>
                        <li>Chung cư, Biệt Thự, LK, Shophouse</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button type="button" class="btn btn-success">XEM CHI TIẾT</button>
                </div>
                <!-- <div class="space"></div> -->
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 chil-box-2">
                    <div class="image-vin-gialam"></div>
                    <h5 style="font-weight: bold;">VINCITY GIA LÂM</h5>
                    <ul class="details-vin">
                        <li>Vị Trí: Gia Lâm, Hà Nội</li>
                        <li>Chung cư, Biệt Thự, LK, Shophouse</li>
                        <li>Tiến độ: Đang cập nhật</li>
                    </ul>
                    <button type="button" class="btn btn-success">XEM CHI TIẾT</button>
                </div>
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
    }
  }
}
</script>
