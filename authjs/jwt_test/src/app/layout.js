// 📁 src/app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation"; // ✅ Correct import

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation /> {/* ✅ Add navigation here */}
        {children}
      </body>
    </html>
  );
}
