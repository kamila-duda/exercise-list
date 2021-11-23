import styled from "styled-components";

export const CodeWrapper = styled.div`
  background-color: #2a2424;
  padding: 20px;
  position: relative;
  color: #fefefe;
  font-size: 24px;
  border: 5px solid #374379;
  @media (max-width: 786px) {
    padding: 5px;
  }
  @media (max-width: 486px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
`;

export const Text = styled.div`
  p {
    font-size: 24px;
    display: grid;
  }
  img {
    max-width: 600px;
    object-fit: contain;
    margin: 10px 0;
  }
  @media (max-width: 486px) {
    p {
      font-size: 20px;
    }
    img {
      max-width: 300px;
    }
  }
`;

export const StyledButton = styled.button`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border: none;
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #0099ff 0%,
    #374379 100%
  );
  color: #fcfcfc;
  letter-spacing: 0.05em;
  :hover {
    background: #0099ff;
  }
`;

export const TextWrapper = styled.div`
  padding: 80px 50px 10px;
  :nth-child(1) {
    padding-top: 120px;
  }
  @media (max-width: 786px) {
    padding: 60px 50px 10px;
    :nth-child(1) {
      padding-top: 80px;
    }
  }
  @media (max-width: 486px) {
    padding: 60px 10px 10px;
    :nth-child(1) {
      padding-top: 80px;
    }
  }
`;

export const CodeGrid = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledCode = styled.code`
  margin: 5px;
  }
`;

export const CopyWrapper = styled.div`
  position: absolute;
  top: -15px;
  right: 15px;
`;

export const CopyInfo = styled.p`
  color: #e87c0c;
`;
