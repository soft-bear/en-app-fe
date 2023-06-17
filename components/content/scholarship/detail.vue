<template>
  <b-container>
    <b-overlay :show="loading">
      <div class="row my-4">
        <b-col>
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">
                  <div :style="loggedIn && data.is_active ? 'line-height: 34.6px;' : ''">
                    ข้อมูลทุนการศึกษา - {{ data.name }} (ภาคเรียนที่ {{ data.semester }}/{{ data.year }})
                  </div>
                </div>
                <div class="col text-right" v-if="loggedIn && data.is_active">
                  <b-button variant="outline-primary" class="mt-1" size="sm" @click="onClickRegisterButton" :disabled="checking">สมัครทุนการศึกษา</b-button>
                </div>
              </div>
            </div>
            <div class="card-body" v-if="!loading">
              <div class="row">
                <div class="col-12 col-md-6 text-center">
                  <div class="image-container" v-if="!loading">
                    <img v-if="data?.photo != null" :src="data.photo.path" loading="lazy" :alt="data?.photo.name" />
                    <img v-else src="/images/en-ubu-logo-min.jpg" loading="lazy" alt="EN UBU LOGO" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row mt-2 mt-md-0">
                    <div class="col-12 col-md-4"><strong>หมวดหมู่ทุนการศึกษา</strong></div>
                    <div class="col-12 col-md-8">{{ data.category?.name }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>ประเภททุนการศึกษา</strong></div>
                    <div class="col-12 col-md-8">{{ data.is_goingon ? 'ทุนต่อเนื่อง' : 'ทุนรายปี' }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>จำนวนเงิน</strong></div>
                    <div class="col-12 col-md-8">{{ data.money?.toLocaleString('th-TH') }} บาท</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>จำนวนทุน</strong></div>
                    <div class="col-12 col-md-8">{{ data.amount?.toLocaleString('th-TH') }} ทุน</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>การรับสมัคร</strong></div>
                    <div class="col-12 col-md-8" v-if="!loading">
                      <span class="badge badge-success" v-if="data.is_active">กำลังเปิดรับสมัคร</span>
                      <span class="badge badge-warning" v-else>ปิดรับสมัคร</span>
                    </div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>ช่วงการรับสมัคร</strong></div>
                    <div class="col-12 col-md-8">{{ onlyDate(data.from_date) }} - {{ onlyDate(data.to_date) }} {{ data.is_active ? `(${dateDiff} วัน)` : '' }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>วันที่ประกาศผล</strong></div>
                    <div class="col-12 col-md-8">{{ onlyDate(data.result_announcement_date) }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>ชั่วโมงกิจกรรม</strong></div>
                    <div class="col-12 col-md-8">{{ data.activity_hours ? `${data.activity_hours} ชั่วโมง` : 'ไม่กำหนด' }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>เกรดเฉลี่ยขั้นต่ำ</strong></div>
                    <div class="col-12 col-md-8">{{ data.minimum_grade ? parseFloat(data.minimum_grade).toFixed(2) : 'ไม่กำหนด' }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>เอกสารประกอบ</strong></div>
                    <div class="col-12 col-md-8">
                      <a v-if="data.document" :href="data.document.path" target="_blank" noopener noreferrer>
                        {{ data.document.name }}
                      </a>
                      <span v-else>ไม่พบเอกสารแนบ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body text-center" v-else>
              <div class="row">
                <div class="col">กำลังโหลด</div>
              </div>
            </div>
          </div>
        </b-col>
      </div>
      <div class="row mb-4" v-if="!showForm">
        <div class="col">
          <div class="card">
            <div class="card-header">รายละเอียด</div>
            <div class="card-body">
              <b-row v-if="data.content">
                <b-col class="card-post-detail" v-html="data.content"></b-col>
              </b-row>
              <div v-else class="text-center">ไม่มีข้อมูลในส่วนนี้</div>
              <div class="card" :class="data.content ? 'mt-4' : 'mt-1'">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <small class="text-muted m-0 p-0 text-center">
                        <ul class="m-0 p-0 small" style="list-style: none;">
                          <li>เขียนโดย : {{ data.author?.name }}</li>
                          <li v-if="data.editor">แก้ไขโดย : {{ data.editor?.name }}</li>
                          <li>เขียนเมื่อ : {{ onlyDate(data.created_at) }} {{ onlyTime(data.created_at) }} น.</li>
                          <li v-if="data.editor">แก้ไขเมื่อ : {{ onlyDate(data.updated_at) }} {{ onlyTime(data.updated_at) }} น.</li>
                        </ul>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="data.is_active">
        <div class="row" v-if="!loggedIn">
          <div class="col">
            <b-card header-tag="div" class="text-center">
              <div class="d-block">เข้าสู่ระบบเพื่อดำเนินการสมัครทุนการศึกษา</div>
              <div class="d-block">
                <b-button variant="outline-success" class="mt-1" size="sm" @click="$router.push('/login')">เข้าสู่ระบบ</b-button>
              </div>
            </b-card>
          </div>
        </div>
        <div class="row mb-4" v-else>
          <div class="col">
            <div class="card border-primary" v-if="showForm">
              <div class="card-header bg-primary text-white text-center">
                แบบฟอร์มลงทะเบียนทุนการศึกษา<br />
                <small class="text-sm">ขั้นตอนที่ {{ currStep }}/{{ allStep }}</small>
              </div>
              <div class="card-body">
                <register-step1 v-if="currStep == 1" :prevData="prevData" :scholarship_id="data.id" />
                <register-step2 v-if="currStep == 2" :prevData="prevData" :year="data.year" :semester="data.semester" />
                <register-step3 v-if="currStep == 3" :prevData="prevData" />
                <register-step4 v-if="currStep == 4" :prevData="prevData" @close="closeForm" />
              </div>
            </div>
            <div class="card" v-else>
              <div class="card-body text-center">
                <div class="d-block">
                  <b-button variant="outline-primary" class="mt-1" size="sm" @click="onClickRegisterButton" :disabled="checking">สมัครทุนการศึกษา</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-overlay>
  </b-container>
</template>
<script>
import moment from 'moment'

export default {
  layout: "content",
  props: ['data', 'loading'],
  data() {
    return {
      checking: false,
      showForm: false,
      loggedIn: this.$auth.loggedIn,
      prevData: [],
    }
  },
  watch: {
    showForm(next) {
      this.$emit('setIsShowForm', next)
    }
  },
  computed: {
    allStep() {
      return this.$store.state.application.allStep
    },
    currStep() {
      return this.$store.state.application.curStep
    },
    dateDiff() {
      if (this.data.from_date && this.data.to_date) {
        const date1 = new Date()
        const date2 = new Date(this.data.to_date)

        const timeDiff = Math.abs(date2.getTime() - date1.getTime())
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

        return daysDiff
      }

      return 0
    },
  },
  methods: {
    onlyDate(datetime) {
      return datetime ? new Date(datetime).toLocaleString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short'
      }) : ''
    },
    onlyTime(datetime) {
      let data = ''
      if (datetime) {
        data = new Date(datetime).toLocaleDateString('th-TH', {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })
        return data.split(' ')[1]
      }

      return datetime
    },
    formatdate(date) {
      return moment(date).add(543, 'years').format('DD/MM/YYYY HH:mm:ss')
    },
    messageBox(data, error=false) {
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
    async onClickRegisterButton() {
      this.checking = true
      try {
        const { data: { data } } = await this.$axios.get('/user/me')
        if (data.student) {
          const {data:{is_registered, previous_data}} = await this.$axios.get(`/scholarships/registration/check/${this.data.id}`)
          if (!is_registered) {
            this.showForm = true
            this.prevData = previous_data
          } else {
            this.messageBox('มีการลงทะเบียนทุนนี้แล้ว')
          }
        } else {
          throw 'ไม่พบข้อมูลนักศึกษา'
        }
      } catch (e) {
        this.showForm = false
        this.messageBox(e, true).then(() => {
          this.messageBox('ระบบกำลังพาไปหน้าบันทึกข้อมูลนักศึกษา').then(() => {
            this.$router.push('/account')
          })
        })
      }
      this.checking = false
    },
    closeForm() {
      this.showForm = false
    }
  },
}
</script>

<style scoped>
ul>li {
  display: inline-block;
}
</style>
