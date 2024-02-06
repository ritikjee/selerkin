import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sellerkin",
  description: "A all in one platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          {children}
          <Toaster
            position="top-center"
            richColors
            closeButton
            duration={2000}
          />
        </div>
      </body>
    </html>
  );
}
