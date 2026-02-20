import LayoutWrapper from "@/components/layout/LayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          {" "}
          <main>{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
