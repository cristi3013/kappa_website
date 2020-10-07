import React from 'react';
import {
	BryantSectionWrapperCss,
	InfoBlockCss,
	InfoBlockItemCss,
	ItemsCss,
	ImageCss,
} from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';
import image from '../images/image1.png';

const BryantSection1 = () => {
	return (
		<BryantSectionWrapperCss>
			<InfoBlockCss>
				<h1>Bryant Dental</h1>

				<p>
					Bryant Dental is a UK-based manufacturer and distributor for dentistry
					equipment. The company's main focus are dental loupes, but they also sell
					headlights, cameras and other high-end products for dentists.
				</p>
				<ItemsCss>
					<InfoBlockItemCss>
						<h4 className="grey">
							<span className="symbol">|</span> Responsibilities{' '}
							<span className="symbol">&lt;</span>
						</h4>
						<p>Design Interaction Front-End SEO Copywriting</p>
					</InfoBlockItemCss>

					<InfoBlockItemCss>
						<h4 className="grey">
							<span className="symbol">|</span> Technologies used{' '}
							<span className="symbol">&lt;</span>
						</h4>
						<p>HTML CSS JavaScript ReactJS Gastby JS OpenCart</p>
					</InfoBlockItemCss>

					<InfoBlockItemCss>
						<h4 className="grey">
							<span className="symbol">|</span> Live website{' '}
							<span className="symbol">&lt;</span>
						</h4>
						<SecondaryLinkCss as="a" to="" href="http://bryant.dental" target="_blank">
							bryant.dental
						</SecondaryLinkCss>
					</InfoBlockItemCss>
				</ItemsCss>
			</InfoBlockCss>
			<ImageCss>
				<img src={image} />
			</ImageCss>
		</BryantSectionWrapperCss>
	);
};

export default BryantSection1;
