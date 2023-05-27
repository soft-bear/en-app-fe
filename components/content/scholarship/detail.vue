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
                  <b-button variant="outline-primary" class="mt-1" size="sm">สมัครทุนการศึกษา</b-button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-md-6 text-center">
                  <div class="image-container">
                    <img v-if="data?.photo != null" :src="data.photo.path" :alt="data?.photo.name" />
                    <img v-else src="/images/en-ubu-logo-min.jpg" alt="EN UBU LOGO" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-12 col-md-4"><strong>หมวดหมู่ทุนการศึกษา</strong></div>
                    <div class="col-12 col-md-8">{{ data.category?.name }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>ประเภททุนการศึกษา</strong></div>
                    <div class="col-12 col-md-8">{{ data.is_goingon ? 'ทุนต่อเนื่อง' : 'ทุนไม่ต่อเนื่อง' }}</div>
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
                    <div class="col-12 col-md-8">
                      <span class="badge badge-success" v-if="data.is_active">กำลังเปิดรับสมัคร</span>
                      <span class="badge badge-warning" v-else>ปิดรับสมัคร</span>
                    </div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>ช่วงการรับสมัคร</strong></div>
                    <div class="col-12 col-md-8">{{ onlyDate(data.from_date) }} - {{ onlyDate(data.to_date) }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>วันที่ประกาศผล</strong></div>
                    <div class="col-12 col-md-8">{{ onlyDate(data.result_announcement_date) }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>ชั่วโมงกิจกรรม</strong></div>
                    <div class="col-12 col-md-8">{{ data.activity_hours ? `${data.activity_hours} ชั่วโมง` : '-' }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>เกรดเฉลี่ยขั้นต่ำ</strong></div>
                    <div class="col-12 col-md-8">{{ data.minimum_grade ? parseFloat(data.minimum_grade).toFixed(2) : '-' }}</div>
                  </div>
                  <div class="mb-1 row">
                    <div class="col-12 col-md-4"><strong>เอกสารประกอบ</strong></div>
                    <div class="col-12 col-md-8">
                      <a v-if="data.document" :href="data.document.path" target="_blank" noopener noreferrer>{{
                        data.document.name }}</a>
                      <span v-else>-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </div>
      <div class="row mb-4">
        <div class="col">
          <div class="card">
            <div class="card-header">รายละเอียดอื่น ๆ</div>
            <div class="card-body">
              <b-row v-if="data.content">
                <b-col class="card-post-detail" v-html="data.content"></b-col>
              </b-row>
              <div v-else class="text-center">ไม่มีข้อมูลในส่วนนี้</div>
              <div class="row mt-4">
                <div class="col">
                  <small class="text-muted m-0 p-0">
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
      <div class="row" v-if="!loggedIn && data.is_active">
        <div class="col">
          <b-card header-tag="div" class="text-center">
            <div class="d-block">เข้าสู่ระบบเพื่อดำเนินการสมัครทุนการศึกษา</div>
            <div class="d-block">
              <b-button variant="outline-success" class="mt-1" size="sm" @click="$router.push('/login')">สมัครทุนการศึกษา</b-button>
            </div>
          </b-card>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col">
          <div class="card">
            <div class="card-body text-center">
              <div class="d-block">
                <b-button variant="outline-primary" class="mt-1" size="sm">สมัครทุนการศึกษา</b-button>
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
      loggedIn: this.$auth.loggedIn
    }
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
    }
  },
}
</script>
