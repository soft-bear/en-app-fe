<template>
  <b-form @submit.prevent.stop="handleSubmit">
    <b-form-group label="อีเมลแอดเดรส">
      <b-form-input id="input-1" v-model="username" type="email" placeholder="email@ubu.ac.th" required size="sm">
      </b-form-input>
    </b-form-group>

    <b-form-group label="รหัสผ่าน :">
      <b-form-input v-model="password" type="password" placeholder="ระบุรหัสผ่านของคุณ" required size="sm"></b-form-input>
    </b-form-group>

    <div class="d-block text-center">
      <b-button type="submit" variant="primary" size="sm" :disabled="loading">
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
  methods: {
    async handleSubmit() {
      this.loading = true
      try {
        await this.$auth.loginWith('sanctumToken', { data: { username: this.username, password: this.password } })
        this.$router.push('/')
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
