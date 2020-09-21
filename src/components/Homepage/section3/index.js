import React from 'react';
import TitleLink from '../../TitleLink/index';
import {
  ThirdSectionWrapperCss,
  ThirdSectionContainerCss,
  BlockContainerCss,
} from './index.css';
import zeelo from './images/zeelo.png';
import lounge from './images/lounge.jpg';
import honor from './images/honor.png';
import cvlabs from './images/cvlabs.png';
import create from './images/create.png';

const ThirdSection = () => {
  return (
    <ThirdSectionWrapperCss>
      <ThirdSectionContainerCss>
        <h2>
          Besides helping brands grow and impress, we've also built a few
          in-house projects over the past years. Have a look:
        </h2>

        <BlockContainerCss>
          <TitleLink img={zeelo} imgWidth="350px">
            Zeelo
          </TitleLink>
          <p>
            Zeelo is a coach sharing web platform. We built it from scratch in
            the very beginning of their company, and now they have grown a lot
            and have their own in-house dev team.
          </p>
          <p>
            <span>HTML CSS JavaScript jQuery PHP Laravel Symfony MySQL</span>
          </p>
        </BlockContainerCss>

        <BlockContainerCss>
          <TitleLink img={lounge} imgWidth="350px">
            Lounge Works
          </TitleLink>
          <p>
            An idea that transforms restaurants and coffee shops all over London
            into ad-hoc working spaces. Individuals or companies can occupy
            areas in these venues and use them as temporary working spaces.{' '}
          </p>
          <p>
            <span>
              HTML CSS JavaScript PHP <i>Expressions Engine</i> MySQL
            </span>
          </p>
        </BlockContainerCss>

        <BlockContainerCss>
          <TitleLink img={honor} imgWidth="350px">
            Honor Cycles
          </TitleLink>
          <p>
            We built multiple systems for them to carry out their business more
            efficiently, such as an online service reservation widget and an
            online payment system.
          </p>
          <p>
            <span>HTML CSS SaaS ReactJS PHP Laravel MySQL</span>
          </p>
        </BlockContainerCss>

        <BlockContainerCss>
          <TitleLink img={cvlabs} imgWidth="350px">
            CV Labs
          </TitleLink>
          <p>
            CV Labs is a resume builder. A personal project that was aimed
            towards freelancers and young professionals who were job searching.
            The tool has a series of templates the users could use to quickly
            create an impactful CV.
          </p>
          <p>
            <span>HTML CSS JavaScript jQuery PHP CodeIgniter MySQL</span>
          </p>
        </BlockContainerCss>

        <BlockContainerCss>
          <TitleLink img={create} imgWidth="350px">
            Create Live
          </TitleLink>
          <p>
            Personal project that tackled the Social Media Marketing industry.
            Create Live is a Facebook Live tool that offers users the
            opportunity to heavily customise their Live sessions.
          </p>
          <p>
            <span>HTML CSS JavaScript PHP Laravel MySQL FFmpeg</span>
          </p>
        </BlockContainerCss>
      </ThirdSectionContainerCss>
    </ThirdSectionWrapperCss>
  );
};

export default ThirdSection;
