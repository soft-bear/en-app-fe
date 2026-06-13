<template>
  <div>
    <!-- Cookie Banner -->
    <transition name="fade">
      <div v-if="showBanner" class="cookie-banner shadow-sm p-4 border rounded-lg bg-white">
        <div class="container-fluid p-0">
          <div class="row align-items-center">
            <div class="col-lg-8 mb-3 mb-lg-0">
              <h5 class="mb-2 font-weight-bold">เราให้ความสำคัญกับความเป็นส่วนตัวของคุณ</h5>
              <p class="text-muted small mb-0">
                เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์
                ท่านสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก "การตั้งค่าคุกกี้"
                หรือศึกษารายละเอียดเพิ่มเติมได้ที่
                <a
                  href="https://docs.t-reg.co/6827fa77-6460-4fa2-ac5a-b7eea72f6f79/CookPol/ubu_cookie.pdf"
                  target="_blank"
                  class="text-primary font-weight-bold"
                  >นโยบายการใช้คุกกี้</a
                >
              </p>
            </div>
            <div class="col-lg-5 text-lg-right mt-3 mt-lg-0">
              <button class="btn btn-link btn-sm text-muted mr-3" @click="showSettings">
                การตั้งค่าคุกกี้
              </button>
              <button class="btn btn-outline-primary btn-sm mr-2 px-3" @click="acceptNecessary">
                เฉพาะที่จำเป็น
              </button>
              <button class="btn btn-primary btn-sm px-4" @click="acceptAll">
                ยอมรับทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Cookie Settings Modal -->
    <b-modal
      id="cookie-settings-modal"
      v-model="showSettingsModal"
      title="การตั้งค่าคุกกี้"
      hide-footer
      centered
      size="lg"
      body-class="p-0"
    >
      <div class="p-4">
        <p class="small text-muted mb-4">
          เมื่อคุณเข้าชมเว็บไซต์ใดก็ตาม เว็บไซต์นั้นอาจจัดเก็บหรือดึงข้อมูลจากเบราว์เซอร์ของคุณ
          ส่วนใหญ่อยู่ในรูปแบบของคุกกี้ ข้อมูลนี้อาจเกี่ยวกับคุณ ความชอบของคุณ หรืออุปกรณ์ของคุณ
          และส่วนใหญ่จะถูกใช้เพื่อให้เว็บไซต์ทำงานอย่างที่คุณคาดหวัง
        </p>

        <!-- Category: Necessary -->
        <div class="cookie-category mb-4 border-bottom pb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="mb-0 font-weight-bold">คุกกี้ที่จำเป็น (Strictly Necessary Cookies)</h6>
            <span class="badge badge-secondary">เปิดใช้งานเสมอ</span>
          </div>
          <p class="small text-muted mb-0">
            คุกกี้ประเภทนี้มีความจำเป็นต่อการทำงานของเว็บไซต์ เพื่อให้เว็บไซต์สามารถทำงานได้เป็นปกติ
            มีความปลอดภัย และทำให้ท่านสามารถเข้าใช้เว็บไซต์ได้ เช่น การ log in เข้าสู่เว็บไซต์
            การยืนยันตัวตน เป็นต้น
          </p>
        </div>

        <!-- Category: Analytics -->
        <div class="cookie-category mb-4 border-bottom pb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="mb-0 font-weight-bold">คุกกี้เพื่อการวิเคราะห์ (Analytics Cookies)</h6>
            <b-form-checkbox v-model="preferences.analytics" switch size="lg"></b-form-checkbox>
          </div>
          <p class="small text-muted mb-0">
            คุกกี้ประเภทนี้จะช่วยให้เราสามารถวัดผลการทำงานของเว็บไซต์
            โดยประมวลผลเป็นสถิติการเข้าชมเว็บไซต์ เพื่อให้เรานำข้อมูลเหล่านั้นมาปรับปรุงเว็บไซต์ของเราให้ดียิ่งขึ้น
          </p>
        </div>

        <!-- Category: Marketing -->
        <div class="cookie-category mb-4 border-bottom pb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="mb-0 font-weight-bold">คุกกี้เพื่อการตลาด (Marketing Cookies)</h6>
            <b-form-checkbox v-model="preferences.marketing" switch size="lg"></b-form-checkbox>
          </div>
          <p class="small text-muted mb-0">
            คุกกี้ประเภทนี้ใช้เพื่อติดตามพฤติกรรมการเข้าชมเว็บไซต์ของท่าน
            เพื่อนำเสนอโฆษณาที่เกี่ยวข้องและตรงกับความสนใจของท่าน
          </p>
        </div>

        <div class="text-right mt-4 pt-2">
          <button class="btn btn-outline-primary mr-2" @click="savePreferences">
            บันทึกการตั้งค่า
          </button>
          <button class="btn btn-primary" @click="acceptAll">
            ยอมรับทั้งหมด
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: false,
      showSettingsModal: false,
      preferences: {
        necessary: true,
        analytics: false,
        marketing: false,
      },
    }
  },
  mounted() {
    this.checkConsent()
    this.$root.$on('show-cookie-settings', () => {
      this.showSettingsModal = true
    })
  },
  methods: {
    checkConsent() {
      try {
        const savedPreferences = localStorage.getItem('cookiePreferences')
        if (savedPreferences) {
          this.preferences = { ...this.preferences, ...JSON.parse(savedPreferences) }
        } else {
          // Check for legacy consent
          const legacyConsent = localStorage.getItem('cookieConsent')
          if (!legacyConsent) {
            this.showBanner = true
          }
        }
      } catch (e) {
        this.showBanner = true
      }
    },
    showSettings() {
      this.showSettingsModal = true
    },
    acceptAll() {
      this.preferences.analytics = true
      this.preferences.marketing = true
      this.savePreferences()
    },
    acceptNecessary() {
      this.preferences.analytics = false
      this.preferences.marketing = false
      this.savePreferences()
    },
    savePreferences() {
      try {
        localStorage.setItem('cookiePreferences', JSON.stringify(this.preferences))
        localStorage.setItem('cookieConsent', 'true') // For backward compatibility
      } catch (e) {}
      this.showBanner = false
      this.showSettingsModal = false
      
      // Emit event so other components can react (e.g. load GTM)
      this.$root.$emit('cookie-preferences-updated', this.preferences)
    },
  },
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  z-index: 9999;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .cookie-banner {
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    border-radius: 0 !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cookie-category h6 {
  color: #333;
}

.badge-secondary {
  background-color: #6c757d;
  font-weight: 500;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
