import React from 'react';
import { BryantSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss, ImageCss } from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';
import image from '../images/image4.png';
import image2 from '../images/image5.png';
import image3 from '../images/image6.png';

const BryantSection2 = () => {
	return (
		<BryantSectionWrapperCss>
			<InfoBlockCss>
				<p>
					Alongside the product renders, smooth transitions and custom interactions ensure a pleasent
					experience.
				</p>
			</InfoBlockCss>
			<ImageCss>
				<img src={image} />
			</ImageCss>
			<ImageCss>
				<img src={image2} />
			</ImageCss>
			<ImageCss>
				<img src={image3} />
			</ImageCss>
		</BryantSectionWrapperCss>
	);
};

export default BryantSection2;
