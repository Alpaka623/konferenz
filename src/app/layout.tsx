// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fontsource-variable/inter';

import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gogistisches Reich",
  description: "Offizielles Konferenzblatt & Informationsportal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CssVarsProvider disableTransitionOnChange>
          <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            {/* Sidebar ist jetzt Teil des Root-Layouts und immer da */}
            <Sidebar />
            <Box
              component="main"
              className="MainContent"
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header ist ebenfalls immer da */}
              <Header />
              <Box
                sx={{
                  p: { xs: 2, md: 4 },
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0,
                  height: 'calc(100dvh - 64px)',
                  gap: 1,
                  overflow: 'auto',
                }}
              >
                {/* Hier wird der Inhalt der jeweiligen Seite geladen */}
                {children}
              </Box>
            </Box>
          </Box>
        </CssVarsProvider>
      </body>
    </html>
  );
}