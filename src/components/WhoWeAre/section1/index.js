import React from 'react';
import { WhoWeAreFirstSectionWrapperCss, InfoBlockCss } from './index.css';
import TitleLink from '../../TitleLink/index';
import friends from './images/friends.gif';
import chaos from './images/chaos.gif';

const WhoWeAreFirstSection = () => {
  return (
    <WhoWeAreFirstSectionWrapperCss>
      <h4>| Who we are &lt;</h4>
      <InfoBlockCss>
        <p>Kappa came into being a few years ago in London.</p>

        <p>
          In the beginning, we were{' '}
          <TitleLink inline img={friends}>
            <span>two developers</span>
          </TitleLink>{' '}
          looking for a project to make our voices heard on the market. The
          first vote of confidence came with the first client, but there's only
          so much that can be done in a team of two. We had to grow fast, and we
          did.
        </p>

        <p>
          Bringing on board the right talent enabled us to take up more projects
          on web as well as software development. We found the right people
          overseas so we steadily became a fully-remote international team that
          embraces flexibility and the{' '}
          <TitleLink inline img={chaos}>
            <span>chaos that comes with it.</span>
          </TitleLink>
        </p>

        <p>
          So what are we? An agency? A bunch of freelancers? Neither. We're a
          tight squad of passionate makers who work together and look out for
          each other.
        </p>

        <p>
          A growing community where people are given the freedom to explore and
          learn, while taking full ownership over their work.
        </p>
      </InfoBlockCss>
    </WhoWeAreFirstSectionWrapperCss>
  );
};

export default WhoWeAreFirstSection;
