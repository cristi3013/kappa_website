import React from 'react';
import { NovaSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';

import image from '../images/image3.png';

const NovaSection3 = () => {
	return (
		<NovaSectionWrapperCss>
			<InfoBlockCss>
				<p>
					Through its intelligent suggestive layer, Nova AI allows clinical note-taking to be done faster and
					more efficiently, while protecting the dentist from litigation.{' '}
				</p>

				<p>
					The calendar intuitively finds appropriate slots for specific treatments and appointments, so that
					the user doesn't have to do it manually anymore.
				</p>
			</InfoBlockCss>
			<img src={image} />
			<p>
				<span>Treatment plan with predefined procedures.</span>
			</p>
			<InfoBlockCss>
				<p>
					Prescriptions are much easier to compile, as the system automatically highlights conflicts between
					treatments or drugs.
				</p>
				<p>Patient-specific financial matters are simplified and card payments are performed seamlessly.</p>
				<p>
					Nova AI is fully NHS-compliant and produces a series of smart analytics, that are easy to navigate
					and provide optimisation methods to highlighted inefficiencies.
				</p>
			</InfoBlockCss>
		</NovaSectionWrapperCss>
	);
};

export default NovaSection3;
