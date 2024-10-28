import { AuthProvider } from "./context/AuthContext";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Font configurations for your Mood-Tracker app
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mood-Tracker",
  description: "Track your daily moods and emotional well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}
      >
        <AuthProvider>
          {/* Header Section */}
          <header className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
            <h1 className="text-xl font-bold">Mood-Tracker</h1>
            {/* Navigation links */}
            <nav className="flex justify-center gap-4 mt-2">
              <a
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-300"
              >
                Home
              </a>
              <a
                href="/login"
                className="hover:text-blue-600 dark:hover:text-blue-300"
              >
                Login
              </a>
              <a
                href="/signup"
                className="hover:text-blue-600 dark:hover:text-blue-300"
              >
                Signup
              </a>
              <a
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-300"
              >
                About
              </a>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer Section */}
          <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} Mood-Tracker. All rights
              reserved.
            </p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
