import React from "react";
import Navbar from "../common/Header";
import Footer from "../common/Footer";

type Props = {
  children: React.ReactNode;
};

function LayoutWrapper({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default LayoutWrapper;
