<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="/">EN UBU APP</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link class="nav-link" to="annouce">
          <b-icon icon="megaphone"></b-icon> ข่าวประชาสัมพันธ์</nuxt-link>
        <nuxt-link class="nav-link" to="schorlarship">
          <b-icon icon="cash"></b-icon> ทุนการศึกษา</nuxt-link>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <nuxt-link class="nav-link" to="login">
          <b-icon icon="person"></b-icon> เข้าสู่ระบบ</nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
