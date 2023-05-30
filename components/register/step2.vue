<template>
  <form @submit.stop.prevent="handleSubmit" class="small">
    <div class="row">
      <div class="col">
        <div class="card border-primary">
          <div class="bg-primary text-white card-header">
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
            <div class="m-0 card border-secondary small">
              <div class="bg-secondary text-white card-header">
                <span class="align-middle">ประวัติการรับทุนการศึกษา</span>
              </div>
              <div class="p-0 card-body">
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
        <div class="card border-primary mt-2">
          <div class="bg-primary text-white card-header">
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

export default {
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
