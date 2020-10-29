import React from 'react';
import{InternshipSecondSectionWrapperCss,InfoBlockCss,InfoBlockItemCss,ItemsCss

} from './index.css'

import gif1 from './images/1.gif';
import { Info } from '@material-ui/icons';

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
       
            <div className="paragraph">
                <h2>Our developers are our heroes: resourceful, highly</h2>
                <h2>skilled, energetic, and full of validated potential.</h2>
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