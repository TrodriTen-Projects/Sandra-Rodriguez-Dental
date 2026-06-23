import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GoogleTagManager from '@/components/GoogleTagManager';
import FacebookPixel from '@/components/FacebookPixel';
import StructuredData from '@/components/StructuredData';
import { WhatsAppButton } from "@/components/buttons/WhatsappButton";
import logoImage from "../../public/logo.svg";
import Image from 'next/image';
import Link from 'next/link'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Dra. Sandra Liliana Rodriguez | Rehabilitación Oral Prostodoncia",
  description: "Servicios especializados de rehabilitación dental y odontología estética realizados por la Dra. Sandra Liliana Rodriguez Ariza.",
  keywords: "rehabilitación dental, odontología estética, Sandra Rodriguez, cuidado dental, blanqueamiento dental, implantes dentales, odontología preventiva, salud bucal, prostodoncia, rehabilitación oral, odontología estética, Sandra Rodriguez, cuidado dental, blanqueamiento dental, implantes dentales, odontología preventiva, salud bucal",
  authors: [{ name: "Dra. Sandra Liliana Rodriguez Ariza" }],
  creator: "Dra. Sandra Liliana Rodriguez Ariza",
  publisher: "Clínica Dental Sandra Rodriguez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sandrarodriguezdental.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dra. Sandra Liliana Rodriguez | Rehabilitación Oral y Prostodoncia',
    description: 'Servicios especializados de rehabilitación dental y odontología estética por la Dra. Sandra Liliana Rodriguez Ariza.',
    url: 'https://www.sandrarodriguezdental.com',
    siteName: 'Sandra Liliana Rodriguez Dental',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: 'https://www.sandrarodriguezdental.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clínica Dental Sandra Rodriguez',
        type: 'image/png',
      },
    ],
  },
  other: {
    'og:logo': 'https://www.sandrarodriguezdental.com/logo.svg',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
    },
  },
  category: 'Salud, Servicios Dentales',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preload" href="/home.webp" as="image" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              window.scrollTo(0, 0);
            }
          `
        }} />
      </head>
      <body
        className={`${dmSans.className} ${dmSans.variable} antialiased`}
      >
         <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          left:20,
          background: "#fff",
          position: 'fixed',

          zIndex: 101
        }}>
          <Link href="/">
          <Image
            src={logoImage}
            alt="Sandra Liliana Rodriguez Dental Logo"
            width={200}
            height={50}
            priority
            fetchPriority="high"
            quality={20}
            style={{ objectFit: "contain" }}
          />
          </Link>
        </div>
        <GoogleAnalytics />
        <GoogleTagManager />
        <FacebookPixel />
        <StructuredData />
        <Navbar/>
        {children}
        <Footer/>
        <WhatsAppButton />
      </body>
    </html>
  );
}
