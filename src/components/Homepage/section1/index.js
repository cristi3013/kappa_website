import React from 'react';
import {
	PrimaryLinkCss,
	SecondaryLinkCss,
	PrimaryLinkBgCss,
	SecondaryLinkBgCss,
} from '../../../layout/index.css';
import { FirstSectionWrapperCss, TitleCss, FirstSectionContainerCss, LinksCss } from './index.css';

const FirstSection = () => {
	return (
		<FirstSectionWrapperCss>
			<FirstSectionContainerCss>
				<TitleCss>
					<span className="symbol">|</span> Hello world{' '}
					<span className="symbol">&lt;</span>
				</TitleCss>
				<h2>
					We’re a close-knit group of individuals who choose to work together and deliver
					great digital products.
				</h2>
				<h2>
					A growing community where people are given the freedom to explore and learn,
					while taking full ownership over their work.
				</h2>

				<LinksCss>
					<SecondaryLinkCss to="/joinus">Work with us</SecondaryLinkCss>
					<PrimaryLinkCss to="/joinus">Join Kappa</PrimaryLinkCss>
				</LinksCss>
			</FirstSectionContainerCss>
		</FirstSectionWrapperCss>
	);
};

export default FirstSection;
