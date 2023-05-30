<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">ข้อมูลรายได้ของนักศึกษา</div>
          <div class="card-body">
            <form @submit.stop.prevent="addActivity">
              <div class="row">
                <div class="mb-3 col-md-12">
                  <div>
                    <label class="form-label" for="job">งานที่ทำ</label>
                    <input class="form-control form-control-sm" id="job" v-model="jobs.name" required />
                  </div>
                </div>
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="semester">ภาคเรียน</label>
                      <select name="semester" required id="semester" v-model="jobs.semester" class="form-control form-control-sm">
                        <option value="">== เลือก ==</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                  </div>
                </div>
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="year">ปีการศึกษา</label>
                    <input class="form-control form-control-sm" id="year" v-model="jobs.year" required type="number" min="0" />
                  </div>
                </div>
                <div class="mb-3 col-md-4">
                  <div>
                    <label class="form-label" for="activity_hours">ชั่วโมงกิจกรรม</label>
                    <input class="form-control form-control-sm" id="activity_hours" v-model="jobs.activity_hours" required step="any" type="number" min="0" />
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
                  <tbody v-if="form.jobs.length" >
                    <tr v-for="(job, index) in form.jobs" :key="index" class="align-middle">
                      <td>{{ job.name }}</td>
                      <td>{{ job.semester }}</td>
                      <td>{{ job.year }}</td>
                      <td>{{ job.activity_hours }}</td>
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
export default {
  data() {
    return {
      form: {
        jobs: []
      },
      jobs: {
        name: '',
        semester: '',
        year: '',
        activity_hours: ''
      },
      loading: false,
    }
  },
  methods: {
    handleSubmit() { },
    delActivity(index) {
      const newArray = [...this.form.jobs]
            newArray.splice(index, 1)
      this.form.jobs = newArray
    },
    addActivity() {
      this.form.jobs.push({
        name: this.jobs.name,
        semester: this.jobs.semester,
        year: this.jobs.year,
        activity_hours: this.jobs.activity_hours
      })
      Object.keys(this.jobs).forEach(i => this.jobs[i] = '')
    },
  }
}
</script>
