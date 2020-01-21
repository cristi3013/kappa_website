import React, { useRef, useEffect } from 'react';
import { BryantSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss, ImageCss, VideoCss } from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';

import { useInView } from 'react-intersection-observer';

import video1 from '../videos/2.gif';
import picture1 from '../videos/2.png';
import video2 from '../videos/3.gif';
import picture2 from '../videos/3.png';
import video3 from '../videos/4.gif';
import picture3 from '../videos/4.png';



const BryantSection2 = () => {
	const video1_ref = useRef(null);
	const video2_ref = useRef(null);
	const video3_ref = useRef(null);

	const [ video1_wrapper, video1_view ] = useInView({
		threshold: 0
	});

	const [ video2_wrapper, video2_view ] = useInView({
		threshold: 0
	});

	const [ video3_wrapper, video3_view ] = useInView({
		threshold: 0
	});

	useEffect(
		() => {
			if (video1_view) {
				video1_ref.current.src=video1;
			} else {
				video1_ref.current.src=picture1;
				
			}

			if (video2_view) {
				video2_ref.current.src=video2;
			} else {
				video2_ref.current.src=picture2;
				
			}
			if (video3_view) {
				video3_ref.current.src=video3;
			} else {
				video3_ref.current.src=picture3;
				
			}

		
		},
		[ video1_view, video2_view, video3_view ]
	);

	return (
		<BryantSectionWrapperCss>
			<InfoBlockCss>
				<p>
					Alongside the product renders, smooth transitions and custom interactions ensure a pleasent
					experience.
				</p>
			</InfoBlockCss>
			<ImageCss ref={video1_wrapper}>
				<img src={picture1} ref={video1_ref} />
			</ImageCss>
			<ImageCss ref={video2_wrapper}>
				<img src={picture2} ref={video2_ref} />
			</ImageCss>
			<ImageCss ref={video3_wrapper}>
				<img src={picture3} ref={video3_ref} />
			</ImageCss>
			
		</BryantSectionWrapperCss>
	);
};

export default BryantSection2;
