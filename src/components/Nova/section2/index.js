import React from 'react';
import { NovaSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';

import image from '../images/image2.png';

const NovaSection2 = () => {
	return (
		<NovaSectionWrapperCss>
			<InfoBlockCss>
			

				<p>Our solution tackles multiple inefficiencies and issues within the dentistry practice management process, while proposing a series of synchronised features under the same structural umbrella. Poorly designed resources, administration procedures, outdated calendars, a chaotic clinical note-taking system, and the list goes on...</p>

				<p>Appointments get delayed and last for longer than expected, dentists are forced to spend extra time to complete documentation, and since mistakes are prone to happen - the patient is at risk.</p>
				
			</InfoBlockCss>
			<img src={image} />
			<p><span>Prototyping appointment creation and calendar interaction.</span></p>
		
		</NovaSectionWrapperCss>
	);
};

export default NovaSection2;
