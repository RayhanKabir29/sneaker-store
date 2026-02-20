import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full md:bg-[#E7E7E3] px-4 md:px-[60px]">
      {children}
    </div>
  );
};

export default Container;