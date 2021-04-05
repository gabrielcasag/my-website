import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --white: #fff;
  --background: #f2f3f5;
  --gray-line: #dcdde0;
  --text: #666666;
  --text-highlight: #b3b9ff;
  --title: #202020;
  --red: #e83f5b;
  --green: #4cd628;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
  --border: #d7d8da;
  --dark-shadow: rgba(242, 243, 245, 0.6);
  --light-shadow: rgba(32, 32, 32, 1);
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
}

body {
  background: var(--background);
  color: var(--title);
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
