import type { Metadata } from "next";
import { Open_Sans, Rubik } from "next/font/google";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Providers } from "@/app/providers";
import "./global.css";
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kicks - Premium Sneaker Store",
  description: "The biggest hyperstore for sneakers and athletic footwear",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${openSans.variable} ${rubik.variable} antialiased`}>
        <Providers>
          <LayoutWrapper>
            <main > {children}</main>
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
