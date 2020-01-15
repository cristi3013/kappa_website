import React from 'react';
import { NovaSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';

import image from '../images/image5.png';
import image2 from '../images/image6.png';

const NovaSection5 = () => {
	return (
		<NovaSectionWrapperCss>
			<ItemsCss>
			<img src={image} />
			<img src={image2} />
			</ItemsCss>
			
			<p>
				<span>On-site research on stock handling.</span>
			</p>
			<InfoBlockCss>
				<p>
					In order to fully understand the issues the user may encounter while trying to complete a task, we
					must also study the user behaviour. We organise long observational sessions with the dentists and
					nurses, during which we analyse closely their actions (i.e. How do the dentists interact with the
					patient? How does the information circulate around between the involved parties? How does the
					medical staff perform procedures?).
				</p>
				<p>
					We involve the end user at every step of the process and we validate with them our findings. We
					prototype our solutions by following industry standards and we design the concepts to ensure the
					best possible user experience.
				</p>
			</InfoBlockCss>
		</NovaSectionWrapperCss>
	);
};

export default NovaSection5;
