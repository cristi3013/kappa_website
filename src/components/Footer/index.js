import React from 'react';
import {
	FooterWrapperCss,
	FooterBlockCss,
	FooterBlockTitleCss,
	FooterBlockInfoCss,
	FooterBlockLinksCss
} from './index.css';
import { PrimaryLinkCss, SecondaryLinkCss } from '../../layout/index.css';

const Footer = () => {
	return (
		<FooterWrapperCss>
			<FooterBlockCss>
				<FooterBlockTitleCss>| Who we are &lt;</FooterBlockTitleCss>
				<FooterBlockInfoCss>
					<h2>
						Freelancers or agency? We are neither.<br />
						<br />
						<i>Two highschool friends</i> decided to stick together and build great products. Years later,
						an international community of passionate makers grew, working side by side and looking out for
						eachother. Embracing remote work and the chaos that comes with it.
					</h2>
					<FooterBlockLinksCss>
						<PrimaryLinkCss>Find out more</PrimaryLinkCss>
					</FooterBlockLinksCss>
				</FooterBlockInfoCss>
			</FooterBlockCss>

			<FooterBlockCss>
				<FooterBlockTitleCss>| Intern with us &lt;</FooterBlockTitleCss>
				<FooterBlockInfoCss>
					<h2>Want to pursue a programming career? Tell us your story, we’re great listeners: </h2>
					<FooterBlockLinksCss>
						<SecondaryLinkCss>captain@kappa.london</SecondaryLinkCss>
						<PrimaryLinkCss>Find out more</PrimaryLinkCss>
					</FooterBlockLinksCss>
				</FooterBlockInfoCss>
			</FooterBlockCss>

			<FooterBlockCss>
				<FooterBlockTitleCss>| Send us GIFs &lt;</FooterBlockTitleCss>
				<FooterBlockInfoCss>
					<FooterBlockLinksCss>
						<SecondaryLinkCss>captain@kappa.london</SecondaryLinkCss>
						<SecondaryLinkCss>+44 7754 45 84 95 </SecondaryLinkCss>
						<SecondaryLinkCss>LinkedIn </SecondaryLinkCss>
						<SecondaryLinkCss>Facebook</SecondaryLinkCss>
					</FooterBlockLinksCss>
				</FooterBlockInfoCss>
			</FooterBlockCss>
		</FooterWrapperCss>
	);
};

export default Footer;
