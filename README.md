# EN-UBU Scholarship System

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-2.15.8-00C58E?logo=nuxt.js)](https://nuxtjs.org)
[![Vue.js](https://img.shields.io/badge/Vue.js-2.7.10-4FC08D?logo=vue.js)](https://vuejs.org)
[![BootstrapVue](https://img.shields.io/badge/BootstrapVue-2.22.0-563D7C?logo=bootstrap)](https://bootstrap-vue.org)

**ระบบทุนการศึกษาออนไลน์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยอุบลราชธานี**

This is the Frontend repository for the EN-UBU Scholarship Management System, built with Nuxt.js (SSR). It provides a streamlined interface for students to browse, apply, and track their scholarship applications.

---

## 🛠 Tech Stack

- **Core Framework:** Nuxt.js 2.15.8 (Vue 2)
- **UI Framework:** BootstrapVue
- **Authentication:** Nuxt Auth (@nuxtjs/auth-next) with Laravel Sanctum
- **HTTP Client:** Axios
- **State Management:** Vuex
- **Utilities:** Moment.js (with Thai locale), SweetAlert2, FullCalendar

---

## 📁 Project Structure

```text
├── assets/             # Global styles (app.css, custom login/main styles)
├── components/         
│   ├── content/        # Feature-specific components (Scholarship, Announce)
│   ├── layouts/        # Global UI parts (Navbar, Footer)
│   └── register/       # Registration multi-step flow logic
├── layouts/            # Page layouts (default, content, normal)
├── middleware/         # Auth guards (auth, guest)
├── pages/              # Routing and view components
├── plugins/            # Third-party integrations (Moment Thai)
├── static/             # Static assets (images, favicon)
└── store/              # Vuex modules
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Recommended: LTS v14 or v16 for Nuxt 2 compatibility)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd en-app-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Copy `.env.example` to `.env` and update the values:
   ```bash
   cp .env.example .env
   ```
   - `API_URL`: Backend API endpoint (Laravel).
   - `APP_TITLE`: Application title.

### Development

```bash
# Serve with hot reload at localhost:3000
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Start the production server
npm run start
```

---

## 📋 Development Guidelines

- **Commit Message:** Follow [Conventional Commits](https://www.conventionalcommits.org/).
- **Linting:** Run `npm run lint` before committing to ensure code consistency.
- **Components:** Favor modularity. Use `components/content` for domain-specific logic.
- **Styling:** Adhere to the faculty identity (Primary: `#771E10`). Avoid deep nesting in CSS; prefer utility classes from Bootstrap.

---

## 🏗 CI/CD & Deployment

- **Docker:** Production-ready `Dockerfile` included for SSR deployment.
- **Workflow:** GitHub Actions for automated builds (see `.github/workflows/production.yml`).
- **Target:** Optimized for deployment on GHCR or custom VPS.

---
*Maintained by Engineering UBU Development Team*
