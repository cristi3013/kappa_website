/* global $ Sirv */
import React, { useRef, useEffect } from 'react';
import { BryantSectionWrapperCss, InfoBlockCss, InfoBlockItemCss, ItemsCss } from './index.css';
import { useInView } from 'react-intersection-observer';
import image from '../images/image3-1.png';


const BryantSection3 = () => {
	const r3dRef = useRef(null);

	const [ render3d, inView ] = useInView({
		threshold: 0
	});

	useEffect(
		() => {
			if (inView) {
				Sirv.stop();
				Sirv.start();
			} else {
				r3dRef.current.children.length > 0 && Sirv.stop();
			}
		},
		[ inView ]
	);

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
			<ItemsCss ref={render3d}>
				<InfoBlockItemCss>
					<img src={image} alt="2.8x" />
				</InfoBlockItemCss>
				<InfoBlockItemCss transparent="true">
					<img src={image} alt="2.8x"/>
					<div
					id="r3d"
					ref={r3dRef}
					className="Sirv render3d"
					data-options="autostart:false"
					data-src="https://bryant-dental.sirv.com/BD_360_28_R01/360-28/360-28.spin?startColumn=4&autospin=once"
				/>
				</InfoBlockItemCss>

				
			</ItemsCss>
		</BryantSectionWrapperCss>
	);
};

export default BryantSection3;
