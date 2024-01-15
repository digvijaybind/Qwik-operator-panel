"use client";
import React from "react";
import Top from "../Nav/top";
import Nav from "../Nav/nav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Top />
    </div>
  );
};

export default MainLayout;
