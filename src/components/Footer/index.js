import React from 'react';
import {
  FooterWrapperCss,
  FooterBlockCss,
  FooterBlockTitleCss,
  FooterBlockInfoCss,
  FooterBlockLinksCss,
} from './index.css';
import { PrimaryLinkCss, SecondaryLinkCss } from '../../layout/index.css';
import TitleLink from '../TitleLink/index';
import friends from './images/friends.gif';

const footer1 = (block) => {
  return (
    <FooterBlockCss key={block}>
      <FooterBlockTitleCss>| Who we are &lt;</FooterBlockTitleCss>
      <FooterBlockInfoCss>
        <h2>
          Freelancers or agency? We are neither.
          <br />
          <br />
          <TitleLink inline img={friends}>
            <i>Two highschool friends</i>
          </TitleLink>{' '}
          decided to stick together and build great products. Years later, an
          international community of passionate makers grew, working side by
          side and looking out for each other. Embracing remote work and the
          chaos that comes with it.
        </h2>
        <FooterBlockLinksCss>
          <PrimaryLinkCss to="/whoweare">Find out more</PrimaryLinkCss>
        </FooterBlockLinksCss>
      </FooterBlockInfoCss>
    </FooterBlockCss>
  );
};

const footer2 = (block) => {
  return (
    <FooterBlockCss key={block}>
      <FooterBlockTitleCss>| Intern with us &lt;</FooterBlockTitleCss>
      <FooterBlockInfoCss>
        <h2>
          Want to pursue a programming career? Tell us your story, we’re great
          listeners:{' '}
        </h2>
        <FooterBlockLinksCss>
          <SecondaryLinkCss as="a" to="" href="mailto:captain@kappa.london">
            captain@kappa.london
          </SecondaryLinkCss>
          <PrimaryLinkCss to="/internship">Find out more</PrimaryLinkCss>
        </FooterBlockLinksCss>
      </FooterBlockInfoCss>
    </FooterBlockCss>
  );
};

const footer3 = (block) => {
  return (
    <FooterBlockCss key={block}>
      <FooterBlockTitleCss>| Send us GIFs &lt;</FooterBlockTitleCss>
      <FooterBlockInfoCss>
        <FooterBlockLinksCss>
          <SecondaryLinkCss as="a" to="" href="mailto:captain@kappa.london">
            captain@kappa.london
          </SecondaryLinkCss>
          <p>+44 7754 45 84 95 </p>
          <SecondaryLinkCss
            as="a"
            to=""
            href="https://www.linkedin.com/company/kappalondon/"
          >
            LinkedIn
          </SecondaryLinkCss>
          <SecondaryLinkCss
            as="a"
            to=""
            href="https://www.facebook.com/kappalondon/"
          >
            Facebook
          </SecondaryLinkCss>
        </FooterBlockLinksCss>
      </FooterBlockInfoCss>
    </FooterBlockCss>
  );
};

const Footer = (props) => {
  return (
    <FooterWrapperCss>
      {props.blocks.map((block) => {
        switch (block) {
          case 1:
            return footer1(block);

          case 2:
            return footer2(block);

          case 3:
            return footer3(block);

          default:
            break;
        }
      })}
    </FooterWrapperCss>
  );
};

export default Footer;
