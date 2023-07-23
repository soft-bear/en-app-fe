<template>
  <div id="cookie-consent-bar">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="text-center p-0 m-0">
            เว็บไซต์นี้มีการใช้งานคุกกี้เพื่อให้ท่านสามารถใช้บริการได้อย่างต่อเนื่องและอำนวยความสะดวกในการใช้งานเว็บไซต์<br />
            รวมถึงช่วยให้เราปรับปรุงการนำเสนอเนื้อหาตรงตามความต้องการของท่าน โดยสามารถศึกษารายละเอียดเพิ่มเติมได้ใน
            <a href="https://docs.t-reg.co/6827fa77-6460-4fa2-ac5a-b7eea72f6f79/CookPol/ubu_cookie.pdf" target="_blank" rel="noopener noreferrer">นโยบายการใช้คุกกี้</a><br />
            <button class="btn btn-sm btn-outline-eng mt-1" @click="acceptCookies">ยอมรับ</button>
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
