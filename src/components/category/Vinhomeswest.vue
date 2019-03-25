<template>
  	<div>
  	<div class="row mt-2 screen-home-vip">
		<div class="mb-2 col-12">
			<b-carousel
					id="carousel-fade"
					style="text-shadow: 0px 0px 2px #000"
					:interval="4000"
			>
				<b-carousel-slide id="slide-1" caption="" :img-src="require('../../assets/images/slide-1.jpg')" @click.native="clickRegister()"/>
			</b-carousel>
		</div>
  		<div class="col-lg-9 col-sm-12 content-page-padding">
			<div class="content-page-detail">
				<p class="text1">SUNSINE CTTY - NGHỆ THUẬT SỐNG THƯỢNG LƯU</p>
				<p class="text1">TUYỆT TÁC MỚI CỦA SUNSINE GROUP</p>
				<div class="image-block-vin"><img class="image-vinhomeswest mb-2" :src="require('../../assets/images/slide-1.jpg')"/></div>
				<p class="text1">TUYỆT TÁC MỚI CỦA SUNSINE GROUP</p>
				<div class="text-pr">
					<ul>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
					</ul>
				</div>
				<form class="form-mail" action="https://jumprock.co/mail/kienkem" method="post">
					<div class="form-group form-mail-custom">
						<label style="font-weight: bold; font-size: 24px; color: #ffffff">Nhận trọn bộ tài liệu</label>
						<div class="form-group row">
							<div class="input-group col-lg-3 col-sm-12 mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" :style="{color: '#424F7E'}" class="icon alt"/></span>
								</div>
								<input type="text" name="name" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Họ và tên*">
							</div>
							<div class="input-group col-lg-3 col-sm-12 mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><font-awesome-icon :icon="['fas', 'phone']" :style="{color: '#424F7E'}" class="icon alt"/></span>
								</div>
								<input type="text" name="phone" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Số điện thoại*">
							</div>
							<div class="input-group col-lg-3 col-sm-12 mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text"><font-awesome-icon :icon="['fas', 'envelope']" :style="{color: '#424F7E'}" class="icon alt"/></span>
								</div>
								<input type="email" name="email" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Email*">
							</div>
							<div class="col-lg-3 col-sm-12 mb-3">
								<button type="submit" class="btn btn-register-now">Đăng ký ngay</button>
								<input type="hidden" name="after" value="http://localhost:8080/category/notification">
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="content-page-overview mt-3">
				<p class="text-overview" style="text-align: center">TỔNG QUAN SUNSINE CITY VÕ CHÍ CÔNG</p>
				<div class="image-line-overview"></div>
				<p class="mt-2" style="text-align: center;">TÔNG QUAN DỰ ÁN</p>
				<div class="oveview-li">
					<ul>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
						<li>We can also style lists with colors, to make them look a little more interesting.</li>
					</ul>
				</div>
				<img class="image-vinhom-stay mb-3" :src="require('../../assets/images/slide-1.jpg')"/>
				<p style="font-weight: bold;">Vị trí Đại Mỗ Tây Mỗ</p>
				<p>We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting</p>
				<p>Dự án Vin chỉ cách:</p>
				<div class="pl-4">
					<p>500m đến thiên đường bảo sơn</p>
					<p>500m đến thiên đường bảo sơn</p>
					<p>500m đến thiên đường bảo sơn</p>
					<p>500m đến thiên đường bảo sơn</p>
					<p>500m đến thiên đường bảo sơn</p>
				</div>
				<img class="image-vinhom-stay mb-3" :src="require('../../assets/images/slide-1.jpg')"/>
			</div>
			<div class="content-page-design">
				<p class="text-page-design">MẶT BẰNG VÀ THIẾT KẾ CĂN HỘ SUNSINE CITY</p>
				<div class="image-line-design mb-3"></div>
				<p>We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting</p>
				<p>We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting</p>
				<div>
					<b-card no-body>
						<b-tabs card nav-class="justify-content-center">
							<b-tab no-body title="Picture 1">
								<b-card-img bottom :src="require('../../assets/images/slide-1.jpg')" />
								<b-card-footer>Picture 1 footer</b-card-footer>
							</b-tab>

							<b-tab no-body title="Picture 2">
								<b-card-img bottom :src="require('../../assets/images/slide-1.jpg')" />
								<b-card-footer>Picture 2 footer</b-card-footer>
							</b-tab>

							<b-tab no-body title="Picture 3">
								<b-card-img bottom :src="require('../../assets/images/slide-1.jpg')" />
								<b-card-footer>Picture 3 footer</b-card-footer>
							</b-tab>

							<b-tab no-body title="Picture 4">
								<b-card-img bottom :src="require('../../assets/images/slide-1.jpg')" />
								<b-card-footer>Picture 3 footer</b-card-footer>
							</b-tab>
						</b-tabs>
					</b-card>
				</div>
				<div style="text-align: center">
					<button type="button" class="btn mt-3 btn-download-pay" data-toggle="modal" data-target="#exampleModalCenter">TẢI MẶT BẰNG - BẢNG GIÁ - CHÍNH SÁCH</button>
				</div>
			</div>
			<div class="page-smart-vinhome mt-3">
				<p class="text-page-smart">CUỘC SỐNG TIỆN NGHI VÀ ĐẲNG CẤP TẠI SUNSINE CITY</p>
				<div class="image-line-smart mb-3"></div>
				<p>We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little more interesting</p>
				<div class="row">
					<div class="col-lg-6 col-sm-12 div-smart-padding-mobile">
						<p>TIỆN ÍCH NỘI KHU</p>
						<p>e can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little</p>
						<div class="text-pr">
							<ul>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-6 col-sm-12 div-smart-padding-mobile">
						<p>TIỆN ÍCH NỘI KHU</p>
						<p>e can also style lists with colors, to make them look a little more interesting We can also style lists with colors, to make them look a little</p>
						<div class="text-pr">
							<ul>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
								<li>We can also style lists with colors, to make them look a little more interesting.</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-sm-12 div-image-transition mb-1">
						<!--<div class="image-vinhom-stay-1"></div>-->
						<img class="image-vinhom-stay-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
					<div class="col-lg-6 col-sm-12 div-image-transition mb-1">
						<img class="image-vinhom-stay-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-12 div-image-transition mb-1">
						<!--<div class="image-vinhomeswest-1"></div>-->
						<img class="image-vinhomeswest-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
					<div class="col-lg-4 col-sm-12 div-image-transition mb-1">
						<img class="image-vinhomeswest-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
					<div class="col-lg-4 col-sm-12 div-image-transition mb-1">
						<img class="image-vinhomeswest-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-12 div-image-transition mb-1">
						<img class="image-vinhomeswest-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
					<div class="col-lg-4 col-sm-12 div-image-transition mb-1">
						<img class="image-vinhomeswest-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
					<div class="col-lg-4 col-sm-12 div-image-transition">
						<img class="image-vinhomeswest-1" :src="require('../../assets/images/slide-1.jpg')"/>
					</div>
				</div>
			</div>
			<div class="screen-page-pay mt-3">
				<p class="text-page-pay">GIÁ BÁN VÀ TIẾN ĐỘ THANH TOÁN</p>
				<div class="image-line-pay"></div>
				<div class="row">
					<div class="col-lg-12 col-sm-12 div-padding-tablets" style="text-align: left;">
						<p>Đặt cọc</p>
						<p>Đợt 1</p>
						<p>Đợt 2</p>
						<p>Đợt 3</p>
						<p>Đợt 4</p>
						<p>Đợt 5</p>
						<p>Đợt 6</p>
						<p>Đợt 7</p>
						<p>Đợt 8</p>
					</div>
					<form class="form-mail form-register-custom" action="https://jumprock.co/mail/kienkem" method="post">
						<div class="form-group form-mail-custom">
							<label style="font-weight: bold; font-size: 24px; color: #424F7E">Nhận trọn bộ tài liệu</label>
							<div class="form-group row pl-3">
								<div class="input-group col-lg-4 col-sm-12 mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text"><font-awesome-icon :icon="['fas', 'user']" :style="{color: '#424F7E'}" class="icon alt"/></span>
									</div>
									<input type="text" name="name" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Họ và tên*">
								</div>
								<div class="input-group col-lg-4 col-sm-12 mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text"><font-awesome-icon :icon="['fas', 'phone']" :style="{color: '#424F7E'}" class="icon alt"/></span>
									</div>
									<input type="text" name="phone" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Số điện thoại*">
								</div>
								<div class="input-group col-lg-4 col-sm-12 mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text"><font-awesome-icon :icon="['fas', 'envelope']" :style="{color: '#424F7E'}" class="icon alt"/></span>
									</div>
									<input type="email" name="email" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Email*">
								</div>
							</div>
							<div style="text-align: center">
								<button type="submit" class="btn btn-register-now">ĐĂNG KÝ NGAY</button>
								<input type="hidden" name="after" value="http://localhost:8080/category/notification">
							</div>
						</div>
					</form>
				</div>
			</div>
  		</div>
  		<div class="col-3">
  			<div class="card card-Custom" style="width: 100%">
			  <div class="card-header card-header-sidebar">
			    Tìm hiểu Vinhomes West
			  </div>
			  <!--<ul class="list-group list-group-flush">-->
			    <!--<li class="list-group-item">SUNSINE CTTY - NGHỆ THUẬT SỐNG THƯỢNG LƯU</li>-->
			    <!--<li class="list-group-item">TỔNG QUAN SUNSINE CITY VÕ CHÍ CÔNG</li>-->
			    <!--<li class="list-group-item">MẶT BẰNG VÀ THIẾT KẾ CĂN HỘ SUNSINE CITY</li>-->
			    <!--<li class="list-group-item">CUỘC SỐNG TIỆN NGHI VÀ ĐẲNG CẤP TẠI SUNSINE CITY</li>-->
			    <!--<li class="list-group-item">GIÁ BÁN VÀ TIẾN ĐỘ THANH TOÁN</li>-->
			  <!--</ul>-->
				<button type="button" v-scroll-to="{el: '.content-page-detail', offset: scrollOffset, duration: 1000}" class="btn btn-sidebar-details mb-1 mt-1">SUNSINE CTTY - NGHỆ THUẬT</button>
				<button type="button" v-scroll-to="{el: '.content-page-overview', offset: scrollOffset, duration: 1000}" class="btn btn-sidebar-overview mb-1">TỔNG QUAN SUNSINE CITY</button>
				<button type="button" v-scroll-to="{el: '.content-page-design', offset: scrollOffset, duration: 1000}" class="btn btn-sidebar-design mb-1">MẶT BẰNG VÀ THIẾT KẾ</button>
				<button type="button" v-scroll-to="{el: '.page-smart-vinhome', offset: scrollOffset, duration: 1000}" class="btn btn-sidebar-smart mb-1">CUỘC SỐNG TIỆN NGHI VÀ ĐẲNG CẤP</button>
				<button type="button" v-scroll-to="{el: '.screen-page-pay', offset: scrollOffset, duration: 1000}" class="btn btn-sidebar-pay mb-1">GIÁ BÁN VÀ TIẾN ĐỘ THANH TOÁN</button>
			  <!--<div class="card-header logo-banner" @click="btnRegisterBanner"></div>-->
				<img class="card-header logo-banner" :src="require('../../assets/images/vinhomeswest.jpg')" @click="btnRegisterBanner"/>
			</div>	
  		</div>
  	</div>
	  <ModalDownload></ModalDownload>
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
      scrollOffset: -window.innerWidth * 0.035
    }
  },
  created: function () {
    // console.log(window.innerWidth,this.scrollOffset, 'window width')
  },
  methods: {
  	clickRegister: function () {
  		console.log('123123')
  		$('#exampleModalCenter').modal('show')
  	},
  	btnRegisterBanner: function () {
  		$('#exampleModalCenter').modal('show')
  	}
  }
}
</script>
