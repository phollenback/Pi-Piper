// Styles
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Providers
import { ClerkProvider } from '@clerk/nextjs'
import StoreProvider from "./StoreProvider";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReactQueryClientProvider>
          <StoreProvider>
            <html lang="en">
              <head>
                  <link rel="manifest" href="/manifest.json" />
                  <link rel="icon" href="/next.svg" />
                  <link rel="apple-touch-icon" href="/icon.png" />
                  <meta name="theme-color" content="#000000" />
              </head>
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              >
                {children}
                <Toaster />
              </body>
            </html>
          </StoreProvider>
      </ReactQueryClientProvider>
    </ClerkProvider>

  );
}
