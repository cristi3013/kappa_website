import React from 'react';
import { BryantSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';
import image from '../images/image3-1.png';
import image2 from '../images/image3-2.png';

const BryantSection3 = () => {
	return (
		<BryantSectionWrapperCss>
			<InfoBlockCss>
				<p>
					3D renders contribute to the websites’ appeal, clearly showcasing the products' features. Together
					with Lea Studio, we started by presenting clay models to the client, in order to ensure an accurate
					representation of the product before approving the final draft. Afterwards, lights and textures were
					added to complete the final render.
				</p>
			</InfoBlockCss>
			<ItemsCss>
					<InfoBlockItemCss><img src={image} /></InfoBlockItemCss>
					<InfoBlockItemCss><img src={image2} /></InfoBlockItemCss>
			</ItemsCss>
				
			
		</BryantSectionWrapperCss>
	);
};

export default BryantSection3;
