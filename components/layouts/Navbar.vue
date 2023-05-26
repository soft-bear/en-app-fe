<template>
	<b-navbar toggleable="lg" type="dark" class="bg-eng">
		<b-container>
			<nuxt-link to="/" class="navbar-brand">EN UBU APP</nuxt-link>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<nuxt-link class="nav-link" to="/announce">ประชาสัมพันธ์</nuxt-link>
					<nuxt-link class="nav-link" to="/scholarship">ทุนการศึกษา</nuxt-link>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto">
					<nuxt-link class="nav-link" to="/login" v-if="!isLoggedIn">เข้าสู่ระบบ</nuxt-link>
					<a href="#" class="nav-link" @click="handleLogOut" v-else>ออกจากระบบ</a>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn
    }
  },
  methods: {
    async handleLogOut() {
      try {
				this.$nuxt.$loading.start()
        await this.$auth.logout()
        this.$router.push('/login')
				this.$nuxt.$loading.finish()
			} catch (e) { console.log(e) }
    }
  }
}
</script>
