import React,{useState} from "react";
import {TitleLinkCss,OverlayCss,ImgCss} from "./index.css"


const TitleLink = (props) => {

  const [show,setShow] = useState(false);

  return (
   <TitleLinkCss >
    <h3 onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} onTouchEnd={()=>setShow(true)}>{props.children}</h3>
    {props.img&&(
      <>
        <ImgCss show={show}><img src={props.img} alt={props.children}/> </ImgCss>
      <OverlayCss show={show} onTouchEnd={()=>setShow(false)}>&nbsp;</OverlayCss>
      </>
    )            
    }

   </TitleLinkCss>
  );
};

export default TitleLink;
