import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const expoArabic = localFont({
  src: [
    {
      path: "../public/fonts/ExpoArabic-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ExpoArabic-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-expo-arabic",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${expoArabic} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="bottom-left" richColors />
        <Footer />
      </body>
    </html>
  );
}
