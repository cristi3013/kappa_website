import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';
export const FirstSectionWrapperCss = styled.div`
	height: 100vh;

	display: flex;
padding-left:16.66vw;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: ${screens.lg}) {
		padding:0px;
	}
	
`;

export const FirstSectionContainerCss = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 648px;
	margin: 25px 0px;

	h2 {
		color: ${colors.white};
	}

	@media (max-width: ${screens.lg}) {
		margin: 25px;
	}
`;

export const LinksCss = styled.h4`display: flex;`;

export const TitleCss = styled.h4`color: ${colors.brown};`;
