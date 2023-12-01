import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { ModalProvider } from "@/providers/modal-provider";
import ToasterProvider from "@/providers/toast-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin dasboard",
  description: "Admin dasboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider/>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
