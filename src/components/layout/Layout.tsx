import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col gap-5">
      <NavBar />
      <section className="flex-[8]">{children}</section>
      <Footer />
    </div>
  );
}

export default Layout;
