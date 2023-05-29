<template>
  <form @submit.stop.prevent="handleSubmit" class="small">
    <div class="row">
      <div class="col-12">
        <div class="card border-primary">
          <div class="card-header bg-primary text-white">ข้อมูลส่วนบุคคล</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="year_class">ชั้นปี</label>
                  <input type="text" class="form-control form-control-sm" id="year_class" name="year_class">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="gpax">เกรดเฉลี่ยสะสม</label>
                  <input type="text" class="form-control form-control-sm" id="gpax" name="gpax">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="mobile_no">หมายเลขโทรศัพท์</label>
                  <input type="text" class="form-control form-control-sm" id="mobile_no" name="mobile_no">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="line_id">Line ID</label>
                  <input type="text" class="form-control form-control-sm" id="line_id" name="line_id">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label class="form-label" for="facebook_url">Facebook URL</label>
                  <input type="text" class="form-control form-control-sm" id="facebook_url" name="facebook_url">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card border-primary">
          <div class="card-header bg-primary text-white">ข้อมูลที่อยู่</div>
          <div class="card-body">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label" for="current_address_line_cur">ที่อยู่ปัจจุบัน/หอพัก</label>
                      <input type="text" class="form-control form-control-sm" id="current_address_line_cur" v-model="curAddr.line">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.subDistrict" type="district" @select="setCurAddr"
                      size="default" placeholder="ตำบล" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.district" type="amphoe" @select="setCurAddr" size="default"
                      placeholder="อำเภอ" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.province" type="province" @select="setCurAddr" size="default"
                      placeholder="จังหวัด" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.zipcode" type="zipcode" size="default" @select="setCurAddr"
                      placeholder="รหัสไปรษณีย์" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label" for="current_address_line_ori">ที่อยู่ตามภูมิลำเนา</label>
                      <input type="text" class="form-control form-control-sm" id="current_address_line_ori" v-model="oriAddr.line">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.subDistrict" type="district" @select="setOriAddr"
                      size="default" placeholder="ตำบล" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.district" type="amphoe" @select="setOriAddr" size="default"
                      placeholder="อำเภอ" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.province" type="province" @select="setOriAddr" size="default"
                      placeholder="จังหวัด" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.zipcode" type="zipcode" size="default" @select="setOriAddr"
                      placeholder="รหัสไปรษณีย์" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col text-center">
        <button class="btn btn-sm btn-success" type="submit">ดำเนินการต่อไป &gt;&gt;</button>
      </div>
    </div>
  </form>
</template>

<script>
import ThailandAutoComplete from 'vue-thailand-address-autocomplete'

export default {
  components: {
    ThailandAutoComplete
  },
  data() {
    return {
      loading: false,
      curAddr: {
        line: '',
        subDistrict: '',
        district: '',
        province: '',
        zipcode: '',
      },
      oriAddr: {
        line: '',
        subDistrict: '',
        district: '',
        province: '',
        zipcode: '',
      },
    }
  },
  methods: {
    setCurAddr(address) {
      this.curAddr.subDistrict = address.district
      this.curAddr.district = address.amphoe
      this.curAddr.province = address.province
      this.curAddr.zipcode = address.zipcode
    },
    setOriAddr(address) {
      this.oriAddr.subDistrict = address.district
      this.oriAddr.district = address.amphoe
      this.oriAddr.province = address.province
      this.oriAddr.zipcode = address.zipcode
    },
    handleSubmit() { }
  }
}
</script>
