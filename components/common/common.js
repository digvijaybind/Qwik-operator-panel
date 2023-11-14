import React from "react";
import Top from "../Nav/top";
import Nav from "../Nav/nav";
import Landing from "../Landing/page";
import Modal from "../Modal";
import Pagin from "../pagination/pagin";
import UpdateModal from "../updatemodal/updatemodal";

const Common = () => {
  return (
    <div>
      
      <UpdateModal />
      <Pagin />
      <Nav /> 
       <Landing /> 
       <Modal />
       <Top />


    </div>
  );
};

export default Common;
