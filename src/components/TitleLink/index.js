import React from "react";
import { Route } from "react-router-dom";
import {TitleLinkCss} from "./index.css"


const TitleLink = ({children}) => {
  return (
   <TitleLinkCss>
    <h3>{children}</h3>
   </TitleLinkCss>
  );
};

export default TitleLink;
