import React from "react";
import { Logo, Wrapper } from "./Exercises.styled";
import LogoRid from "../../assets/logo_rid.png";
import Footer from "../Footer/Footer";

const Exercises = ({ children }) => {
  return (
    <div>
      <Logo src={LogoRid} alt="logo RID" />
      <Wrapper>{children}</Wrapper>
      <div style={{ height: "100px" }}></div>
      <Logo src={LogoRid} alt="logo RID" />
      <Footer />
    </div>
  );
};

export default Exercises;
