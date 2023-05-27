<template>
  <div id="cookie-consent-bar">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="text-center p-0 m-0">
            เราใช้คุกกี้ในการให้บริการและปรับปรุงบริการของเรา ตลอดจนเพิ่มประสิทธิภาพให้แก่ประสบการณ์การเรียกดูข้อมูลของคุณ<br />
            หากคุณใช้งานเว็ปไซต์ของเราต่อ ถือว่าคุณยินยอมให้มีการใช้งานคุกกี้&nbsp;<a href="#" @click="acceptCookies">ยอมรับ</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    acceptCookies() {
      // Code to set a cookie or save user preferences
      // You can use a cookie library or localStorage for this purpose
      // For simplicity, we'll use localStorage in this example
      localStorage.setItem('cookieConsent', 'true');

      // Hide the cookie consent bar
      this.$el.style.display = 'none';
    },
  },
  mounted() {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (hasConsent) {
      // If the user has already accepted cookies, hide the bar
      this.$el.style.display = 'none';
    }
  },
};
</script>

<style scoped>
#cookie-consent-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #000;
  color: #fff;
  z-index: 1;
}
</style>
