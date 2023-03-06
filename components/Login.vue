<template>
	<b-modal id="modal-login" hide-footer hide-header>
		<template #modal-title>
			เข้าสู่ระบบ
		</template>
		<b-form @submit="onSubmit">
			<b-form-group label="อีเมลแอดเดรส">
				<b-form-input id="input-1" v-model="auth.email" type="email" placeholder="email@ubu.ac.th" required>
				</b-form-input>
			</b-form-group>

			<b-form-group label="รหัสผ่าน :">
				<b-form-input v-model="auth.password" type="password" placeholder="ระบุรหัสผ่านของคุณ"
					required></b-form-input>
			</b-form-group>

			<div class="d-block text-center">
				<b-button type="submit" variant="primary">
					<font-awesome-icon icon="right-to-bracket"/>&nbsp;เข้าสู่ระบบ
				</b-button>
				<nuxt-link class="btn btn-secondary" to="register">
					<font-awesome-icon icon="user-plus"/>&nbsp;ลงทะเบียน
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
			alert(JSON.stringify(this.auth))
		}
	}
}
</script>
