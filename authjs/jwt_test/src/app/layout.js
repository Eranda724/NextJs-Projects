import { Inter } from "next/font/google"; // ✅ Correct import
import "./globals.css";
import { Navigation } from "../components/Navigation";
// 📁 app/layout.js

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Family Guy',
  description: 'Come here and learn more about Family Guy!',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
