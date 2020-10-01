import React, { memo } from 'react';
import {
  BloomdSectionWrapperCss,
  TitleWrapperCss,
  DescriptiveNavigationWrapperCss,
  SectionContainerCss,
  PaddingLeftRightCss,
} from './index.css';
import image1Png from '../images/image6-1.png';
import image2Png from '../images/image6-2.png';
import IphoneXFrame from '../IphoneXFrame';
import ChangesInVision from './ChangesInVision';
import Onboarding from './Onboarding';

const BloomdSection6 = memo(function BloomdSection6() {
  return (
    <BloomdSectionWrapperCss>
      <PaddingLeftRightCss>
        <TitleWrapperCss>
          <h1>
            Accessible for seniors,
            <br /> appealing for the youth
          </h1>
          <p>
            Our design is age-friendly, with senior citizens in mind. Large
            buttons and higher contrast ratios.
          </p>
        </TitleWrapperCss>
      </PaddingLeftRightCss>
      <PaddingLeftRightCss>
        <SectionContainerCss first>
          <DescriptiveNavigationWrapperCss>
            <IphoneXFrame>
              <img src={image1Png} alt="" />
            </IphoneXFrame>
            <div>
              <h3>Large, descriptive navigation</h3>
              <p>
                Elements contain text indicators in order to eliminate
                confusion. The menu is at the bottom of the screen, not hidden
                behind a burger icon.
              </p>
              <div className="image">
                <img src={image2Png} alt="" />
              </div>
            </div>
          </DescriptiveNavigationWrapperCss>
        </SectionContainerCss>
      </PaddingLeftRightCss>

      <SectionContainerCss>
        <ChangesInVision />
      </SectionContainerCss>

      <SectionContainerCss last>
        <Onboarding />
      </SectionContainerCss>
    </BloomdSectionWrapperCss>
  );
});

export default BloomdSection6;
