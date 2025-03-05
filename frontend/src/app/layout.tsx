// Styles
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Providers
import StoreProvider from "./StoreProvider";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react'
import Footer from './components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import { Providers } from '@/redux/provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  manifest: '/manifest.json',
  icons: {
    icon: '/next.svg',
    apple: '/icon.png',
  }
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <ThemeProvider>
            <SessionProvider>
              <ReactQueryClientProvider>
                <StoreProvider>
                  {children}
                  <Toaster />
                  <Footer />
                </StoreProvider>
              </ReactQueryClientProvider>
            </SessionProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
