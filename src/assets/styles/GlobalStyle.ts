import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a{
    text-decoration:none;
  }
  input{
    all:unset;
    border:1px black solid;

  }
  button{
    all:unset;
    border:1px black solid;
  }
`;

export default GlobalStyle;
