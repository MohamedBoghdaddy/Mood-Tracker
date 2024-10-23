import { Inter } from "next/font/google"; // Importing Inter from Google Fonts
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

const inter = Inter({ subsets: ["latin"] }); // Adding the Inter font from Google Fonts

// Metadata for your application
export const metadata = {
  title: "Mood-Tracker", // Keeping the original title
  description: "Track your daily moods and emotional well-being.", // Keeping the original description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}
      >
        {/* Header Section */}
        <header className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
          <h1 className="text-xl font-bold">Header</h1> {/* Header title can be customized */}
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Section */}
        <footer className="p-4 bg-gray-200 dark:bg-gray-800 text-center">
          <p>Footer</p> {/* Footer content can be customized */}
        </footer>
      </body>
    </html>
  );
}
