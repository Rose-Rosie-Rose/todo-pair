import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
  @font-face {
    font-family: 'KyoboHandwriting2021sjy';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KyoboHandwriting2021sjy.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'KyoboHandwriting2021sjy';
  background-color: #000000;
  color: #E8E8E8;
  max-width: 1200px;
  min-width: 800px;
  margin : 0 auto;
  }
`;
