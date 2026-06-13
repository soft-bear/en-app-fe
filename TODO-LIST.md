# Project Redesign & TypeScript Migration Roadmap (SENIOR SA/SE/UX Perspective)

วิเคราะห์ระบบปัจจุบัน: ระบบเป็น Nuxt 2 (Vue 2) ใช้ BootstrapVue เป็นหลัก การออกแบบปัจจุบันมีความเป็น Traditional Form-heavy และมี UI ที่ค่อนข้างหนา (Borders/Cards เยอะ) แผนนี้จะมุ่งเน้นการปรับปรุง UX ให้ทันสมัย (Modern Clean Look) โดยไม่กระทบต่อ API เดิม

---

## 📋 Phase 1: Foundation & Design System (UI/UX Transformation)
*เป้าหมาย: สร้าง Identity ใหม่ที่ดูโปร่ง เบา และใช้งานง่ายขึ้น*

- [ ] **Design Token Definition:**
    - ปรับปรุงสี Primary (`#771E10`) ให้มีน้ำหนัก (Shades) หลากหลายขึ้นเพื่อใช้ใน UI States (Hover, Active, Disabled).
    - เปลี่ยนจาก "Card-heavy" เป็น "White Space & Subtle Shadows" เพื่อลด Visual Noise.
- [ ] **Typography:**
    - จัดระดับ Hierarchy ของ 'Google Sans' และ 'Noto Sans Thai' ให้ชัดเจนขึ้น (ปรับ Line-height และ Letter-spacing).
- [ ] **Custom Style Overhaul:**
    - สร้าง `assets/scss/main.scss` เพื่อ Override Bootstrap Defaults.
    - เปลี่ยน Input Fields จากขอบหนาเป็น Minimal Floating Label หรือ Underline Style.
- [ ] **Global Components Redesign:**
    - **Navbar:** ปรับให้เป็น Sticky/Blur Effect (Glassmorphism) และเพิ่ม Active State ที่ชัดเจน.
    - **Footer:** ปรับให้มีความ Modern และจัดกลุ่มข้อมูลให้น่าอ่านขึ้น.

---

## 🚀 Phase 2: Core UX Enhancements
*เป้าหมาย: ลด Cognitive Load และเพิ่ม Engagement*

- [ ] **Dashboard & Discovery (Home/Scholarship):**
    - เปลี่ยนการแสดงผลทุนการศึกษาจาก Table-list เป็น **Modern Cards** ในหน้าแรก และใช้ Table เฉพาะหน้า "ติดตามผล".
    - เพิ่ม Search & Filter ที่ใช้งานง่าย (Real-time filtering).
- [ ] **Registration Flow (Step-by-step):**
    - **Progress Indicator:** ออกแบบใหม่ให้เห็นชัดเจนว่าอยู่ขั้นตอนไหน และขั้นตอนที่ผ่านมาสำเร็จแล้วหรือยัง.
    - **Inline Validation:** แทนที่ `msgBoxOk` ด้วยการเช็คข้อมูลแบบ Real-time และใช้ **Toasts/Snackbars** สำหรับ Success Message.
    - **Address Autocomplete:** ปรับ UI ของ `vue-thailand-address-autocomplete` ให้เข้ากับ Design System ใหม่.
- [ ] **Feedback System:**
    - เพิ่ม **Skeleton Screens** ระหว่างรอ API (`loadingActive`, `loadingPassed`) แทนการใช้ `b-overlay` ที่ดูทึบเกินไป.
    - ใช้ Micro-interactions (Transitions) เมื่อมีการเปลี่ยน Step หรือโหลดข้อมูล.

---

## 🛠️ Phase 3: Technical Refactoring (Pre-TypeScript)
*เป้าหมาย: จัดระเบียบโค้ดให้พร้อมสำหรับการรับรอง TS*

- [ ] **Modularization:**
    - แยก Logic ขนาดใหญ่ใน `register/step1.vue` ออกเป็น Sub-components เล็กๆ (เช่น `AddressForm.vue`, `ScholarshipHistory.vue`).
- [ ] **Axios Wrapper/Pattern:**
    - แม้จะใช้ Pattern เดิม แต่ควรจัดกลุ่ม API Calls ไว้ใน `services/` หรือ `repository/` layer เพื่อให้ง่ายต่อการใส่ Types ในอนาคต.
- [ ] **Vuex Cleanup:**
    - ปรับ Store ให้รองรับการเก็บ State ที่เป็นระเบียบขึ้น (แบ่ง Module ชัดเจน).

---

## 📘 Phase 4: TypeScript Migration (Incremental Path)
*เป้าหมาย: เพิ่ม Type Safety โดยไม่กระทบ Production*

- [ ] **Environment Setup:**
    - ติดตั้ง `@nuxt/typescript-build` และคอนฟิก `tsconfig.json`.
- [ ] **Data Modeling:**
    - สร้าง `types/index.ts` หรือ `interfaces/` เพื่อนิยาม API Response Models (เช่น `Scholarship`, `User`, `Address`).
- [ ] **Component Migration:**
    - เริ่มเปลี่ยนจาก `<script>` เป็น `<script lang="ts">` ทีละ Component (เริ่มจาก UI Components ขนาดเล็ก).
    - ใช้ `Vue.extend()` หรือ `Composition API (via @vue/composition-api)` เพื่อการจัดการ Types ที่ดีขึ้นใน Nuxt 2.

---

## ✨ Phase 5: Quality Assurance & Polish
- [ ] **Mobile First Optimization:** ทดสอบ UX บน Mobile ให้ใช้งานได้ลื่นไหล (Thumb-friendly buttons).
- [ ] **Performance:** ตรวจสอบ Bundle Size และทำ Image Optimization.
- [ ] **Accessibility (A11y):** ตรวจสอบ Contrast Ratio และการใช้ Screen Readers.

---

### ⚠️ Constraints & Compliance (รักษาโครงเดิม)
1. **API:** ห้ามเปลี่ยนโครงสร้าง Request/Response (ยึดตามที่เห็นใน `$axios.post('/scholarships/registration/step1', ...)`).
2. **Framework:** ยังคงใช้ Nuxt 2 และ BootstrapVue แต่เน้นการเขียน CSS ทับเพื่อเปลี่ยน Look & Feel.
3. **Auth:** ใช้ `@nuxtjs/auth-next` ตามเดิม แต่ปรับปรุง UI หน้า Login ให้ดู Professional มากขึ้น.
