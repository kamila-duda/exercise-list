import React from "react";
import { ContentWrapper, Logo, Wrapper } from "./Exercises.styled";
import LogoRid from "../../assets/logo_rid.png";
import Footer from "../Footer/Footer";

const Exercises = ({ children }) => {
  return (
    <ContentWrapper>
      <Logo src={LogoRid} alt="logo RID" />
      <Wrapper>{children}</Wrapper>
      <div style={{ height: "100px" }}></div>
      <Logo src={LogoRid} alt="logo RID" />
      <Footer />
    </ContentWrapper>
  );
};

export default Exercises;
