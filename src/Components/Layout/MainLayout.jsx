import React from "react";
import NavLayout from "./NavLayout";
import Footer from "./Footer";
import Header from "./Header";
import Speciality from "./Speciality";
import Body from "./Body";
import CopyRights from "./CopyRights";

const Main = () => {
  return (
    <>
      <NavLayout />
      <Header />
      <Body />
      <Footer />
      <CopyRights />
    </>
  );
};

export default Main;
