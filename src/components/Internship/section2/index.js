import React from 'react';
import{InternshipSecondSectionWrapperCss,InfoBlockCss,InfoBlockItemCss,ItemsCss

} from './index.css'

import gif1 from './images/1.gif';

const InternshipSecondSection = () => {
    return(
    <InternshipSecondSectionWrapperCss>
    <div className="gifContainer">
        <div className="secondTitle">
            <h4>
                <span className='symbol'>|</span> Who are we{' '}
                <span className='symbol'>&lt;</span>
            </h4>
        </div>

         <div className="gif">
         <img src={gif1} />
         </div>
    </div>
      <br></br>
      <InfoBlockCss>
       <div className="text">
            <h1 className="title">We honour engineering.</h1>
       
            <div className="info">
                <p className="firstParagraph">Our developers are our heroes: resourceful, highly<br></br>
                skilled, energetic, and full of validated potential.</p>


            {/* se suprapuun pe partea de mobil cand e prea ingust, de rezolvat */}


                <div className="numbers">
                
                    <div className="linesOfCode">
                        <p className="nrLinesOfCode">53,421</p>
                        <p className="descLinesOfCode">lines of code</p>
                    </div>

                    <div className="tasksDone">
                        <p className="nrTasksDone">228</p>
                        <p className="descTasks">tasks done</p>
                    </div>

                    <div className="developers">
                        <p className="nrDevs">0</p>
                        <p className="descDevs">developers were hurt</p>
                        <p className="descDevs2">in the process</p>
                    </div>

                </div>

                <div className="secondParagraph">Our team dynamics are similar to a sports team: a<br></br> <span className="performanceStyled">performance-oriented collective</span>  built on trust and<br></br> skill. We’re the coach, you’re the player, and ahead<br></br> is the goal.</div>
            
            
            </div>
        </div>
      </InfoBlockCss>

      <ItemsCss>
          <InfoBlockItemCss>
          </InfoBlockItemCss>
        </ItemsCss>
    </InternshipSecondSectionWrapperCss>);
};

export default InternshipSecondSection;