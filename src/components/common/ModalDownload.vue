<template>
    <div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle" style="text-align: center; color: #54608A; font-weight: bold">Quý khách vui lòng điền chính xác thông tin. Hệ thống sẽ phản hồi lại cho quý khách trong 5 phút</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-12">
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
                        </div>
                    </div>
                    <div class="mb-3" style="text-align: center">
                        <button type="button" class="btn btn-register-modal-footer">ĐĂNG KÝ NGAY</button>
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
      }
    },
    methods: {
    }
  }
</script>
