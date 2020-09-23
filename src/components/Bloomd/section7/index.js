import React, { memo } from 'react';
import {
  BloomdSectionWrapperCss,
  PaddingLeftRightCss,
  GroupWrapperCss,
  GroupDescriptionCss,
  BackgroundLineCss,
  SeparatorCss,
} from './index.css';
import IphoneXFrame from '../IphoneXFrame';
import matchingInterestsPng from './images/matching-interests.png';
import managingAppointmentsPng from './images/managing-appointments.png';
import gamificationPng from './images/gamification.png';
import { ReactComponent as MatchingInterestsSvg } from './icons/matching-interests.svg';
import { ReactComponent as ManagingAppointmentsSvg } from './icons/managing-appointments.svg';
import { ReactComponent as GamificationSvg } from './icons/gamification.svg';

const BloomdSection7 = memo(function BloomdSection7() {
  return (
    <BloomdSectionWrapperCss>
      <BackgroundLineCss>
        <PaddingLeftRightCss>
          <GroupWrapperCss>
            <IphoneXFrame>
              <img src={matchingInterestsPng} alt="" />
            </IphoneXFrame>
            <GroupDescriptionCss>
              <MatchingInterestsSvg />
              <div>
                <h1>Matching interests</h1>
                <p>
                  Users are matched by interests they select in order to provide
                  more fruitful conversations.
                </p>
              </div>
            </GroupDescriptionCss>
          </GroupWrapperCss>
        </PaddingLeftRightCss>
      </BackgroundLineCss>

      <SeparatorCss />

      <BackgroundLineCss right>
        <PaddingLeftRightCss>
          <GroupWrapperCss right>
            <IphoneXFrame>
              <img src={managingAppointmentsPng} alt="" />
            </IphoneXFrame>
            <GroupDescriptionCss>
              <ManagingAppointmentsSvg />
              <div>
                <h1>Managing appointments</h1>
                <p>
                  All your calls are at your fingertips. Update your schedule
                  with just a few taps.
                </p>
              </div>
            </GroupDescriptionCss>
          </GroupWrapperCss>
        </PaddingLeftRightCss>
      </BackgroundLineCss>

      <SeparatorCss />

      <BackgroundLineCss>
        <PaddingLeftRightCss>
          <GroupWrapperCss>
            <IphoneXFrame>
              <img src={gamificationPng} alt="" />
            </IphoneXFrame>
            <GroupDescriptionCss>
              <GamificationSvg />
              <div>
                <h1>Gamification</h1>
                <p>
                  Creative achievements under the form of badges to entice
                  engagement and user retention.
                </p>
              </div>
            </GroupDescriptionCss>
          </GroupWrapperCss>
        </PaddingLeftRightCss>
      </BackgroundLineCss>
    </BloomdSectionWrapperCss>
  );
});

export default BloomdSection7;
