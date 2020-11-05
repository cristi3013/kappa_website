import React from 'react';
import{InternshipThirdSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss} from './index.css'

import kgif from './images/k.gif';
import army from './images/army.gif';
import kmask from './images/kmask.png';
import amask from './images/amask1.png';
import vrGoogles from './images/vrGoogles.png';
import vrController1 from './images/vrController1.png';
import vrController2 from './images/vrController2.png';
import cap from './images/cap.png'
import book from './images/book.png'


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
            <h1 className="paragraphTitle">You are the future</h1>
            <p className="paragraphText">We know how crucial the <span className="paragraphStyled">next generation of developers </span> is for our<br></br>own future. That’s why we invest in tomorrow’s engineers to<br></br>nurture capable and indispensable professionals.</p>
        </div>


        <div className="armyGifContainer">
            <img src={army} className="armyGif"></img>
            <img src={amask} className="armyMask"></img>
            <img src={cap} className="cap"></img>
            <img src={book} className="book"></img>
        </div>
    </div>

    
    <InfoBlockCss>
        
        <ItemsCss>
            
        <InfoBlockItemCss>
        
        <div className="kGifContainer">
            <img src={kgif} className="kGif"></img>
            <img src={kmask} className="kMask"></img>
            <img src={vrGoogles} className="vrGoogles"></img>
            <img src={vrController1} className="vrController1"></img>
            <img src={vrController2} className="vrController2"></img>
        </div>
        
        </InfoBlockItemCss>

        <InfoBlockItemCss>
        <div className="paragraph">
            <h1 className="paragraphTitle">A bootcamp for the best</h1>
            <p className="paragraphText">Performance doesn’t come about lightly, but with ownership over<br></br> your own work and motivation to be the best. We have a system<br></br>put in place to facilitate your growth like nowhere else.<br></br><br></br><br></br> Our internship program has been refined over the years and<br></br>became <span className="paragraphStyled">a fulfilling experience</span>  for students or graduates.<br></br>From training to project tasks - everything’s cherrypicked and<br></br> revised by our senior developers to ensure you’re getting the most<br></br> out of it. </p>
        </div>
        </InfoBlockItemCss>

        <InfoBlockItemCss>
        <div className="paragraph2">
            <h1 className="paragraphTitle2">Intense and diverse training</h1>
            <p className="paragraphText">We believe in diversity as a catalyst for rapid personal and <br></br> professional growth. A young developer should experience as <br></br> many different challenges as possible in order to acquire multiple <br></br> skills during a shorter period of time. You’ll be working on various <br></br> real-life projects that will intensely <span className="paragraphStyled">test your limits.</span></p>
        </div>
        </InfoBlockItemCss>

        </ItemsCss>     
        </InfoBlockCss>
        </InternshipThirdSectionWrapperCss>
    );
};


export default InternshipThirdSection;