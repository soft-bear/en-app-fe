<template>
  <form @submit.stop.prevent="handleSubmit" class="small">
    <div class="row">
      <div class="col-12">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">ข้อมูลส่วนบุคคล</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-3">
                <div class="form-group">
                  <label class="form-label" for="year_class">ชั้นปี</label>
                  <input type="number" class="form-control form-control-sm" id="year_class" name="year_class" required>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="form-group">
                  <label class="form-label" for="gpax">เกรดเฉลี่ยสะสม</label>
                  <input type="number" class="form-control form-control-sm" id="gpax" name="gpax" min="0" max="4" step="any" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="mobile_no">หมายเลขโทรศัพท์</label>
                  <input type="tel" class="form-control form-control-sm" id="mobile_no" name="mobile_no" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="line_id">Line ID <small class="text-danger">(ไม่จำเป็น)</small></label>
                  <input type="text" class="form-control form-control-sm" id="line_id" name="line_id">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="facebook_url">Facebook URL <small class="text-danger">(ไม่จำเป็น)</small></label>
                  <input type="url" class="form-control form-control-sm" id="facebook_url" name="facebook_url">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">ข้อมูลที่อยู่</div>
          <div class="card-body">
            <div class="card outline-eng">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label class="form-label" for="current_address_line_cur">ที่อยู่ปัจจุบัน/หอพัก</label>
                      <input type="text" class="form-control form-control-sm" id="current_address_line_cur" v-model="curAddr.line" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.subDistrict" type="district" @select="setCurAddr" size="default" placeholder="ตำบล" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.district" type="amphoe" @select="setCurAddr" size="default" placeholder="อำเภอ" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.province" type="province" @select="setCurAddr" size="default" placeholder="จังหวัด" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="curAddr.zipcode" type="zipcode" size="default" @select="setCurAddr" placeholder="รหัสไปรษณีย์" required />
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
                    <ThailandAutoComplete v-model="oriAddr.subDistrict" type="district" @select="setOriAddr" size="default" required placeholder="ตำบล" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.district" type="amphoe" @select="setOriAddr" size="default" required placeholder="อำเภอ" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.province" type="province" @select="setOriAddr" size="default" required placeholder="จังหวัด" />
                  </div>
                  <div class="col-12 col-md-3">
                    <ThailandAutoComplete v-model="oriAddr.zipcode" type="zipcode" @select="setOriAddr" size="default" required placeholder="รหัสไปรษณีย์" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">
            <span class="align-middle">ทุนการศึกษาที่เคยได้รับในปีการศึกษาที่ผ่านมา</span>
          </div>
          <div class="card-body">
            <div class="mb-3 row">
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="name">ชื่อทุนการศึกษา</label>
                  <input class="form-control form-control-sm" name="name" />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="fund">จำนวนเงิน</label>
                  <input class="form-control form-control-sm" name="money" type="number" />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="scholarship_type">ประเภททุน</label>
                  <select name="scholarship_type" required class="form-control form-control-sm" id="scholarship_type">
                    <option value="">== เลือก ==</option>
                    <option value="y">รายปี</option>
                    <option value="c">ต่อเนื่อง</option>
                  </select>
                </div>
              </div>
              <div class="mb-3 col-md-2">
                <div>
                  <label class="form-label" for="addItem">&nbsp;</label><br />
                  <div class="d-grid">
                    <button class="btn btn-primary btn-sm btn-block">
                      เพิ่ม
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">ประวัติการรับทุนการศึกษา</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>ชื่อทุนการศึกษา</th>
                      <th class="d-none d-xl-table-cell">จำนวนเงิน</th>
                      <th class="d-none d-xl-table-cell">ประเภททุน</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="text-center">
                        <span class="align-middle">ยังไม่มีข้อมูล</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-header bg-eng text-white">
            <span class="align-middle">กองทุนให้กู้ยืมเพื่อการศึกษา (กยศ.,กรอ.)</span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="">กองทุนให้กู้ยืมเพื่อการศึกษา (กยศ.,กรอ.)</label>
                  <select id="studentloan" required class="form-control form-control-sm">
                    <option value="">== เลือก ==</option>
                    <option value="0">ไม่ได้กู้</option>
                    <option value="1">กู้ยืมค่าธรรมเนียมการศึกษา</option>
                    <option value="2">กู้ยืมค่าครองชีพรายเดือน</option>
                    <option value="3">กู้ยืมธรรมเนียมการศึกษาและค่าครองชีพรายเดือน</option>
                  </select>
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
import { mapActions } from 'vuex'
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
    ...mapActions({
      nextStep: 'application/nextStep',
    }),
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
    messageBox(data, error = false) {
      return this.$bvModal.msgBoxOk(data, {
        title: !error ? 'สำเร็จ' : 'ผิดพลาด',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: !error ? 'success' : 'danger',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    },
    handleSubmit() {
      if (Object.values(this.curAddr).some(value => value === null || value === undefined || value === '')) {
        return this.messageBox('กรุณาระบบข้อมูลที่อยู่ปัจจุบันให้ครบถ้วน', true)
      }
      if (Object.values(this.oriAddr).some(value => value === null || value === undefined || value === '')) {
        return this.messageBox('กรุณาระบบข้อมูลที่อยู่ตามภูมิลำเนาให้ครบถ้วน', true)
      }

      this.nextStep(this.$store.state.application.curStep)
    }
  }
}
</script>
