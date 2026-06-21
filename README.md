<div align="center">
  
# 💪 IronCore Gym: Premium Fitness Platform

*A modern, highly interactive, and fully responsive gym management website built with React, TypeScript, and Tailwind CSS.*

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-f01872.svg)](https://www.framer.com/motion/)

<img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop" alt="IronCore Preview" style="border-radius: 12px; margin-top: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />

</div>

---

## 📖 Overview

**IronCore Gym** is a complete front-end solution for modern fitness centers. Designed with premium aesthetics in mind, it leverages **glassmorphism**, dynamic **scroll animations**, and **flawless mobile-responsiveness** to deliver an outstanding user experience.

Whether users are looking to book a high-intensity class, read the latest fitness blog, or view a trainer's schedule, IronCore provides a seamless, SPA (Single Page Application) experience without jarring page reloads.

---

## ✨ Key Features

- **🎨 Premium UI/UX Design**: Uses a curated color palette (Dark Slate, Neon Orange, and Soft Whites) alongside frosted glass (`backdrop-blur`) components for a cutting-edge look.
- **📱 Fully Responsive Mobile Navigation**: Features a custom-built, full-screen mobile drawer with an integrated glassmorphic card for navigation and authentication.
- **🚀 Advanced Routing Architecture**: Powered by `react-router-dom` with lazy-loading (`Suspense`) for blazing-fast page transitions.
- **🏋️ Dedicated Features Pages**:
  - **Trainer Profiles (`/trainers/:id`)**: Detailed views showing trainer schedules, experience, and certifications.
  - **Class Booking (`/classes/book/:id`)**: A robust booking form interface with instant visual confirmations.
  - **Article Reader (`/blog/:id`)**: A distraction-free, beautifully typographed reading mode for fitness articles.
- **🔐 Auth Interfaces**: Clean, conversion-optimized forms for User Login and Registration.

---

## 📂 Detailed File Structure

The project is structured for high scalability and clean separation of concerns.

```text
jym-website/
├── public/                     # Static root assets (Favicons, manifest files)
├── src/
│   ├── components/             # Reusable, stateless UI components
│   │   ├── common/             # Global elements: Navbar.tsx, Footer.tsx, GlowCard.tsx
│   │   └── ...
│   ├── constants/              # Centralized mock data storage
│   │   └── index.ts            # Houses TRAINERS, CLASSES, BLOG_POSTS, and FAQ data
│   ├── layouts/                # Application layouts
│   │   └── PublicLayout.tsx    # Wraps public routes with the Navbar and Footer
│   ├── pages/                  # Route-level components (Lazy Loaded)
│   │   ├── auth/               # LoginPage.tsx, RegisterPage.tsx
│   │   └── public/             # HomePage, AboutPage, TrainersPage, BlogPage, etc.
│   ├── routes/                 # Routing logic
│   │   └── index.tsx           # Configures the createBrowserRouter tree
│   ├── lib/                    # Utilities and helper functions
│   │   └── utils.ts            # Tailwind class merger (clsx + tailwind-merge)
│   ├── App.tsx                 # Root application wrapper
│   └── main.tsx                # React DOM entry point
├── package.json                # Project dependencies and NPM scripts
├── tailwind.config.js          # Tailwind theme configurations and custom colors
├── tsconfig.app.json           # Strict TypeScript compilation rules
└── vite.config.ts              # Vite bundler configuration
```

---

## 🛠️ Tech Stack & Libraries

- **React 18**: Core library for building the UI.
- **TypeScript**: Ensures type-safety and prevents runtime errors.
- **Vite**: Next-generation frontend tooling for instant server starts and lightning-fast HMR.
- **Tailwind CSS v3**: Utility-first CSS framework for rapid, custom styling.
- **Framer Motion**: Production-ready declarative animation library for React.
- **React Router v6**: Declarative routing for React applications.
- **Lucide React**: Beautiful, consistent icon pack.
- **React Hook Form**: Performant, flexible, and extensible forms.

---

## 🚀 How to Run Locally

### Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine. You can verify this by running `node -v` in your terminal.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "JYM Website"
   ```

2. **Install all dependencies**:
   Run this command in the root folder to download all required packages.
   ```bash
   npm install
   ```

3. **Start the local development server**:
   This will spin up Vite with Hot Module Replacement (HMR).
   ```bash
   npm run dev
   ```
   > The application will typically start at **`http://localhost:5173`**.

4. **Build for Production**:
   When you are ready to deploy, run the build script to generate a highly optimized static bundle in the `dist` folder.
   ```bash
   npm run build
   ```

---

## ⚙️ Customization Guide

- **Changing Colors**: Open `tailwind.config.js`. You can modify the primary brand colors (currently mapped to Slate `#0f172a` and Orange `#ea580c`).
- **Editing Data**: Open `src/constants/index.ts`. All of the trainers, gym classes, and blog posts are stored here as TypeScript arrays. You can easily swap out images, names, and descriptions without touching the UI code!

---

<br />

<div align="center">
  <h3>💻 Developed By Prathamesh Giri</h3>
  <p>
    Passionate Full Stack Developer creating premium web experiences.
  </p>
  <p>
    <a href="https://prathameshgiri.in/" target="_blank">
      <img src="https://img.shields.io/badge/Portfolio-Visit_Website-ea580c?style=for-the-badge" alt="Portfolio" />
    </a>
  </p>
</div>
