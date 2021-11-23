import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
} 
body{
 background-image: #fdfdfd;
 background-attachment: fixed;
 font-family: 'Raleway', sans-serif;
 margin: 0;
 color: black;
 overflow-x: hidden;
}
`;
