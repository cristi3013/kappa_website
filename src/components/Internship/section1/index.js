import React from 'react';
import {
  InternshipFirstSectionWrapperCss,
  InfoBlockCss,
  InfoBlockItemCss,
  ItemsCss,
  PrimaryLinkCss,
  SvgMaskCss,
} from './index.css';

import gif1 from './images/1.gif';
import gif2 from './images/2.gif';
import gif3 from './images/3.gif';
import gif4 from './images/4.gif';
import mask from './images/mask.png';

const InternshipFirstSection = () => {
  return (
    <InternshipFirstSectionWrapperCss>
      <h4>
        <span className='symbol'>|</span> Intern with us{' '}
        <span className='symbol'>&lt;</span>
      </h4>
      <InfoBlockCss>
        <h1>You are the CSS to our HTML</h1>
        <br></br>
        <br></br>
        <PrimaryLinkCss>
          <a href='mailto:captain@kappa.london?subject=Application for Front-End Internship at Kappa London'>
            Let's markup together
          </a>
        </PrimaryLinkCss>
        <ItemsCss>
          <InfoBlockItemCss>
            <div className='container'>
              <img src={gif1} />
              <img src={mask} className='mask' />
            </div>

            <h1>Intense training</h1>
            <p>
              Our programme is developed around intense front-end training
              techniques. You'll start off with exercises and tutorials that
              cover in-depth HTML and CSS guidance.
            </p>
          </InfoBlockItemCss>

          <InfoBlockItemCss>
            <img src={gif2} />
            <h1>Guaranteed growth</h1>
            <p>
              Then, you will be moving on to learning JavaScript by working
              closely with very experienced engineers. A senior will be with you
              every step of the way and monitoring your progress. He'll hand you
              tasks that are meaningful to your personal development and follow
              the industry standards.
            </p>
          </InfoBlockItemCss>

          <InfoBlockItemCss>
            <img src={gif3} />
            <h1>Hands-on experience</h1>
            <p>
              You won't only hone your tech skills, but you'll also become a
              solution-oriented professional that will be able to perform in a
              highly demanding environment. An employable individual who can
              have an impact on the front-end side of any web-based project.
            </p>
          </InfoBlockItemCss>

          <InfoBlockItemCss>
            <img src={gif4} />
            <h1>Personal development</h1>
            <p>
              This is a fully remote position, so it requires a lot more self
              discipline and communication than your usual 9-to-5 job. You'll
              become better at managing yourself, finding innovative solutions
              to complex problems and implementing them in a timely and
              organised manner. Your self-learning capabilities will be
              intensely tested.
            </p>
          </InfoBlockItemCss>
        </ItemsCss>
        <p>
          Do you think you have what it takes? Shoot us an email at{' '}
          <a href='mailto:captain@kappa.london'>captain@kappa.london</a> and
          let's discuss the specifics.
        </p>
      </InfoBlockCss>
    </InternshipFirstSectionWrapperCss>
  );
};

export default InternshipFirstSection;
