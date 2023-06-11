<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">กิจกรรม/จิตอาสา</div>
          <div class="card-body">
            <form @submit.stop.prevent="addActivity">
              <div class="row">
                <div class="mb-3 col-md-12">
                  <div>
                    <label class="form-label" for="job">งานที่ทำ</label>
                    <input class="form-control form-control-sm" id="job" v-model="volunteer_activitie.name" required />
                  </div>
                </div>
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="semester">ภาคเรียน</label>
                      <select name="semester" required id="semester" v-model="volunteer_activitie.semester" class="form-control form-control-sm">
                        <option value="">== เลือก ==</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                  </div>
                </div>
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="year">ปีการศึกษา</label>
                    <input class="form-control form-control-sm" id="year" v-model="volunteer_activitie.year" required type="number" min="0" />
                  </div>
                </div>
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="activity_hours">ชั่วโมงกิจกรรม</label>
                    <input class="form-control form-control-sm" id="activity_hours" v-model="volunteer_activitie.activity_hours" required step="any" type="number" min="0" />
                  </div>
                </div>
                <div class="col-md-4">
                  <div>
                    <button class="btn btn-sm btn-primary" type="submit">เพิ่ม</button>
                  </div>
                </div>
              </div>
            </form>
            <div class="row">
              <div class="col"><hr /></div>
            </div>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">ประวัติการทำกิจกรรม</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>ชื่อกิจกรรม</th>
                      <th class="d-none d-xl-table-cell">ภาคเรียน</th>
                      <th class="d-none d-md-table-cell">ปีการศึกษา</th>
                      <th>ชั่วโมงกิจกรรม</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody v-if="form.volunteer_activities.length" >
                    <tr v-for="(activity, index) in form.volunteer_activities" :key="index" class="align-middle">
                      <td>{{ activity.name }}</td>
                      <td>{{ activity.semester }}</td>
                      <td>{{ activity.year }}</td>
                      <td>{{ activity.activity_hours }}</td>
                      <td>
                        <button type="button" class="btn btn-xs btn-danger small" @click="delActivity(index)">ลบ</button>
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
        <button class="btn btn-sm btn-success" type="submit" @click="handleSubmit">สมัครทุนการศึกษา</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      errors: {},
      form: {
        volunteer_activities: [],
        attachment: '',
        reason: '',
      },
      volunteer_activitie: {
        name: '',
        semester: '',
        year: '',
        activity_hours: ''
      },
      loading: false,
    }
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

        this.messageBox('ลงทะเบียนสำเร็จแล้ว')
        .then(() => {
          this.nextStep(this.$store.state.application.curStep)
          this.$router.push('/follow')
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
  }
}
</script>
