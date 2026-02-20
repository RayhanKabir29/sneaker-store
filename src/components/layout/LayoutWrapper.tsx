import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { FC } from "react";

interface Iprops {
  children: React.ReactNode;
}

const LayoutWrapper: FC<Iprops> = async ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header  />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
