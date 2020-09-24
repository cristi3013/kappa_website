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
import { ReactComponent as MatchingInterestsSvg } from './icons/matching-interests.svg';
import { ReactComponent as ManagingAppointmentsSvg } from './icons/managing-appointments.svg';
import { ReactComponent as GamificationSvg } from './icons/gamification.svg';
import managingAppointmentsMp4 from './videos/managing-appointments.mp4';
import gamificationMp4 from './videos/gamification.mp4';
import useVideoAutoplayInView from '../useVideoAutoplayInView';

const BloomdSection7 = memo(function BloomdSection7() {
  const [
    managingAppointmentsMp4WrapperRef,
    managingAppointmentsMp4Ref,
  ] = useVideoAutoplayInView();
  const [
    gamificationMp4WrapperRef,
    gamificationMp4Ref,
  ] = useVideoAutoplayInView();

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
          <GroupWrapperCss right ref={managingAppointmentsMp4WrapperRef}>
            <IphoneXFrame>
              <video
                src={managingAppointmentsMp4}
                ref={managingAppointmentsMp4Ref}
                type="video/mp4"
                crossOrigin="true"
                autoPlay="false"
                loop
                playsInline
                muted
              />
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
          <GroupWrapperCss ref={gamificationMp4WrapperRef}>
            <IphoneXFrame>
              <video
                src={gamificationMp4}
                ref={gamificationMp4Ref}
                type="video/mp4"
                crossOrigin="true"
                autoPlay="false"
                loop
                playsInline
                muted
              />
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
