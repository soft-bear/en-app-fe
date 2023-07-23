<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">เหตุผลความจำเป็นที่จะขอรับทุน</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                    <label class="form-label" for="reason">ระบุความจำเป็นในการขอรับทุน</label>
                    <b-form-textarea id="reason" v-model="form.reason" pl rows="3" max-rows="6"></b-form-textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ผู้ให้การอุปการะมีภาระค่าใช้จ่ายส่งเสียเลียงดูผู้ที่อยู่ในอุปการะที่ไม่มีรายได้</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label>ผู้ที่อยู่ในอุปการะกำลังศึกษาในระดับประถมหรือไม่ได้ศึกษา</label>
                        <input v-model="form.sponsor.choice1" type="number" required min="0" class="form-control form-control-sm">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label>ผู้ที่อยู่ในอุปการะกำลังศึกษาในระดับมัธยม</label>
                        <input v-model="form.sponsor.choice2" type="number" required min="0" class="form-control form-control-sm">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label>ผู้ที่อยู่ในอุปการะกำลังศึกษาในระดับอุดมศึกษา</label>
                        <input v-model="form.sponsor.choice3" type="number" required min="0" class="form-control form-control-sm">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label>อุปการะญาติที่ไม่มีรายได้มีโรคประจำตัวไม่สามารถทำงานประกอบอาชีพได้</label>
                        <input v-model="form.sponsor.choice4" type="number" required min="0" class="form-control form-control-sm">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <label>อุปการะญาติที่ไม่มีรายได้และเป็นผู้ป่วยติดเตียง</label>
                        <input v-model="form.sponsor.choice5" type="number" required min="0" class="form-control form-control-sm">
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ข้อมูลอื่น ๆ</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>รายได้ครอบครัว หรือรายได้ผู้อุปการะต่อปี</label>
                  <select v-model="form.option.choice1" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option1" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>สถานะครอบครัว</label>
                  <select v-model="form.option.choice2" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option2" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>จำนวนเงินที่นักศึกษาได้รับจากผู้อุปการะ (ไม่รวมเงินกู้ยืมจาก กยศ./กรอ.)</label>
                  <select v-model="form.option.choice3" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option3" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>ค่าใช้จ่ายรายเดือนของนักศึกษา (ไม่รวมค่าหอพัก)</label>
                  <select v-model="form.option.choice5" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option5" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>ค่าหอพักของนักศึกษา (รวมค่าน้ำค่าไฟฟ้า)</label>
                  <select v-model="form.option.choice6" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option6" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>บ้านที่อยู่อาศัย</label>
                  <select v-model="form.option.choice7" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option7" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>มีจิตอาสาบำเพ็ญประโยชน์ (1 ปีการศึกษาที่ผ่านมา)</label>
                  <select v-model="form.option.choice8" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option8" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>มีความขยันหมั่นเพียร นักศึกษาทางานหารายได้เพื่อแบ่งเบาภาระครอบครัว</label>
                  <select v-model="form.option.choice9" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option9" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-12">
                <div class="form-group">
                  <label>ผลการเรียนและการทำงาน</label>
                  <select v-model="form.option.choice10" class="form-control form-control-sm" required>
                    <option value="">== เลือก ==</option>
                    <option :value="data.id" v-for="(data, index) in option10" :key="index">{{ data.value }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">เอกสารที่เกี่ยวข้อง&nbsp;<small class="text-danger">ไม่เกิน 10MB</small></div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                    <label class="form-label" for="attachment">เลือกเอกสารประเภท PDF</label>
                    <b-form-file id="attachment" @change="handleDocumentUpload" size="sm" required></b-form-file>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-2" v-if="Object.values(errors).length">
      <div class="col">
        <div class="alert alert-danger">
          <ul class="list-unstyled m-0">
            <li v-for="(error, index) in Object.values(errors)" :key="index">
              <ul class="list-unstyled">
                <li v-for="(sub, index) in error" :key="index">{{ sub }}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col text-center">
        <button class="btn btn-sm btn-success" type="submit" :disabled="loading" @click="handleSubmit">สมัครทุนการศึกษา</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['prevData'],
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        volunteer_activities: [],
        attachment: '',
        reason: '',
        option: {
          choice1: '',
          choice2: '',
          choice3: '',
          choice4: '',
          choice5: '',
          choice6: '',
          choice7: '',
          choice8: '',
          choice9: '',
          choice10: '',
        },
        sponsor: {
          choice1: 0,
          choice2: 0,
          choice3: 0,
          choice4: 0,
          choice5: 0,
        },
      },
      volunteer_activitie: {
        name: '',
        semester: '',
        year: '',
        activity_hours: ''
      },
      option1: [
        { id: 1, value: 'รายได้ 200,001 - 240,000 บาท/ปี' },
        { id: 2, value: 'รายได้ 160,001 - 200,000 บาท/ปี' },
        { id: 3, value: 'รายได้ 120,001 - 160,000 บาท/ปี' },
        { id: 4, value: 'รายได้ 80,001 - 120,000 บาท/ปี' },
        { id: 5, value: 'รายได้ไม่เกิน 80,000 บาท/ปี' },
      ],
      option2: [
        { id: 6, value: 'อยู่ด้วยกันเลี้ยงดูทั้งคู่/หย่าร้างแต่เลี้ยงดูทั้งคู่ (ไม่มีครอบครัวใหม่)' },
        { id: 7, value: 'หย่าร้าง แต่เลี้ยงดูทั้งคู่ (มีครอบครัวใหม่)' },
        { id: 8, value: 'พิการ 1 คน/เสียชีวิต 1 คน/หย่าร้าง/1 คนเลี้ยงดู' },
        { id: 9, value: 'เสียชีวิตทั้งคู่/หย่าร้างไม่เลี้ยงดูทั้งคู่/มีผู้อุปการะ' },
        { id: 10, value: 'เสียชีวิตทั้งคู่/หย่าร้างไม่เลี้ยงดูทั้งคู่/ไม่มีผู้อุปการะ' },
      ],
      option3: [
        { id: 11, value: 'มากกว่า 6,001 บาทขึ้นไป' },
        { id: 12, value: 'จำนวนเงิน 5,001 - 6,000 บาท/เดือน' },
        { id: 13, value: 'จำนวนเงิน 4,001 - 5,000 บาท/เดือน' },
        { id: 14, value: 'จำนวนเงิน 3,001 - 4,000 บาท/เดือน' },
        { id: 15, value: 'จำนวนเงิน 2,001 - 3,000 บาท/เดือน' },
        { id: 16, value: 'จำนวนเงิน 0 - 2,000 บาท/เดือน' },
      ],
      option4: [
        { id: 17, value: 'ผู้ที่อยู่ในอุปการะที่ไม่มีรายได้ 3 จุด' },
        { id: 18, value: 'ผู้ที่อยู่ในอุปการะที่ไม่มีรายได้ 5 จุด' },
        { id: 19, value: 'ผู้ที่อยู่ในอุปการะที่ไม่มีรายได้ 7 จุด' },
        { id: 20, value: 'ผู้ที่อยู่ในอุปการะที่ไม่มีรายได้ 9 จุด' },
        { id: 21, value: 'ผู้ที่อยู่ในอุปการะที่ไม่มีรายได้ 11 จุดขึ้นไป' },
      ],
      option5: [
        { id: 22, value: 'มากกว่า 6,001 บาทขึ้นไป' },
        { id: 23, value: 'จำนวนเงิน 5,001 - 6,000 บาท/เดือน' },
        { id: 24, value: 'จำนวนเงิน 4,001 - 5,000 บาท/เดือน' },
        { id: 25, value: 'จำนวนเงิน 3,001 - 4,000 บาท/เดือน' },
        { id: 26, value: 'จำนวนเงิน 2,001 - 3,000 บาท/เดือน' },
        { id: 27, value: 'จำนวนเงิน 0 - 2,000 บาท/เดือน' },
      ],
      option6: [
        { id: 28, value: 'มากกว่า 3,000 บาทขึ้นไป' },
        { id: 29, value: 'จำนวนเงิน 2,501 - 3,000 บาท/เดือน' },
        { id: 30, value: 'จำนวนเงิน 2,001 - 2,500 บาท/เดือน' },
        { id: 31, value: 'จำนวนเงิน 1,501 - 2,000 บาท/เดือน' },
        { id: 32, value: 'จำนวนเงิน 1,001 - 1,500 บาท/เดือน' },
        { id: 33, value: 'ไม่ได้เช่าหอพักหรือค่าเช่าหอพักไม่เกิน 1,000 บาท/เดือน' },
      ],
      option7: [
        { id: 34, value: 'มีบ้านเป็นของตนเองสภาพพร้อมอยู่อาศัย' },
        { id: 35, value: 'มีบ้านเป็นของตนเองสภาพไม่สมบูรณ์' },
        { id: 36, value: 'ไม่มีบ้านเป็นของตนเองโดยอาศัยญาติและไม่ได้จ่ายค่าเช่า' },
        { id: 37, value: 'มีบ้านเป็นของตนเองไม่ได้อยู่อาศัยแต่ไปเช่าบ้านอยู่อาศัย (ตามอาชีพ)' },
        { id: 38, value: 'ไม่มีบ้านเป็นของตนเองต้องเช่าบ้านอยู่อาศัย' },
      ],
      option8: [
        { id: 39, value: 'จำนวน 21 - 30 ชั่วโมง' },
        { id: 40, value: 'จำนวน 31 - 40 ชั่วโมง' },
        { id: 41, value: 'จำนวน 41 - 50 ชั่วโมง' },
        { id: 42, value: 'จำนวน 51 - 60 ชั่วโมง' },
        { id: 43, value: 'จำนวน 61 ชั่วโมงขึ้นไป' },
      ],
      option9: [
        { id: 44, value: 'ไม่ได้ทำงานเลย' },
        { id: 45, value: 'ทำงานช่วยที่บ้านทำให้ลดต้นทุนในการจ้างแรงงาน' },
        { id: 46, value: 'ทำงานที่บ้านทำให้เพิ่มรายได้หรือทำงานบางช่วงแล้วแต่โอกาส' },
        { id: 47, value: 'ทำงานช่วงปิดเทอม' },
        { id: 48, value: 'ทำงานทุกเสาร์-อาทิตย์' },
        { id: 49, value: 'ทำงานหารายได้ระหว่างเรียนตลอด' },
      ],
      option10: [
        { id: 50, value: 'ผลการเรียน ต่ากว่า 2.00' },
        { id: 51, value: 'ผลการเรียน 2.00 - 2.50' },
        { id: 52, value: 'ผลการเรียน 2.51 - 3.00' },
        { id: 53, value: 'ผลการเรียน 3.01 - 3.50' },
        { id: 54, value: 'ผลการเรียน 3.51 ขึ้นไป' },
      ],
      loading: false,
    }
  },
  watch: {
    sponsor: {
      handler(next) {
        this.setSponcer()
      },
      deep: true
    }
  },
  computed: {
    sponsorPoint() {
      const choice1 = this.form.sponsor.choice1 * 1
      const choice2 = this.form.sponsor.choice2 * 2
      const choice3 = this.form.sponsor.choice3 * 3
      const choice4 = this.form.sponsor.choice4 * 1
      const choice5 = this.form.sponsor.choice5 * 2

      return [choice1,choice2,choice3,choice4,choice5].reduce((a,b) => a+b, 0)
    }
  },
  methods: {
    ...mapActions({
      nextStep: 'application/nextStep',
      pushStep: 'application/pushStep',
      clearStep: 'application/clearStep'
    }),
    setSponcer() {
      if (this.sponsorPoint <= 3) {this.form.option.choice4 = 17}
      if (this.sponsorPoint >= 5) {this.form.option.choice4 = 18}
      if (this.sponsorPoint >= 7) {this.form.option.choice4 = 19}
      if (this.sponsorPoint >= 9) {this.form.option.choice4 = 20}
      if (this.sponsorPoint >= 11) {this.form.option.choice4 = 21}
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
    delActivity(index) {
      const newArray = [...this.form.volunteer_activities]
            newArray.splice(index, 1)
      this.form.volunteer_activities = newArray
    },
    addActivity() {
      this.form.volunteer_activities.push({
        name: this.volunteer_activitie.name,
        semester: this.volunteer_activitie.semester,
        year: this.volunteer_activitie.year,
        activity_hours: this.volunteer_activitie.activity_hours
      })
      Object.keys(this.volunteer_activitie).forEach(i => this.volunteer_activitie[i] = '')
      // if (this.form.volunteer_activities.length < 10) {
      // } else {
      //   this.messageBox('ข้อมูลครบจำนวนที่กำหนดแล้ว', true)
      // }
    },
    async handleSubmit() {
      this.loading = true
      this.errors = {}
      try {
        const payload = new FormData()

				payload.append('attachment', this.form.attachment)
        payload.append('reason', this.form.reason)
        payload.append('volunteer_activities', JSON.stringify(this.form.volunteer_activities))
        payload.append('submission_id', this.$store.state.application.submissionId)

				await this.$axios.post(`/scholarships/registration/store`, payload, { headers: { 'Content-Type': 'multipart/form-data' } })

        this.messageBox('ลงทะเบียนสำเร็จแล้ว, กำลังเปลี่ยนหน้าไปยังกลุ่มเฟสบุ๊คนักศึกษาทุนคณะวิศวกรรมศาสตร์ ปีการศึกษา 2566 (ขอให้นักศึกษาที่สมัครทุนเข้ากลุ่มทุกคน)')
        .then(() => {
          this.$emit('closeForm')
          this.clearStep()
          // this.nextStep(this.$store.state.application.curStep)
          // window.location.href = 'https://www.facebook.com/groups/2010597925947541'
          // this.$router.push('/follow')
        })
      } catch (error) {
        const {data:{errors}} = error.response
        this.errors = Object.keys(errors).length ? errors : {}
        this.messageBox('ไม่สามารถดำเนินการขั้นต่อไปได้', true)
      }
      this.loading = false
    },
		handleDocumentUpload(event) {
			this.form.attachment = event.target.files[0] ?? ''
		},
  },
  mounted() {
    this.setSponcer()
    Object.keys(this.form).forEach(key => {
      if (key != 'scholarship_id' && this.prevData[key]) {
        this.form[key] = this.prevData[key]
      }
    })
  }
}
</script>
