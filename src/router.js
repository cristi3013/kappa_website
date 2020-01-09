import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Homepage from "./pages/homepage";
import LayoutPath from "./layout/index";
import Header from "./components/Header/index"

import {LayoutsWrapperCss,GlobalStyle} from "./layout/index.css"


export default function App() {
  return (
    <Router>
      <LayoutsWrapperCss>
      <GlobalStyle/>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        </Header>

        <Switch>
          <LayoutPath path="/" component={Homepage} />
        </Switch>
      </LayoutsWrapperCss>
    </Router>
  );
}
