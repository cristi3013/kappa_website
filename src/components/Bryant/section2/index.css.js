import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const BryantSectionWrapperCss = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 130px;

	justify-content: center;
	align-items: center;

	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		padding: 50px 0px 25px;
		width: auto;
	}
`;

export const InfoBlockCss = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60vw;
	p,
	h1 {
		width: 50vw;
		max-width: 648px;
	}
	@media (max-width: ${screens.lg}) {
		width: 100%;

		p,
		h1,
		h4 {
			padding: 0px 25px;
			width: auto;
		}
	}
`;

export const ImageCss = styled.div`
	overflow: hidden;
	width: 83vw;
	margin: 80px 0px;
	img {
		width: 100%;
	}

	@media (max-width: ${screens.lg}) {
		margin: 75px 0px 0px;
		max-height: 350px;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		width:100%;
		img {
			width:auto;
			height: 100%;
			max-height:350px;
		}
	}
`;

export const ItemsCss = styled.div`
	display: flex;
	margin: 25px 0px 25px;
	justify-content: space-between;
	width: 100%;
	max-width: 820px;
	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		width: 100%;
	}
`;

export const InfoBlockItemCss = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
	max-width: 300px;
	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		width: 100%;
		margin-bottom: 50px;
	}

	h4 {
		width: 100%;

		@media (max-width: ${screens.lg}) {
			width: auto;
			margin-bottom: 0px;
		}
	}

	a {
		padding: 0px 5px 8px;
		margin: 0px;
		color: ${colors.grey};

		@media (max-width: ${screens.lg}) {
			margin: 16px 25px 0px;
		}
	}

	p {
		color: ${colors.grey}!important;
		word-spacing: 14px;
		margin: 0px;
		width: 100%;
		span {
			font-style: normal;
			word-spacing: 5px;
		}

		@media (max-width: ${screens.lg}) {
			margin: 16px 0px 0px;
		}
	}
`;
