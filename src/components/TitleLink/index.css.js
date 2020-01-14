import styled, { createGlobalStyle } from 'styled-components';
import { screens, fonts, colors } from '../../constants/theme';

export const OverlayCss = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: fixed;
	z-index: 999;
	background: ${colors.black};
	opacity: 0.8;
	display: ${(props) => (props.show ? 'block' : 'none')};
	@media (min-width: ${screens.lg}) {
		display: none;
	}
`;

export const TitleLinkCss = styled.div`
	h3 {
		border-bottom: 2px solid ${colors.grey};
		padding-bottom: 7px;
		display: inline-block;
		width: fit-content;
		cursor: pointer;
		
	}
	display: inline-block;
	text-decoration: none;

	
`;

export const ImgCss = styled.div`
		overflow:hidden;
		display: ${(props) => (props.show ? 'block' : 'none')};
		position: absolute;
		z-index: 9999;
		
		transform: translate(-102%, -30px);
		@media (max-width: ${screens.lg}) {
			width: 100%;
			position: fixed;
			left: 0;
			top: 50%;
			transform: translate(0, -50%);
		}

		img{
			width:100%;
		}


`
