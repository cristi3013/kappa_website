import React from 'react';
import { JoinUsFirstSectionWrapperCss, InfoBlockCss } from './index.css';

const JoinUsFirstSection = () => {
	return (
		<JoinUsFirstSectionWrapperCss>
			<h4>
				<span class="symbol">|</span> Join us <span class="symbol">&lt;</span>
			</h4>
			<InfoBlockCss>
				<h1>
					We're always on the lookout for good people. Check out the jobs below and apply.
				</h1>
			</InfoBlockCss>
		</JoinUsFirstSectionWrapperCss>
	);
};

export default JoinUsFirstSection;
