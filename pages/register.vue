<template>
  <div class="container my-4">
    <div class="row">
      <div class="col">
        <h4><strong>ลงทะเบียน</strong></h4>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div class="card">
          <div class="bg-info text-white card-header">
            <span class="align-middle">ข้อมูลการเข้าสู่ระบบ</span>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">ชื่อ - นามสกุล</label>
              <b-form-input class="form-control form-control-sm" :state="isInputFullname" v-model="form.fullname" required
                type="text" placeholder="ไม่ต้องใส่คำนำหน้านาม" />
            </div>
            <div class="mb-3">
              <label class="form-label">อีเมลแอดเดรส</label>
              <b-form-input class="form-control form-control-sm" :state="emailValidation" v-model="form.username" required
                type="email" placeholder="example@ubu.ac.th" />
            </div>
            <div class="mb-3">
              <label class="form-label">ตั้งค่ารหัสผ่าน</label>
              <b-form-input class="form-control form-control-sm" :state="isMatchPassword" v-model="form.set_password"
                required type="password" placeholder="ระบุการตั้งค่ารหัสผ่าน" />
            </div>
            <div class="mb-3">
              <label class="form-label">ยืนยันรหัสผ่าน</label>
              <b-form-input class="form-control form-control-sm" :state="isMatchPassword" v-model="form.con_password"
                required type="password" placeholder="ระบุการยืนยันรหัสผ่าน" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card text-center">
              <div class="bg-dark text-white card-header"><span class="align-middle">การยินยอมให้ใช้ข้อมูลส่วนบุคคล</span>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="consent">
                      <input type="checkbox" v-model="form.is_consent" id="consent" class="form-check-input" />
                      <br />ยอมให้เก็บ/เปิดเผยข้อมูลตัวหรือไม่ ?
                    </label>
                    <p class="p-0">
                      โปรดศึกษาประกาศความเป็นส่วนตัว<br>ด้านข้อมูลส่วนบุคคลของนักศึกษามหาวิทยาลัยอุบลราชธานี<a
                        href="https://www.ubu.ac.th/web/files_up/00133f2022053118594393.pdf" target="_blank"
                        rel="noreferrer">ที่นี่</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-4">
      <div class="card-body">
        <div class="row">
          <div class="col text-center">
            <button class="btn btn-sm" :class="checkSubmitForm ? 'btn-success' : 'btn-outline-secondary'"
              :disabled="!checkSubmitForm">ลงทะเบียน</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated'],
  data() {
    return {
      form: {
        username: '',
        fullname: '',
        set_password: '',
        con_password: '',
        is_consent: false,
      }
    }
  },
  computed: {
    emailValidation() {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return this.form.username === '' ? null : pattern.test(this.form.username)
    },
    isMatchPassword() {
      if (this.form.set_password === '' || this.form.con_password === '') {
        return null
      }

      return this.form.set_password === this.form.con_password
    },
    isInputFullname() {
      return this.form.fullname === '' ? null : true
    },
    checkSubmitForm() {
      return this.emailValidation && this.isMatchPassword && this.isInputFullname && this.form.is_consent
    }
  }
}
</script>
