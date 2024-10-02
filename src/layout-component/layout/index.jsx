import React from "react";
import NavBar from "../navBar";
import Footer from "../footer";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
