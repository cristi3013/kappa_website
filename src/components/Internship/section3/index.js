import React from 'react';
import{InternshipThirdSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss} from './index.css'

import kgif from './images/k.gif';
import army from './images/army.gif';
import kmask from './images/kmask.png';
import amask from './images/amask.png';
import vrGoogles from './images/vrGoogles.png';
import vrController1 from './images/vrController1.png';
import vrController2 from './images/vrController2.png';


const InternshipThirdSection = () => {
    return(
        <InternshipThirdSectionWrapperCss>
    <div className="textContainer">
        <div className="sectionTitle">
            <h4>
                <span className='symbol'>|</span> This is the Kappa bootcamp{' '}
                <span className='symbol'>&lt;</span>
            </h4>
        </div>

         <div className="paragraph">
            <p className="paragraphTitle">You are the future</p>
            <p className="paragraphText">We know how crucial the <span className="paragraphStyled">next generation of developers </span> is for our<br></br>own future. That’s why we invest in tomorrow’s engineers to<br></br>nurture capable and indispensable professionals.</p>
         </div>

         <div className="parentContainer">
            <div className="gifContainer">
                <img src={army} className="armyGif"></img>
                <img src={amask} className="armyMask"></img>
            </div>
        </div>
    </div>
      <br></br>
        <InfoBlockCss>
           <ItemsCss>
            <InfoBlockItemCss>
            <div className="parentContainer">
                <div className='gifContainer'>
                    <img src={kgif}></img>
                    <img src={kmask} className="mask"></img>
                    <img src={vrController1} className="vrController1"></img>
                    <img src={vrController2} className="vrController2"></img>
                </div>
                <img src={vrGoogles} className="vrGoogles"></img>
            </div>
            </InfoBlockItemCss>
           </ItemsCss>     
        </InfoBlockCss>
        </InternshipThirdSectionWrapperCss>
    );
};


export default InternshipThirdSection;