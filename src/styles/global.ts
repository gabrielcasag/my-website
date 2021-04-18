import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --background: #f2f3f5;
  --text: #202020;
  --text-highlight: #b3b9ff;
  --border: #d7d8da;

  --dark-shadow: #f2f3f5;
  --light-shadow: #1a1a1a;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -webkit-tap-highlight-color: transparent;
}

body {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  transition: all 1s linear; 
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
