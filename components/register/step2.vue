<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">ข้อมูลผลการเรียน</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="card border-secondary">
                  <div class="card-header bg-secondary text-white">ภาคเรียนที่ {{ show1stSemester }} / {{ show1stYear }}</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <div>
                          <label class="form-label" for="gpa_one">เกรดเฉลี่ย</label>
                          <input class="form-control form-control-sm" id="gpa_one" v-model="form.gpa_one" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                      <div class="mb-3 col-md-6">
                        <div>
                          <label class="form-label" for="gpax_one">เกรดเฉลี่ยสะสม</label>
                          <input class="form-control form-control-sm" id="gpax_one" v-model="form.gpax_one" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card border-secondary mt-2 mt-md-0">
                  <div class="card-header bg-secondary text-white">ภาคเรียนที่ {{ show2ndSemester }} / {{ show2ndYear }}</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <div>
                          <label class="form-label" for="gpa_two">เกรดเฉลี่ย</label>
                          <input class="form-control form-control-sm" id="gpa_two" v-model="form.gpa_two" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                      <div class="mb-3 col-md-6">
                        <div>
                          <label class="form-label" for="gpax_two">เกรดเฉลี่ยสะสม</label>
                          <input class="form-control form-control-sm" id="gpax_two" v-model="form.gpax_two" type="number"
                            min="0" max="4" step="any" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ข้อมูลด้านครอบครัว <small>(ระบุทุกคน บิดา/มารดา/พี่/น้อง รวมตัวนักศึกษาด้วย)</small></div>
          <div class="card-body">
            <form @submit.stop.prevent="addFamily">
              <div class="row">
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="title">คำนำหน้านาม</label>
                    <input class="form-control form-control-sm" id="title" v-model="family.title" required />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="fullName">ชื่อ-สกุล</label>
                    <input class="form-control form-control-sm" id="fullName" v-model="family.full_name" required />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="age">อายุ</label>
                    <input class="form-control form-control-sm" id="age" v-model="family.age" required min="0" type="number" />
                  </div>
                </div>
                <div class="mb-3 col-lg-3 col-md-3">
                  <div>
                    <label class="form-label" for="relate">ความเกี่ยวข้อง</label>
                    <input class="form-control form-control-sm" id="relate" v-model="family.relationship" required />
                  </div>
                </div>
                <div class="mb-3 col-lg-3 col-md-6">
                  <div>
                    <label class="form-label" for="education">ระดับการศึกษา</label>
                    <input class="form-control form-control-sm" id="education" v-model="family.education" required />
                  </div>
                </div>
                <div class="mb-3 col-lg-3 col-md-6">
                  <div>
                    <label class="form-label" for="occupation">อาชีพ</label>
                    <input class="form-control form-control-sm" id="occupation" v-model="family.occupation" required />
                  </div>
                </div>
                <div class="mb-3 col-lg-3 col-md-6">
                  <div>
                    <label class="form-label" for="work_place">สถานที่ทำงาน/ศึกษา</label>
                    <input class="form-control form-control-sm" id="work_place" v-model="family.work_place" required />
                  </div>
                </div>
                <div class="mb-3 col-lg-3 col-md-6">
                  <div>
                    <label class="form-label" for="salary">รายได้:เดือน</label>
                    <input class="form-control form-control-sm" id="salary" v-model="family.salary" required min="0" type="number" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-sm btn-primary">เพิ่ม</button>
                </div>
              </div>
              <div class="row">
                <div class="col"><hr /></div>
              </div>
            </form>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">รายชื่อบุคคลในครอบครัว</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>ชื่อ - สกุล</th>
                      <th class="d-none d-xl-table-cell">ระดับการศึกษา</th>
                      <th class="d-none d-md-table-cell">สถานที่ทำงาน/ศึกษา</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody v-if="form.family_members.length">
                    <tr v-for="(member, index) in form.family_members" :key="index">
                      <td>
                        <strong>{{ member.full_name }}</strong><br />
                        <span class="text-muted">{{ member.relationship }}&nbsp;อายุ: {{ member.age }}</span>
                      </td>
                      <td>{{ member.education }}</td>
                      <td>
                        <strong>{{ member.work_place }}</strong><br />
                        <span class="text-muted">อาชีพ: {{ member.occupation }}, รายได้: {{ member.salary }}</span>
                      </td>
                      <td>
                        <button type="button" class="btn btn-xs btn-danger" @click="delFamily(index)">ลบ</button>
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
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">การทำงานระหว่างเรียนในช่วงปีที่ผ่านมา</div>
          <div class="card-body">
            <form @submit.stop.prevent="addJob">
              <div class="row">
                <div class="mb-3 col-md-12">
                  <div>
                    <label class="form-label" for="workName">งานที่ทำ</label>
                    <input class="form-control form-control-sm" id="workName" v-model="job.name" required />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="workPlace">สถานที่ทำงาน</label>
                    <input class="form-control form-control-sm" id="workPlace" v-model="job.place" required />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="gotSalary">จำนวนเงินที่ได้รับ</label>
                    <input class="form-control form-control-sm" id="gotSalary" v-model="job.money" required type="number" min="0" />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="beginWorkDate">วันที่เริ่มงาน</label>
                    <b-form-datepicker id="beginWorkDate" v-model="job.job_begin" locale="th" size="sm" required />
                  </div>
                </div>
                <div class="mb-3 col-md-3">
                  <div>
                    <label class="form-label" for="endWorkDate">วันที่จบงาน</label>
                    <b-form-datepicker id="endWorkDate" v-model="job.leave_job" locale="th" size="sm" required />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button type="submit" class="btn btn-primary btn-sm">เพิ่ม</button>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
            </form>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">ประวัติการทำงานพิเศษ</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>งานที่ทำ</th>
                      <th class="d-none d-xl-table-cell">สถานที่ทำงาน</th>
                      <th class="d-none d-md-table-cell">ระยะเวลาทำงาน</th>
                      <th class="d-none d-md-table-cell">จำนวนเงินที่ได้รับ</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody v-if="form.job_histories.length">
                    <tr v-for="(job, index) in form.job_histories" :key="index">
                      <td>{{ job.name }}</td>
                      <td>{{ job.place }}</td>
                      <td>{{ job.job_begin }} - {{ job.leave_job }}</td>
                      <td>{{ job.money }}</td>
                      <td>
                        <button @click="delJob(index)" class="btn btn-xs btn-danger">ลบ</button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="5" class="text-center">
                        <span class="align-middle">ยังไม่มีข้อมูล</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
        <button class="btn btn-sm btn-success" type="submit" :disabled="loading" @click="handleSubmit">ดำเนินการต่อไป &gt;&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['prevData', 'semester', 'year'],
  data() {
    return {
      loading: false,
      errors: {},
      form: {
        gpa_one: '',
        gpa_two: '',
        gpax_one: '',
        gpax_two: '',
        family_members: [],
        job_histories: [],
      },
      family: {
        title: '',
        full_name: '',
        age: '',
        relationship: '',
        education: '',
        occupation: '',
        work_place: '',
        salary: '',
      },
      job: {
        name: '',
        place: '',
        money: '',
        job_begin: '',
        leave_job: '',
      },
    }
  },
  computed: {
    show1stSemester() {
      return this.semester == 1 ? 1 : 2
    },
    show2ndSemester() {
      return this.semester == 2 ? 1 : 2
    },
    show1stYear() {
      return this.year - 1
    },
    show2ndYear() {
      return this.semester == 1 ? this.year - 1 : this.year
    },
  },
  methods: {
    ...mapActions({
      nextStep: 'application/nextStep',
      pushStep: 'application/pushStep',
    }),
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
    delJob(index) {
      const newArray = [...this.form.jobs]
      newArray.splice(index, 1)
      this.form.jobs = newArray
    },
    addJob() {
      this.form.job_histories.push({
        name:     this.job.name,
        place:    this.job.place,
        money:    this.job.money,
        job_begin:this.job.job_begin,
        leave_job:this.job.leave_job,
      })
      Object.keys(this.job).forEach(i => this.job[i] = '')
      // if (this.form.job_histories.length < 3) {
      // } else {
      //   this.messageBox('ไม่สามารถดำเนินการขั้นต่อไปได้', true)
      // }
    },
    delFamily(index) {
      const newArray = [...this.form.family_members]
      newArray.splice(index, 1)
      this.form.family_members = newArray
    },
    addFamily() {
      this.form.family_members.push({
        full_name   : `${this.family.title}${this.family.full_name}`,
        age         : this.family.age,
        relationship: this.family.relationship,
        education   : this.family.education,
        occupation  : this.family.occupation,
        work_place  : this.family.work_place,
        salary      : this.family.salary,
      })
      Object.keys(this.family).forEach(i => this.family[i] = '')
      // if (this.form.family_members.length < 5) {
      // } else {
      //   this.messageBox('ข้อมูลครบจำนวนที่กำหนดแล้ว', true)
      // }
    },
    async handleSubmit() {
      this.loading = true
      this.errors = {}
      try {
        await this.$axios.post('/scholarships/registration/step2', {submission_id: this.$store.state.application.submissionId, ...this.form})
        this.messageBox('ตรวจสอบข้อมูลสำเร็จ, ดำเนินการขั้นตอนต่อไป')
        .then(() => {
          this.nextStep(this.$store.state.application.curStep)
        })
      } catch (error) {
        const {data:{errors}} = error.response
        this.errors = Object.keys(errors).length ? errors : {}
        this.messageBox('ไม่สามารถดำเนินการขั้นต่อไปได้', true)
      }
      this.loading = false
    }
  },
  mounted() {
    Object.keys(this.form).forEach(key => {
      if (key != 'scholarship_id' && this.prevData[key]) {
        this.form[key] = this.prevData[key]
      }
    })
  }
}
</script>
