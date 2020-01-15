import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const NovaSectionWrapperCss = styled.div`
	display: flex;
    flex-direction:column;
    width:100%;
	padding-top: 0px;
	padding-bottom: 150px;
	justify-content: center;
	align-items: center;

	p>span{
		color:${colors.grey};
		text-align:center;
		display:inline-block;
	}



	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		padding: 0px 25px 25px;
		width: auto;

	}
`;

export const InfoBlockCss = styled.div`
	width: 50vw;
	margin:114px 0px;
	display:flex;
	flex-direction:column;
	align-items:center;
	a{
		margin: -7px 0px 30px 0px;
	}
	@media (max-width: ${screens.lg}) {
		width: 100%;
		margin:50px 0px;
		
	}
`;

export const ItemsCss = styled.div`
	display: flex;
	margin: 75px 0px 54px;
	justify-content: space-between;
`;

export const InfoBlockItemCss = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;

	h4 {
		width: 100%;

		@media (max-width: ${screens.lg}) {
			width: 100%;
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
