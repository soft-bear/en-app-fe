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
					<b-nav-item href="#" v-b-modal.modal-login>
            เข้าสู่ระบบ
					</b-nav-item>
					<login />
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>
