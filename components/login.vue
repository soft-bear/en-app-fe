<template>
  <b-form @submit.prevent.stop="handleSubmit">
    <b-form-group label="อีเมลแอดเดรส">
      <b-form-input :state="emailValidation" v-model="username" type="email" placeholder="example@ubu.ac.th" required size="sm">
      </b-form-input>
    </b-form-group>

    <b-form-group label="รหัสผ่าน :" v-if="!isReset">
      <b-form-input :state="isInputPassword" v-model="password" type="password" placeholder="ระบุรหัสผ่าน" required size="sm"></b-form-input>
    </b-form-group>

    <div v-if="!isReset">
      <span class="btn btn-link pl-0 text-danger btn-sm" @click="isReset = true">ลืมรหัสผ่าน</span>
    </div>

    <div class="d-block text-center" v-if="!isReset">
      <b-button type="submit" variant="outline-primary" size="sm" :disabled="loading || !(isInputPassword && emailValidation)">
        เข้าสู่ระบบ
      </b-button>
      <nuxt-link class="btn btn-outline-secondary btn-sm" to="/register">
        ลงทะเบียน
      </nuxt-link>

    </div>
    <div class="d-block text-center" v-else>
      <b-button type="button" variant="outline-primary" size="sm" :disabled="loading || !(emailValidation)" @click="sendEmailToResetPassword">
        ตั้งค่ารหัสผ่านใหม่
      </b-button>
      <b-button type="button" variant="outline-secondary" size="sm" @click="isReset = false">
        กลับ
      </b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      isReset: false,
      username: '',
      password: '',
    }
  },
  computed: {
    emailValidation() {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return this.username === '' ? null : pattern.test(this.username)
    },
    isInputPassword() {
      return this.password === '' ? null : true
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      try {
        if (this.emailValidation && this.isInputPassword) {
          await this.$auth.loginWith('sanctumToken', { data: { username: this.username, password: this.password } })
          this.$router.push('/')
        }

        throw new Error('validation error')
      } catch (e) {
        this.$bvModal.msgBoxOk('ไม่สามารถเข้าสู่ระบบ', {
          title: 'ผิดพลาด',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      }
      this.loading = false
    },
		async sendEmailToResetPassword() {
      this.loading = true

      try {
        const payload = { username: this.username }
				await this.$axios.post('/auth/reset/password', payload)

				this.username = ''
				this.isReset = false


        this.$bvModal.msgBoxOk('ส่งอีเมลเพื่อส่งลิงก์สำหรับตั้งค่ารหัสผ่านใหม่เรียบร้อยแล้ว', {
          title: 'สำเร็จ',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'py-2 border-bottom-0',
          footerClass: 'py-2 border-top-0',
          centered: true
        })
      } catch (error) {
        this.$bvModal.msgBoxOk(error.message, {
          title: 'ผิดพลาด',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'py-2 border-bottom-0',
          footerClass: 'py-2 border-top-0',
          centered: true
        })
      }

      this.loading = false
    }
  }
}
</script>
