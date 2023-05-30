<template>
  <div class="small">
    <div class="row">
      <div class="col-12">
        <div class="card border-eng">
          <div class="card-header bg-eng text-white">ข้อมูลรายได้ของนักศึกษา</div>
          <div class="card-body">
            <div class="row">
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="income_father">บิดา</label>
                  <input class="form-control form-control-sm" name="income_father" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="income_mother">มารดา</label>
                  <input class="form-control form-control-sm" name="income_mother" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="income_parent">ผู้ปกครอง</label>
                  <input class="form-control form-control-sm" name="income_parent" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="income_scholarship">ทุนการศึกษา</label>
                  <input class="form-control form-control-sm" name="income_scholarship" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="income_student_loan">กู้ยืม กยศ.,กรอ.</label>
                  <input class="form-control form-control-sm" name="income_student_loan" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="income_work">ทำงานพิเศษ/ออนไลน์</label>
                  <input class="form-control form-control-sm" name="income_work" required min="0" type="number" value="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ข้อมูลรายจ่ายของนักศึกษา</div>
          <div class="card-body">
            <div class="row">
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="expense_monthly">ค่าใช้จ่ายประจำเดือน</label>
                  <input class="form-control form-control-sm" name="expense_monthly" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="expense_education">ค่าใช้จ่ายในการศึกษา</label>
                  <input class="form-control form-control-sm" name="expense_education" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="expense_dorm">ค่าหอพัก</label>
                  <input class="form-control form-control-sm" name="expense_dorm" required min="0" type="number" value="0"
                  />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="expense_travel">ค่าพาหนะ/เดินทาง</label>
                  <input class="form-control form-control-sm" name="expense_travel" required min="0" type="number" value="0" />
                </div>
              </div>
              <div class="mb-3 col-md-4">
                <div>
                  <label class="form-label" for="expense_etc">ค่าใช้จ่ายอื่น ๆ </label>
                  <input class="form-control form-control-sm" name="expense_etc" required min="0" type="number" value="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">สถานะภาพบิดา-มารดา</div>
          <div class="card-body">
            <div class="row">
              <div class="col-12 mb-3">
                <select id="status-select" name="status" class="form-control form-control-sm" required>
                  <option value="">== เลือก ==</option>
                  <option value="2">อยู่ด้วยกัน</option>
                  <option value="3">หย่าขาดกัน</option>
                  <option value="4">แยกทางกัน</option>
                  <option value="5">บิดาเสียชีวิต</option>
                  <option value="6">มารดาเสียชีวิต</option>
                  <option value="7">บิดาและมารดาพิการ</option>
                  <option value="8">บิดาหรือมารดาพิการ</option>
                  <option value="9">กำพร้าทั้งบิดาและมารดา</option>
                  <option value="10">กำพร้าบิดาหรือมารดา</option>
                  <option value="11">บิดาหรือมารดาหย่าร้างแต่ให้การอุปการะทั้งคู่</option>
                  <option value="12">บิดาหรือมารดาหย่าร้างแต่ให้การอุปการะคนเดียว</option>
                  <option value="1">อื่น ๆ</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-eng mt-2">
          <div class="card-header bg-eng text-white">ข้อมูลความเป็นอยู่</div>
          <div class="card-body">
            <div class="card border-secondary">
              <div class="card-header bg-secondary text-white">บ้านที่อยู่อาศัย</div>
              <div class="card-body">
                <div class="mb-2">
                  <div class="form-check form-check-inline">
                    <input name="home_is_owner" type="checkbox" id="checkbox-home-1" class="form-check-input"/>
                    <label title="" for="checkbox-home-1" class="form-check-label" >เป็นของตนเอง</label>
                  </div>
                </div>
                <div class="mb-2">
                  <div class="form-check form-check-inline">
                    <input name="home_is_rent" type="checkbox" id="checkbox-home-3" class="form-check-input" />
                    <label title="" for="checkbox-home-3" class="form-check-label" >บ้านเช่า (บาท:เดือน)</label>
                  </div>
                  <input name="home_rent_fee" disabled class="form-control form-control-sm" value="0" />
                </div>
                <div class="mb-2">
                  <div class="form-check form-check-inline">
                    <input name="home_is_stay" type="checkbox" id="checkbox-home-2" class="form-check-input"/>
                    <label title="" for="checkbox-home-2" class="form-check-label" >อาศัยคนอื่น (ระบุ)</label>
                  </div>
                  <input name="home_stay_name" disabled class="form-control form-control-sm" value="-" />
                </div>
              </div>
            </div>
            <div class="card border-secondary mt-2">
              <div class="card-header bg-secondary text-white">ที่ดิน</div>
              <div class="card-body">
                <div class="row">
                  <div class="mb-2 col-md-12">
                    <div class="form-check form-check-inline">
                      <input name="land_is_owner" type="checkbox" id="checkbox-land-1" class="form-check-input" />
                      <label for="checkbox-land-1" class="form-check-label">เป็นของตนเอง (ไร่)</label>
                    </div>
                    <div>
                        <input name="land_owner_val" disabled min="0" step="any" type="number" class="form-control form-control-sm" value="0" />
                    </div>
                  </div>
                  <div class="mb-2 col-md-12">
                    <div class="form-check form-check-inline">
                      <input name="land_is_stay" type="checkbox" id="checkbox-land-2" class="form-check-input" />
                      <label for="checkbox-land-2" class="form-check-label">อาศัยคนอื่น (ระบุ)</label>
                    </div>
                    <div>
                      <input name="land_stay_name" disabled class="form-control form-control-sm" value="-" />
                    </div>
                  </div>
                  <div class="mb-2 col-md-6">
                    <div class="form-check form-check-inline">
                      <input name="land_is_rent" type="checkbox" id="checkbox-land-3" class="form-check-input" />
                      <label title="" for="checkbox-land-3" class="form-check-label">เช่าคนอื่น (ไร่)</label>
                    </div>
                    <div>
                      <input name="land_rent_val" min="0" step="any" disabled type="number" class="form-control form-control-sm" value="0" />
                    </div>
                  </div>
                  <div class="mb-2 col-md-6">
                    <div>
                      <label class="form-check-label">อัตราค่าเช่า (บาท:เดือน)</label>
                      <input name="land_rent_fee" min="0" step="any" disabled type="number" class="form-control form-control-sm" value="0" />
                    </div>
                  </div>
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
