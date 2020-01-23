import React, { useRef, useEffect } from 'react';
import { BryantSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss, ImageCss, VideoCss } from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';

import { useInView } from 'react-intersection-observer';
import video1 from '../videos/2.mp4';
import gif1 from '../videos/2.gif';
import video2 from '../videos/3.mp4';
import video3 from '../videos/4.mp4';



const playVideo = (video) =>{

	var promise = video.play();

		if (promise !== undefined) {
			promise.catch(error => {

				video.controls = true;
				
			}).then(() => {
				
				//promise.play()
			});
		}

}

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

		
			if (video1_view) {playVideo(video1_ref.current);}else{video1_ref.current.pause(); video1_ref.current.currentTime=0;}
			if (video2_view) {playVideo(video2_ref.current);}else{video2_ref.current.pause(); video2_ref.current.currentTime=0;}
			if (video3_view) {playVideo(video3_ref.current);}else{video3_ref.current.pause(); video3_ref.current.currentTime=0;}

		
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
			<VideoCss ref={video1_wrapper}>
				<video src={video1} crossOrigin="true" autoplay loop muted playsinline ref={video1_ref} />

			</VideoCss>
			<VideoCss  ref={video2_wrapper}>
				<video src={video2} crossOrigin="true" loop playsinline muted ref={video2_ref}/>
			</VideoCss>
			<VideoCss  ref={video3_wrapper}>
				<video src={video3} crossOrigin="true" loop playsinline muted ref={video3_ref}/>
			</VideoCss>
			
		</BryantSectionWrapperCss>
	);
};

export default BryantSection2;
