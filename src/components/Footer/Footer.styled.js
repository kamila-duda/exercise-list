import styled, { css } from "styled-components";

export const Container = styled.footer`
  position: relative;
  width: 100%;
  padding: 30px 40px 0px;
  letter-spacing: 0.05em;
  line-height: 1.5;
  z-index: 1;
  @media (max-width: 786px) {
    padding: 10px;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  z-index: 1;
`;

export const StyledLink = styled.a`
  display: block;
  padding: 15px 0;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #010101;
  font-weight: bold;
  width: max-content;
  @media (max-width: 786px) {
    font-size: 18px;
  }
  ${({ small }) =>
    small &&
    css`
      font-size: 20px;
      text-transform: capitalize;
      @media (max-width: 786px) {
        font-size: 16px;
      }
    `}
  :hover {
    color: #0099ff;
  }
`;

export const Copy = styled.p`
  width: 100%;
  margin: 0;
  padding: 30px 0 20px;
  font-size: 16px;
  text-align: center;
`;
