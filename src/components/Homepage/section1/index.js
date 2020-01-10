import React from 'react';
import { PrimaryLinkCss, SecondaryLinkCss, PrimaryLinkBgCss, SecondaryLinkBgCss } from '../../../layout/index.css';
import { FirstSectionWrapperCss, TitleCss, FirstSectionContainerCss, LinksCss } from './index.css';

const FirstSection = () => {
	return (
		<FirstSectionWrapperCss>
			<FirstSectionContainerCss>
				<TitleCss>| Hello world &lt;</TitleCss>
				<h2>
					We’re a close-knit group of individuals who choose to work together and deliver great digital
					products.
				</h2>
				<h2>
					A growing community where people are given the freedom to explore and learn, while taking full
					ownership over their work.
				</h2>

				<LinksCss>
					<SecondaryLinkCss>Work with us</SecondaryLinkCss>
					<PrimaryLinkCss>Join Kappa</PrimaryLinkCss>
				</LinksCss>

				<LinksCss>
					<SecondaryLinkBgCss>Work with us</SecondaryLinkBgCss>
					<PrimaryLinkBgCss>Join Kappa</PrimaryLinkBgCss>
				</LinksCss>
			</FirstSectionContainerCss>
		</FirstSectionWrapperCss>
	);
};

export default FirstSection;
