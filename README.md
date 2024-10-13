# 😊 Mood-Tracker App with Next.js 14, Firebase & TailwindCSS 🎨

## 🌟 Project Overview

This project is a **full-stack Mood-Tracker application** built using **Next.js 14**, **Firebase**, and **TailwindCSS**. Users can log their moods daily using various emojis 🎭, track mood history 📊, and visualize their emotional patterns 💡. It includes user authentication, data storage in Firestore, and a responsive design for mobile & desktop. The app is deployed via **Vercel** for seamless hosting 🚀.

## ✨ Features

- **🧑‍💻 Authentication**: Sign up and login using Firebase Auth.
- **📚 Firestore Database**: Store and retrieve mood data with Firebase Firestore.
- **📱 Responsive Design**: Styled with TailwindCSS for mobile and desktop views.
- **🚀 Deployment**: Easily deploy the app using Vercel.

## 🛠️ Tech Stack

- **Next.js 14**: For server-side rendering and frontend development.
- **Firebase**: Backend-as-a-service for authentication and Firestore.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Vercel**: For hosting and deployment.

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore and Authentication (email/password or Google sign-in).
   - Copy the Firebase configuration and paste it in a `.env.local` file:
     ```bash
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be running on `http://localhost:3000`.

## 🚀 Deployment

To deploy the app on Vercel:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Link the project to Vercel:
   ```bash
   vercel
   ```

3. Set up environment variables in the Vercel dashboard based on your `.env.local`.

4. Deploy:
   ```bash
   vercel --prod
   ```

## 💻 License

This project is open-source and available under the [MIT License](LICENSE).
