import React from "react";
import { Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";


const LayoutPath = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        
        <>
        <Component {...matchProps} />

        <Footer blocks={rest.blocks}/>
        </>
      )}
    />
  );
};

export default LayoutPath;
