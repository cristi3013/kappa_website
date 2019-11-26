import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Homepage from "./pages/homepage";
import LayoutPath from "./layout";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <LayoutPath path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}
