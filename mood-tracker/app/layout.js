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

export const metadata = {
  title: "Mood-Tracker",
  description: "Track your daily moods and emotional well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`} // Added background and text color for better mood-tracker theming
      >
        {children}
      </body>
    </html>
  );
}
