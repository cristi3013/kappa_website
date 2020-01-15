import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const NovaSectionWrapperCss = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 200px;

	justify-content: center;
	align-items: center;

	img {
		width: 100%;
	}

	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		padding: 50px 0px 25px;
		width: auto;

		p,h1,h4{
			padding:0px 25px;
		}
	}
`;

export const InfoBlockCss = styled.div`
	width: 50vw;
	@media (max-width: ${screens.lg}) {
		width: 100%;
		margin-bottom: 50px;
	}
`;

export const ItemsCss = styled.div`
	display: flex;
	margin: 25px 0px 25px;
	justify-content: space-between;
	@media (max-width: ${screens.lg}) {
		flex-direction:column;
		width: 100%;
		
	}
`;

export const InfoBlockItemCss = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
	@media (max-width: ${screens.lg}) {
		flex-direction:column;
		width: 100%;
		
	}

	h4 {
		width: 100%;

		@media (max-width: ${screens.lg}) {
			width: 100%;
			margin-bottom:0px;
		}
	}

	p {
		color: ${colors.grey}!important;
		word-spacing: 14px;

		span {
			font-style: normal;
			word-spacing: 5px;
		}
	}
`;
