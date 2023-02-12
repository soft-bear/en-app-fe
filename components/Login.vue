
<style scoped>
@import '~/assets/login_style.css';
</style>
<template>

  <div class="vue-tempalte">
    <b-card border-variant="primary" header="Primary" header-bg-variant="primary" header-text-variant="white"
      align="center">
      <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
    </b-card>
    <form>
      <h3>Sign In</h3>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
