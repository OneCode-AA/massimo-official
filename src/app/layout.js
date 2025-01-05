import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Massimo Official",
  description: "Created by Mohamed Jalloh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`body ${geistSans.variable} ${geistMono.variable} antialiased leading-relaxed selection:bg-teal-300 selection:text-teal-900`}
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
