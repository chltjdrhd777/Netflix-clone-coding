import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Practice from "./pages/Practice";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <Router>
      <GlobalCSS />
      <Route exact path="/" component={Main} />
      <Route exact path="/pr" component={Practice} />
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

.TabDoor{
  width:2.5rem;
  height:2.5rem;
  fill: var(--main-grey)
}

.Devices{
  width:5rem;
  height:5rem;
  fill: var(--main-grey)
}

.Price{
  width:2.5rem;
  height:2.5rem;
  fill: var(--main-grey)
}
`;

export default App;
