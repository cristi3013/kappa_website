import React from 'react';
import { PrimaryLinkCss } from '../../../layout/index.css';
import { SecondSectionWrapperCss, BlockCss, InfoCss, ImageCss } from './index.css';
import img1 from './images/image1.png';
import img2 from './images/image2.png';
import { Link } from 'react-router-dom';

const SecondSection = () => {
	return (
		<SecondSectionWrapperCss>
			<h4>
				<span className="symbol">|</span> Currently working on{' '}
				<span className="symbol">&lt;</span>
			</h4>
			<BlockCss>
				<InfoCss>
					<h2>Bryant Dental</h2>
					<p>
						Bryant Dental is a UK-based dentistry equipment manufacturer and
						distributor.
					</p>
					<section>
						<p>Acknowledgements:</p>
						<ul>
							<li>
								2019 Dental Industry Awards <span>Best Website</span>
							</li>
							<li>
								2018 Awwwards Honorable <span>Mention</span>
							</li>
						</ul>
					</section>
					<PrimaryLinkCss to="/bryant">View project</PrimaryLinkCss>
				</InfoCss>
				<ImageCss>
					<Link to="/bryant">
						<img src={img1} alt="Bryant Dental" />
					</Link>
				</ImageCss>
			</BlockCss>

			<BlockCss>
				<InfoCss>
					<h2>Nova AI</h2>
					<p>
						Nova is a powerful AI assisted dental practice management and counter
						litigation system.
					</p>
					<section>&nbsp;</section>
					<PrimaryLinkCss to="/nova">View project</PrimaryLinkCss>
				</InfoCss>
				<ImageCss>
					<Link to="/nova">
						<img src={img2} alt="Nova AI" />
					</Link>
				</ImageCss>
			</BlockCss>
		</SecondSectionWrapperCss>
	);
};
export default SecondSection;
