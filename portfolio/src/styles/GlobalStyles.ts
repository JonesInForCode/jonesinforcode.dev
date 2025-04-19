import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #3a86ff;
    --primary-dark: #2667cc;
    --secondary: #ff006e;
    --dark: #232946;
    --light: #fffffe;
    --light-accent: #d1d1e9;
    --mid: #b8c1ec;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: var(--light);
    color: var(--dark);
    line-height: 1.6;
  }
`;

export default GlobalStyles;