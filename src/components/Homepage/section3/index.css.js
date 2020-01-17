import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';
export const ThirdSectionWrapperCss = styled.div`
	
	display: flex;

	justify-content: flex-start;
	align-items: flex-start;
	padding-left:33.32vw;

	@media (max-width: ${screens.lg}) {
		padding:0px 25px 25px;
	}
`;

export const ThirdSectionContainerCss = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 648px;
	margin: 100px 0px 200px;

	h2 {
		color: ${colors.white};
	}

	@media (max-width: ${screens.lg}) {
		margin: 0px 0px 170px ;
	}
`;

export const BlockContainerCss = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	h3{
		margin-top:65px;
	}
	
	p span{
		color:${colors.grey}!important;
		word-spacing: 14px;

		i{
			font-style:normal;
			word-spacing:5px;
		}
	}
	
`;

