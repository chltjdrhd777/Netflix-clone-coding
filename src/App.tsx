import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <Router>
      <GlobalCSS />
      <Route exact path="/" component={Main} />
    </Router>
  );
}

const GlobalCSS = createGlobalStyle`
  :root {
  --main-red: rgba(211, 9, 19);
  --main-dark: rgba(20, 20, 20);
  --main-deep-dark: rgba(0, 0, 0);
  --main-grey: rgba(153, 153, 153);
  --main-red-hover: #e50914;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Helvetica";
  -webkit-font-smoothing: antialiased;
  background: var(--main-dark);
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
}

`;

export default App;
