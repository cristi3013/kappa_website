import React from 'react';
import { NovaSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';

import image from '../images/image4.png';

const NovaSection4 = () => {
	return (
		<NovaSectionWrapperCss>
			<img src={image} />
			<p>
				<span>Researching existing software solutions.</span>
			</p>
			<InfoBlockCss>
				<p>
					In order to build Nova AI, a colossal collective effort is required. We work with dental experts to
					gather relevant data on the problems encountered in a dentistry practice. Our data science
					specialists analyse usage reports and NHS compliance standards in order to propose viable solutions.
				</p>

				<p>
					The research phase involves a thorough market analysis. We take an in-depth look at dentistry
					forums, academic papers and industry articles - we leave no stone unturned. We study the current
					available software solutions at the most granular level.
				</p>
			</InfoBlockCss>
		</NovaSectionWrapperCss>
	);
};

export default NovaSection4;
