<template>
	<b-modal id="modal-login" hide-footer hide-header>
		<template #modal-title>
			<b-icon icon="box-arrow-in-right"></b-icon> เข้าสู่ระบบ
		</template>
		<b-form @submit="onSubmit">
			<b-form-group label="อีเมลแอดเดรส">
				<b-form-input id="input-1" v-model="auth.email" type="email" placeholder="email@ubu.ac.th" required size="sm">
				</b-form-input>
			</b-form-group>

			<b-form-group label="รหัสผ่าน :">
				<b-form-input v-model="auth.password" type="password" placeholder="ระบุรหัสผ่านของคุณ" required size="sm"></b-form-input>
			</b-form-group>

			<div class="d-block text-center">
				<b-button type="submit" variant="primary" size="sm">
					<b-icon icon="box-arrow-in-right"></b-icon>  เข้าสู่ระบบ
				</b-button>
				<nuxt-link class="btn btn-secondary btn-sm" to="/register">
					<b-icon icon="pen"></b-icon>  ลงทะเบียน
				</nuxt-link>
			</div>
		</b-form>
	</b-modal>
</template>

<script>
export default {
	data() {
		return {
			auth: {
				username: '',
				password: '',
			}
		}
  },
  methods: {
    onSubmit() {
      alert('Form Is Submitted.');
    }
  }
}
</script>
