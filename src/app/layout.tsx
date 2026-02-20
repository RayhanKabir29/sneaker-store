import type { Metadata } from 'next';
import { Open_Sans, Rubik } from 'next/font/google';
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Providers } from '@/app/providers';
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kicks - Premium Sneaker Store',
  description: 'The biggest hyperstore for sneakers and athletic footwear',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${rubik.variable} antialiased`}>
        <LayoutWrapper>
          <Providers><main>{children}</main></Providers>
        </LayoutWrapper>
      </body>
    </html>
  );
}
