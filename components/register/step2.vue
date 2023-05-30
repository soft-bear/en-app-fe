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
                  <div class="card-header bg-secondary text-white">ปีการศึกษาที่ x ภาคเรียนที่ y</div>
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
                  <div class="card-header bg-secondary text-white">ปีการศึกษาที่ x ภาคเรียนที่ y</div>
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
            <div class="row">
              <div class="mb-3 col-md-6">
                <div>
                  <label class="form-label" for="name">ชื่อ-สกุล</label>
                  <input class="form-control form-control-sm" name="name" required />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="age">อายุ</label>
                  <input class="form-control form-control-sm" name="age" required min="0" type="number" />
                </div>
              </div>
              <div class="mb-3 col-lg-3 col-md-3">
                <div>
                  <label class="form-label" for="relate">ความเกี่ยวข้อง</label>
                  <input class="form-control form-control-sm" name="relate" required />
                </div>
              </div>
              <div class="mb-3 col-lg-3 col-md-6">
                <div>
                  <label class="form-label" for="education">ระดับการศึกษา</label>
                  <input class="form-control form-control-sm" name="education" required />
                </div>
              </div>
              <div class="mb-3 col-lg-3 col-md-6">
                <div>
                  <label class="form-label" for="occupation">อาชีพ</label>
                  <input class="form-control form-control-sm" name="occupation" required />
                </div>
              </div>
              <div class="mb-3 col-lg-3 col-md-6">
                <div>
                  <label class="form-label" for="work_place">สถานที่ทำงาน/ศึกษา</label>
                  <input class="form-control form-control-sm" name="work_place" required />
                </div>
              </div>
              <div class="mb-3 col-lg-3 col-md-6">
                <div>
                  <label class="form-label" for="salary">รายได้:เดือน</label>
                  <input class="form-control form-control-sm" name="salary" required min="0" type="number" />
                </div>
              </div>
            </div>
            <div class="card border-secondary small m-0">
              <div class="card-header bg-secondary text-white">
                <span class="align-middle">รายชื่อบุคคลในครอบครัว</span>
              </div>
              <div class="card-body">
                <table class="table table-sm m-0 table-hover text-nowrap border-left border-right border-bottom">
                  <thead>
                    <tr>
                      <th>ชื่อ - สกุล</th>
                      <th class="d-none d-xl-table-cell">ความเกี่ยวข้อง</th>
                      <th class="d-none d-xl-table-cell">ระดับการศึกษา</th>
                      <th class="d-none d-md-table-cell">สถานที่ทำงาน/ศึกษา</th>
                      <th class="d-none d-md-table-cell">รายได้:เดือน</th>
                      <th>ดำเนินการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="6" class="text-center">
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
          <div class="card-header bg-eng text-white">การทำงานในปีที่ผ่านมา</div>
          <div class="card-body">
            <div class="row">
              <div class="mb-3 col-md-12">
                <div>
                  <label class="form-label" for="name">งานที่ทำ</label>
                  <input class="form-control form-control-sm" name="name" required />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="place">สถานที่ทำงาน</label>
                  <input class="form-control form-control-sm" name="place" required />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="wage">จำนวนเงินที่ได้รับ</label>
                  <input class="form-control form-control-sm" name="wage" required />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="s_date">วันที่เริ่มงาน</label>
                  <input class="form-control form-control-sm" name="s_date" required min="1" type="date" />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <div>
                  <label class="form-label" for="e_date">วันที่จบงาน</label>
                  <input class="form-control form-control-sm" name="e_date" required min="1" type="date" />
                </div>
              </div>
            </div>
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
                  <tbody>
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
        <button class="btn btn-sm btn-success" type="submit">ดำเนินการต่อไป &gt;&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        gpa_one: '',
        gpa_two: '',
        gpax_one: '',
        gpax_two: '',
        family: [],
        jobs: [],
        incomes: {},
        expenses: {},
        parent: {},
        landOwnership: {},
        activities: [],
      }
    }
  },
  methods: {
    ...mapActions({
      nextStep: 'application/nextStep',
    }),
    handleSubmit() {
      this.nextStep(this.$store.state.application.curStep)
    }
  }
}
</script>
