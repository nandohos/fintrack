import { Inter as FontSans } from "next/font/google";
import "~/styles/globals.css";

import { type Metadata } from "next";

import { cn } from "~/lib/utils";
import { TRPCReactProvider } from "~/trpc/react";
import { MainNav } from "./_components/main-nav";
import { SearchNav } from "./_components/search";
import { UserNav } from "./_components/user-nav";

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Financial Tracking App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <header className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6 font-semibold" />
            <div className="ml-auto flex items-center space-x-4">
              <SearchNav />
              <UserNav />
            </div>
          </div>
        </header>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
