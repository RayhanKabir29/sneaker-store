import Footer from "@/components/layout/Footer";
import Menu from "@/components/layout/Menu";
import { FC } from "react";

interface Iprops {
  children: React.ReactNode;
}

const LayoutWrapper: FC<Iprops> = async ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu  />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
