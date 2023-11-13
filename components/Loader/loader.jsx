import React from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
const Loader = () => {
  return (
    <div
      style={{display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      <Image src={Logo} style={{height: "100px", width: "200px"}} />
    </div>
  );
};

export default Loader;
