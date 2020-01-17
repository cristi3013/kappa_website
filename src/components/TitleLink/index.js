import React,{useState} from "react";
import {TitleLinkCss,OverlayCss,ImgCss} from "./index.css"


const TitleLink = (props) => {

  const [show,setShow] = useState(false);
  const [touched,setTouch]=useState(false);

  return (
   <TitleLinkCss >
   {props.inline&&<span onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} onTouchStart={()=>setTouch(true)} onTouchCancel={()=>setTouch(false)}  onTouchMove={()=>setTouch(false)} onTouchEnd={()=>touched&&setShow(true)}>{props.children}</span>}
    {!props.inline&&<h3 onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)} onTouchStart={()=>setTouch(true)} onTouchCancel={()=>setTouch(false)}  onTouchMove={()=>setTouch(false)} onTouchEnd={()=>touched&&setShow(true)}>{props.children}</h3>}
    {props.img&&(
      <>
        <ImgCss show={show} width={props.imgWidth}><img src={props.img} alt={props.children}/> </ImgCss>
      <OverlayCss show={show} onTouchStart={()=>setShow(false)} >&nbsp;</OverlayCss>
      </>
    )            
    }

   </TitleLinkCss>
  );
};

export default TitleLink;
