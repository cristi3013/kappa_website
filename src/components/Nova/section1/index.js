import React from 'react';
import { NovaSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';

import image from '../images/image1.png';

const NovaSection1 = () => {
	return (
		<NovaSectionWrapperCss>
			<InfoBlockCss>
				<h1>Nova AI</h1>

				<p>
					The dentistry practice is a complex environment. Multiple people are in charge
					of various processes and tools that cater for the patient's health. From
					appointment scheduling, diagnoses and treatments to financial matters,
					communication and resources management - all are centralised in a practice
					management software, such as Nova AI.
				</p>
				<ItemsCss>
					<InfoBlockItemCss>
						<h4 class="grey">
							<span class="symbol">|</span> Responsibilities{' '}
							<span class="symbol">&lt;</span>
						</h4>
						<p>
							Analysis Discovery <span>Architecture UX</span> UI <span>MVP Dev</span>{' '}
							<span>Product Dev</span> Maintenance Support
						</p>
					</InfoBlockItemCss>

					<InfoBlockItemCss>
						<h4 class="grey">
							<span class="symbol">|</span> Live website{' '}
							<span class="symbol">&lt;</span>
						</h4>
						<p>
							UML PHP Symfony JavaScript NodeJS ReactJS <span>Machine Learning</span>{' '}
							AI SQL MongoDB
						</p>
					</InfoBlockItemCss>
				</ItemsCss>
			</InfoBlockCss>
			<img src={image} />
		</NovaSectionWrapperCss>
	);
};

export default NovaSection1;
