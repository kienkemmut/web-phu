<template>
  <div class="container-fluid">
  	<div class="row mt-5">
  		<div class="col-8">
  			<ContentPageDetail></ContentPageDetail>
  			<ContentPageOveview></ContentPageOveview>
  			<ContentPageDesign></ContentPageDesign>
  			<ContentPageSmart></ContentPageSmart>
  			<ContentPagePay></ContentPagePay>
  		</div>
  		<div class="col-4">
  			<div class="card card-Custom" style="width: 80%">
			  <div class="card-header card-header-sidebar">
			    Tìm hiểu Vinhomes West
			  </div>
			  <ul class="list-group list-group-flush">
			    <li class="list-group-item">Tổng quan tòa justo odio</li>
			    <li class="list-group-item">Tòa 1</li>
			    <li class="list-group-item">Tòa 1</li>
			    <li class="list-group-item">Tòa 1</li>		
			    <li class="list-group-item">Tòa 1</li>
			    <li class="list-group-item">Tòa 1</li>
			  </ul>
			  <div class="card-header">
			  	<p>Có thể bạn quan tâm?</p>
			  	<p>Có thể bạn quan tâm? Có thể bạn quan tâm? Có thể bạn quan tâm? Có thể bạn quan tâm?</p>
			  	<p>Có thể bạn quan tâm? Có thể bạn quan tâm? Có thể bạn quan tâm? Có thể bạn quan tâm?</p>
			  	<button type="button" class="btn btn-custom">Xem chi tiết</button>
			  </div>
			</div>	
  		</div>
  	</div>
  </div>
</template>

<script>
import ContentPageDetail from '../common/ContentPageDetail.vue'
import ContentPageOveview from '../common/ContentPageOveview.vue'
import ContentPageDesign from '../common/ContentPageDesign.vue'
import ContentPageSmart from '../common/ContentPageSmart.vue'
import ContentPagePay from '../common/ContentPagePay.vue'
export default {
  components: {
  	ContentPageDetail,
  	ContentPageOveview,
  	ContentPageDesign,
  	ContentPageSmart,
  	ContentPagePay
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
