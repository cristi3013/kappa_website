import React from "react";
import {HeaderWrapperCss} from "./index.css"

const Header = ({children}) => {
  return (
    <HeaderWrapperCss>
      <nav>Kappa.London</nav>
      {children}
    </HeaderWrapperCss>
  )
};

export default Header;
