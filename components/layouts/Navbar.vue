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
          <b-nav-item-dropdown :text="$auth.user.data.name" v-if="loggedIn">
            <nuxt-link class="dropdown-item" to="/account">บัญชีผู้ใช้</nuxt-link>
            <nuxt-link class="dropdown-item" to="/profile" :event="true ? '' : 'click'">ข้อมูลส่วนตัว</nuxt-link>
            <nuxt-link class="dropdown-item" to="/follow">ติดตามผล</nuxt-link>
            <b-dropdown-divider></b-dropdown-divider>
            <a class="dropdown-item" style="cursor: pointer;" @click="handleLogOut">ออกจากระบบ</a>
          </b-nav-item-dropdown>
					<nuxt-link class="nav-link" to="/login" v-if="!loggedIn">เข้าสู่ระบบ</nuxt-link>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
export default {
  computed: {
    loggedIn() {
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
