import styled from "styled-components";
import { Link } from "react-scroll";

export const SideBarContainer = styled.div``;

export const Title = styled.h2`
  color: #fdfdfd;
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  color: #fdfdfd;
  font-size: 20px;
  text-decoration: none;
  margin: 10px 0 60px;
  letter-spacing: 0.05em;
  :hover {
    color: #0099ff;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

export const SmallTitle = styled.h3`
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.05em;
`;

export const Image = styled.img`
  width: 260px;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

export const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  overflow-y: scroll;
  height: 100vh;
  width: 300px;
  background: linear-gradient(
    0deg,
    rgba(31, 23, 53, 1) 10%,
    rgba(55, 67, 121, 1) 33%,
    rgba(55, 67, 121, 1) 66%,
    rgba(31, 23, 53, 1) 90%
  );
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #81afcd;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #53aecc;
  }
  @media (max-width: 786px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fdfdfd;
  :hover {
    color: #0099ff;
  }
`;
