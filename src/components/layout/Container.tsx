import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto h-full">
      {children}
    </div>
  );
};

export default Container;