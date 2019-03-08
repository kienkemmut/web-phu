<template>
    <div>
        <div class="mt-4 screen-footer">
            <div class="layer">
                <div class="row content-footer">
                    <div class="col-4">
                        <p style="font-weight: bold; font-size: 20px">Địa chỉ liên hệ</p>
                        <p>DỰ ÁN SUNSHINE CITY</p>
                        <p>Địa chỉ: Khu đô thị Ciputra - Nam Thăng Long, Tây Hồ, Hà Nội</p>
                        <br>
                        <p>Hotline</p>
                        <p>Điện thoại: 0945505885</p>
                    </div>
                    <div class="col-4">
                        <p style="font-weight: bold; font-size: 20px">Cam kết bán hàng</p>
                        <ul class="footer-commit">
                            <li>Cung cấp những thông tin nhanh chóng & cập nhật nhất từ chủ đầu tư</li>
                            <li>Cung cấp những thông tin nhanh chóng & cập nhật nhất từ chủ đầu tư</li>
                            <li>Cung cấp những thông tin nhanh chóng</li>
                            <li>Cung cấp những thông tin nhanh</li>
                            <li>Cung cấp những thông tin nhanh chóng & cập nhật nhất từ chủ đầu tư</li>
                            <li>Cung cấp những thông tin nhanh chóng & cập nhật nhất từ chủ đầu tư</li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <p style="text-align: center; font-weight: bold; font-size: 20px">Nhận báo giá</p>
                        <div class="input-group input-group-lg mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" :style="{color: '#424F7E'}" class="icon alt"/></span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Họ và tên*">
                        </div>
                        <div class="input-group input-group-lg mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'phone']" :style="{color: '#424F7E'}" class="icon alt"/></span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Số điện thoại*">
                        </div>
                        <div class="input-group input-group-lg mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><font-awesome-icon :icon="['fas', 'envelope']" :style="{color: '#424F7E'}" class="icon alt"/></span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Email*">
                        </div>
                        <div style="text-align: center">
                            <button type="button" class="btn btn-register-footer">ĐĂNG KÝ NGAY</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
