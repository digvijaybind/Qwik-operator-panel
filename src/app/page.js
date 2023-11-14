"use client";
import Landing from "../../components/Landing/page";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav/nav";
import Top from "../../components/Nav/top";
import Pagin from "../../components/pagination/pagin";
import {Providers} from "../store/provider";
import Login from "./login/page";
import Loader from "../../components/Loader/loader";
import React, {useState, useEffect} from "react";
import App from "next/app";
const Home = () => {
  return (
    <main>
      <Login></Login>
    </main>
  );
};

export default Home;
