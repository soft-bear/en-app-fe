<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container fluid>
      <b-navbar-brand href="#">EN UBU APP</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">เข้าสู่ระบบ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt/>
  </div>
</template>
