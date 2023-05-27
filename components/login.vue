<template>
  <b-form @submit.prevent.stop="handleSubmit">
    <b-form-group label="อีเมลแอดเดรส">
      <b-form-input :state="emailValidation" v-model="username" type="email" placeholder="email@ubu.ac.th" required size="sm">
      </b-form-input>
    </b-form-group>

    <b-form-group label="รหัสผ่าน :">
      <b-form-input :state="isInputPassword" v-model="password" type="password" placeholder="ระบุรหัสผ่านของคุณ" required size="sm"></b-form-input>
    </b-form-group>

    <div class="d-block text-center">
      <b-button type="submit" variant="primary" size="sm" :disabled="loading || !(isInputPassword && emailValidation)">
        เข้าสู่ระบบ
      </b-button>
      <nuxt-link class="btn btn-secondary btn-sm" to="/register">
        ลงทะเบียน
      </nuxt-link>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
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
    }
  },
  created() {
    console.log(this)
  }
}
</script>
