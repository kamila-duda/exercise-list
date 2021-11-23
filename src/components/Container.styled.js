import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 300px 1fr;
  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;
