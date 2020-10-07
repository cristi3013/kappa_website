import React from 'react';

import { WhoWeAreSecondSectionWrapperCss, InfoBlockCss } from './index.css';
import TitleLink from '../../TitleLink';
import discover from './images/discover.gif';
import planning from './images/planning.gif';
import test from './images/test.gif';
import execute from './images/execute.gif';
import launch from './images/launch.gif';

const WhoWeAreSecondSection = () => {
	return (
		<WhoWeAreSecondSectionWrapperCss>
			<h4>
				<span className="symbol">|</span> How we work <span className="symbol">&lt;</span>
			</h4>
			<InfoBlockCss>
				<p>
					A map of our processes so clients have some sort of idea about how things are
					going to progress:
				</p>
				<ol>
					<li>
						<TitleLink img={discover}>Discovery</TitleLink>
						<p>
							We want to meet you and understand your every need and requirement. To
							start, we want to get to know you, your values, branding and style. A
							comprehensive audit of your market, brand, internal processes, team and
							communication strategy will help us build an exciting design that
							represents your company.
						</p>
					</li>
					<li>
						<TitleLink img={planning}>Planning</TitleLink>
						<p>
							The knowledge acquired during the discovery phase enables us to propose
							a series of solutions tailored to your needs. Once we agree upon a
							'look' and 'feel' for your website, we then plan every step of the
							process together: design, development, review sessions and everything in
							between. You will be aware of the progress and will be involved in every
							major decision.
						</p>
					</li>
					<li>
						<TitleLink img={execute}>Execution</TitleLink>
						<p>
							We kick things off with a sitemap - how many pages should the website
							have and how are they linked together? Then our designers build a
							wireframe based on some user scenarios (i.e. what would your target
							audience look for on your website and how do they reach their goal?).
							The wireframe establishes the kind of content (i.e. text, images,
							animations, buttons) and its positioning on every page. After we agreed
							upon the structure, our designers will define a style and will build a
							mock-up for one of the pages to validate with you the general look of
							the website (i.e. fonts, colours).
						</p>

						<p>
							With these conclusions in mind, we move on to designing every other page
							with you overlooking the entire process. When the design stage is
							completed successfully, our development team begins the implementation
							work.
						</p>
					</li>
					<li>
						<TitleLink img={test}>Testing and QA</TitleLink>
						<p>
							Before we publish any section or page, we thoroughly test it internally
							to identify and solve any issues that may appear. You will be involved
							in this process as well, so that we make sure the website behaves the
							way you want it to behave.
						</p>
					</li>
					<li>
						<TitleLink img={launch}>Launch</TitleLink>
						<p>
							When the pages are ready to go, we publish them sequentially and open a
							bottle of champagne every time a website's alive and kicking :).
						</p>
					</li>
				</ol>
			</InfoBlockCss>
		</WhoWeAreSecondSectionWrapperCss>
	);
};

export default WhoWeAreSecondSection;
