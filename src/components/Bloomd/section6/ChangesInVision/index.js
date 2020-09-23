import React, { memo, useState, useCallback } from 'react';
import { DescriptionCss, PaddingLeftRightCss } from '../index.css';
import {
  DesktopWrapperCss,
  DesktopImagesWrapper,
  MobileWrapperCss,
  MobileImagesWrapperCss,
} from './index.css';
import image3Png from '../../images/image6-3.png';
import image4Png from '../../images/image6-4.png';
import { ReactComponent as ColorSvg } from '../../images/color.svg';
import { ReactComponent as NoColorSvg } from '../../images/no-color.svg';
import useAutoHorizontalScroll from '../../useAutoHorizontalScroll';

const ChangesInVision = memo(function ChangesInVision() {
  const [noColor, setNoColor] = useState(false);
  const toggleNoColor = useCallback(
    () => setNoColor((noColor) => !noColor),
    []
  );

  const ref = useAutoHorizontalScroll();

  return (
    <>
      <PaddingLeftRightCss>
        <DescriptionCss>
          <h3>Changes in Vision</h3>
          <p>
            We chose colours that are contrasting enough for users with impaired
            vision to use the app comfortably.
          </p>
        </DescriptionCss>

        <DesktopWrapperCss>
          <DesktopImagesWrapper id="reply">
            <div>
              <ColorSvg />
              <img src={image3Png} alt="" />
            </div>
            <div>
              <NoColorSvg />
              <img src={image3Png} alt="" className="no-color" />
            </div>
          </DesktopImagesWrapper>
          <DesktopImagesWrapper id="feedback">
            <div>
              <ColorSvg />
              <img src={image4Png} alt="" />
            </div>
            <div>
              <NoColorSvg />
              <img src={image4Png} alt="" className="no-color" />
            </div>
          </DesktopImagesWrapper>
          <em id="reply-em">
            Used a range of stark contrasting colors and hues to help the
            colour-blind.
          </em>
          <em id="feedback-em">
            Used both colors and text where the user's attention is needed
          </em>
        </DesktopWrapperCss>
      </PaddingLeftRightCss>

      <MobileWrapperCss>
        <em>tap tap</em>
        {noColor ? (
          <NoColorSvg onClick={toggleNoColor} />
        ) : (
          <ColorSvg onClick={toggleNoColor} />
        )}

        <MobileImagesWrapperCss noColor={noColor} ref={ref}>
          <img src={image3Png} alt="" />
          <img src={image4Png} alt="" />
        </MobileImagesWrapperCss>

        <PaddingLeftRightCss>
          <em>
            Used a range of stark contrasting colors and hues to help the
            colour-blind.
          </em>
        </PaddingLeftRightCss>
      </MobileWrapperCss>
    </>
  );
});

export default ChangesInVision;
