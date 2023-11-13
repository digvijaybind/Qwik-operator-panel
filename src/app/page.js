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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching user data)
    const asyncTask = async () => {
      // Replace this with your actual async logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Once the task is done, set loading to false
      setLoading(false);
    };

    asyncTask();
  }, []);
  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Login></Login>
        </>
      )}
    </main>
  );
};
Home.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {...appProps};
};
export default Home;
