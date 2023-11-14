import React from "react";
import Top from "../Nav/top";
import Nav from "../Nav/nav";
import Landing from "../Landing/page";
import Modal from "../Modal";
import UpdateModal from "../UpdateModal/page";
import Pagin from "../pagination/pagin";

const Common = () => {
  return (
    <div>
      <Top />
      <Nav />
      <Landing />
      <Modal />
      <UpdateModal />
      <Pagin />
    </div>
  );
};

export default Common;
