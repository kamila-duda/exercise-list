import React from "react";
import {
  Image,
  LogoWrapper,
  Logo,
  SideBarContainer,
  SideBarWrapper,
  StyledLink,
  Title,
  SmallTitle,
} from "./SideBar.styled";
import Wave1 from "../../../src/assets/wave1.svg";
import Wave2 from "../../../src/assets/wave2.svg";
import LogoSiids from "../../../src/assets/favicon.svg";

const SideBar = ({ sections }) => {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <div>
          <LogoWrapper
            href="https://kisi.pcz.pl/siids/"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={LogoSiids} alt="logo SIIDS" />
            Zaciekawiony? <br />
            Zobacz więcej
          </LogoWrapper>
          <Title>Lista zadań:</Title>
          {sections.map((section, index) => {
            return (
              <StyledLink
                to={section.scrollTo}
                spy={true}
                smooth={true}
                activeClass="active"
                href=""
                key={index}
              >
                <SmallTitle>Zadanie nr{index + 1}</SmallTitle>
              </StyledLink>
            );
          })}
        </div>
        <Image src={Wave1} alt="svg wave" />
        <Image src={Wave2} alt="svg wave" />
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
