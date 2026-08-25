# 🧸 HeroKidz - Premium Kids' Toy & Care E-commerce Platform

**HeroKidz** is a full-featured, modern, and responsive e-commerce web application designed for browsing, purchasing, and managing kids' toys and care products. Built with performance, security, and exceptional user experience in mind.

🚀 **Live Demo:** [https://hero-kidz-iota.vercel.app](https://hero-kidz-iota.vercel.app)

---

## 🌟 Key Features

### 🛍️ User Experience & Shop
* **Dynamic Product Catalog:** Explore products with real-time dynamic rendering and category-based filtering.
* **Product Details & Cart:** Detailed view of each product with dynamic cart capabilities and instant feedback.
* **HR / Recruiter Demo Mode:** Built-in **Auto Fill Demo Admin Credentials** in the login form for seamless testing.
* **Policy & Support Pages:** Dedicated pages for FAQ, Privacy Policy, Terms & Conditions, and Shipping Info.
* **Responsive & Accessible UI:** Pixel-perfect design tailored for mobile, tablet, and desktop devices.
* **Custom 404 Page:** Engaging, theme-focused 404 page for effortless user navigation.

### 🔐 Authentication & Security
* **NextAuth.js Integration:** Secure credentials-based authentication with OAuth support (Google Sign-In).
* **Protected Routes:** Role-based accessibility for admin and regular users.

### 🛠️ Developer & Admin Features
* **Admin Dashboard:** Centralized layout to manage products, categories, and inventory.
* **Notification System:** Real-time feedback using custom Toast notifications.
* **Contact Integration:** Seamless contact form enabled via EmailJS.

---

## 🛠️ Tech Stack & Tools

* **Frontend:** Next.js (App Router), React, Tailwind CSS, Framer Motion
* **Authentication:** NextAuth.js
* **Database & Hosting:** MongoDB Atlas, Vercel
* **State & Form Management:** React Hooks, React Hot Toast
* **Icons & Assets:** React Icons, Cloudinary / Image Hosting

---

## 🔑 HR & Demo Credentials

For quick evaluation and testing of admin privileges, use the **Auto Fill Demo** button on the Login page or enter manually:

* **Email:** `admin@gmail.com`
* **Password:** `Hero123@`

---

## 🚀 Getting Started (Local Setup)

To run **HeroKidz** on your local machine, follow these steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/opunath26/my-hero-kidz.git](https://github.com/opunath26/my-hero-kidz.git)
cd hero-kidz
2. Install Dependencies
Bash
npm install
3. Environment Variables Setup
Create a .env.local file in the root directory and configure the following variables:

Code snippet
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
4. Run Development Server
Bash
npm run dev
Open http://localhost:3000 in your browser to see the result.

📝 Commit Standard
This project follows Conventional Commits for clean and maintainable version control history:

feat: New features

fix: Bug fixes

style: Design and UI layout updates

chore: Maintenance and build configuration

🤝 Contact & Support
Developed with ❤️ by Apu Nath

Email: apunath1026@gmail.com

Portfolio: apu-nath.vercel.app