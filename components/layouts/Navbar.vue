<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="/">EN UBU APP</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link class="nav-link" to="/articles">
          <b-icon icon="megaphone"></b-icon> ข่าวประชาสัมพันธ์</nuxt-link>
        <nuxt-link class="nav-link" to="/scholarships">
          <b-icon icon="cash"></b-icon> ทุนการศึกษา</nuxt-link>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" v-b-modal.modal-1><b-icon icon="person"></b-icon> เข้าสู่ระบบ</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <Login />
</div>
</template>
