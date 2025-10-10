# 🦸‍♂️ Hero IO

Hero IO is a responsive web application that showcases a curated collection of mobile apps with install/uninstall functionality, live search, sorting, and detailed analytics. Built with React, Tailwind CSS, and DaisyUI, it delivers a polished user experience with persistent state management and dynamic UI feedback.

## 🚀 Live Demo
[Visit the deployed site](https://dreamy-sprite-ce4b04.netlify.app/)

## 📦 Technologies Used
- React
- React Router
- Tailwind CSS
- DaisyUI
- Recharts
- LocalStorage
- Netlify (or Vercel/Cloudflare)

## 📱 Features

### 🧱 Layout & Navigation
- Responsive design for all devices
- Custom header with logo, nav links, and GitHub contribution button
- Creative footer with personalized styling

### 🏠 Home Page
- Banner with App Store & Play Store buttons
- States section with dynamic cards
- Top Apps section showing 8 featured apps
- “Show All” button linking to All Apps page

### 📚 All Apps Page
- Title and subtitle section
- Live search with case-insensitive filtering
- App count display and search bar
- Sorting dropdown (High-Low / Low-High by downloads)
- “No App Found” message for unmatched queries

### 📊 App Details Page
- App image, title, rating, downloads, and reviews
- Install button with toast feedback and disabled state
- Review chart using Recharts
- Full app description

### 🧠 My Installation Page
- Displays installed apps from localStorage
- Uninstall button with toast feedback
- Sorting by download count

### ⚠️ Error & UX Enhancements
- Custom 404 error page
- Loading animations during navigation and search
- “Not Found” message for invalid app IDs
- SPA-safe routing for deployment

## 🧪 Challenge Features
- Persistent install/uninstall logic synced with localStorage
- Toast notifications for install/uninstall actions
- Confirmation modals and undo logic (optional enhancements)
- Emoji feedback and dynamic badges (optional polish)

## 📁 Folder Structure
