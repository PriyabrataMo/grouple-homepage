import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grouple |  Group Booking Management System",
  description:
    "A concierge platform that simplifies group bookings and enhances the guest experience.",
  openGraph: {
    title: "Grouple | Group Booking Management System",
    description:
      "A concierge platform that simplifies group bookings and enhances the guest experience.",
    url: "https://grouple.tech",
    siteName: "Grouple",
    images: [
      {
        url: "https://grouple.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grouple - Group Booking Management System",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image", // Defines the type of Twitter Card
    title: "Grouple | Group Booking Management System", // Title displayed on Twitter
    description:
      "A concierge platform that simplifies group bookings and enhances the guest experience.", // Description displayed on Twitter
    images: [
      {
        url: "https://grouple.tech/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grouple - Group Booking Management System",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://grouple.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="og:title"
        content="Grouple | Group Booking Management System"
      />

      <body
        className={`${plusJakartaSans.variable} ${manrope.variable} antialiased bg-black text-white binary-bg`}
      >
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
