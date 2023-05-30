<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card outline-eng">
          <div class="card-header bg-eng text-white">ข้อมูลส่วนบุคคล</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-3">
                <div class="form-group">
                  <label class="form-label" for="year_class">ชั้นปี</label>
                  <input type="number" class="form-control form-control-sm" id="year_class" v-model="form.year_class" required>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="form-group">
                  <label class="form-label" for="gpax">เกรดเฉลี่ยสะสม</label>
                  <input type="number" class="form-control form-control-sm" id="gpax" v-model="form.gpax" min="0" max="4" step="any" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="mobile_no">หมายเลขโทรศัพท์</label>
                  <input type="tel" class="form-control form-control-sm" id="mobile_no" v-model="form.mobile_no" required>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="line_id">Line ID <small class="text-danger">(ไม่จำเป็น)</small></label>
                  <input type="text" class="form-control form-control-sm" id="line_id" v-model="form.line_id">
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label class="form-label" for="facebook_url">Facebook URL <small class="text-danger">(ไม่จำเป็น)</small></label>
                  <input type="url" class="form-control form-control-sm" id="facebook_url" v-model="form.facebook_url">
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
                      <input type="text" class="form-control form-control-sm" id="current_address_line_cur" v-model="form.curAddr.line" required>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <label>ตำบล</label>
                    <ThailandAutoComplete v-model="form.curAddr.subDistrict" type="district" @select="setCurAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>อำเภอ</label>
                    <ThailandAutoComplete v-model="form.curAddr.district" type="amphoe" @select="setCurAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>จังหวัด</label>
                    <ThailandAutoComplete v-model="form.curAddr.province" type="province" @select="setCurAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>รหัสไปรษณีย์</label>
                    <ThailandAutoComplete v-model="form.curAddr.zipcode" type="zipcode" size="default" @select="setCurAddr" required />
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
                      <input type="text" class="form-control form-control-sm" id="current_address_line_ori" v-model="form.oriAddr.line">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3">
                    <label>ตำบล</label>
                    <ThailandAutoComplete v-model="form.oriAddr.subDistrict" type="district" @select="setOriAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>อำเภอ</label>
                    <ThailandAutoComplete v-model="form.oriAddr.district" type="amphoe" @select="setOriAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>จังหวัด</label>
                    <ThailandAutoComplete v-model="form.oriAddr.province" type="province" @select="setOriAddr" size="default" required />
                  </div>
                  <div class="col-12 col-md-3">
                    <label>รหัสไปรษณีย์</label>
                    <ThailandAutoComplete v-model="form.oriAddr.zipcode" type="zipcode" @select="setOriAddr" size="default" required />
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
            <form @submit.stop.prevent="addScholarship">
              <div class="mb-3 row">
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="scholarship_name">ชื่อทุนการศึกษา</label>
                    <input class="form-control form-control-sm" id="scholarship_name" required v-model="scholarship.name" />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="money">จำนวนเงิน</label>
                    <input class="form-control form-control-sm" id="money" type="number" required v-model="scholarship.money" />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="scholarship_type">ประเภททุน</label>
                    <select required class="form-control form-control-sm" id="scholarship_type" v-model="scholarship.is_ongoing">
                      <option value="">== เลือก ==</option>
                      <option value="0">รายปี</option>
                      <option value="1">ต่อเนื่อง</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 col-md-2">
                  <div>
                    <label class="form-label">&nbsp;</label><br />
                    <div class="d-grid">
                      <button class="btn btn-primary btn-sm btn-block" type="submit">
                        เพิ่ม
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
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
                  <tbody v-if="form.scholarships.length">
                    <tr v-for="(scholarship, index) in form.scholarships" :key="index">
                      <td>{{ scholarship.name }}</td>
                      <td>{{ scholarship.money }}</td>
                      <td>{{ scholarship.is_ongoing == '1' ? 'ต่อเนื่อง' : 'รายปี' }}</td>
                      <td>
                        <button class="btn btn-xs btn-danger" @click="delScholarship(index)">ลบ</button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
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
                  <label for="studentloan">กองทุนให้กู้ยืมเพื่อการศึกษา (กยศ.,กรอ.)</label>
                  <select id="studentloan" required class="form-control form-control-sm" v-model="form.studentloan">
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
        <button class="btn btn-sm btn-success" type="submit" @click="handleSubmit">ดำเนินการต่อไป &gt;&gt;</button>
      </div>
    </div>
  </div>
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
      form: {
        year_class: '',
        gpax: '',
        mobile_no: '',
        line_id: '',
        facebook_url: '',
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
        scholarships: [],
        studentloan: ''
      },
      scholarship: {
        name: '',
        money: '',
        is_ongoing: '',
      },
    }
  },
  methods: {
    ...mapActions({
      nextStep: 'application/nextStep',
    }),
    setCurAddr(address) {
      this.form.curAddr.subDistrict = address.district
      this.form.curAddr.district = address.amphoe
      this.form.curAddr.province = address.province
      this.form.curAddr.zipcode = address.zipcode
    },
    setOriAddr(address) {
      this.form.oriAddr.subDistrict = address.district
      this.form.oriAddr.district = address.amphoe
      this.form.oriAddr.province = address.province
      this.form.oriAddr.zipcode = address.zipcode
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
    delScholarship(index) {
      const newArray = [...this.form.scholarships]
      newArray.splice(index, 1)
      this.form.scholarships = newArray
    },
    addScholarship() {
      this.form.scholarships.push({
        name: this.scholarship.name,
        money: this.scholarship.money,
        is_ongoing: this.scholarship.is_ongoing
      })
      Object.keys(this.scholarship).forEach(i => this.scholarship[i] = '')
    },
    async handleSubmit() {
      this.loading = true
      if (Object.values(this.form.curAddr).some(value => value === null || value === undefined || value === '')) {
        return this.messageBox('กรุณาระบบข้อมูลที่อยู่ปัจจุบันให้ครบถ้วน', true)
      }
      if (Object.values(this.form.oriAddr).some(value => value === null || value === undefined || value === '')) {
        return this.messageBox('กรุณาระบบข้อมูลที่อยู่ตามภูมิลำเนาให้ครบถ้วน', true)
      }

      this.nextStep(this.$store.state.application.curStep)
      this.loading = false
    }
  }
}
</script>
