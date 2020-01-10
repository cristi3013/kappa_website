import styled from 'styled-components';
import { screens, colors } from '../../constants/theme';

export const FooterWrapperCss = styled.div`
	display: flex;
	flex-direction: column;

	h4 {
		color: ${colors.brown};
	}

	h2 {
		color: ${colors.white};
		margin-top: 0px;
		margin-bottom: 72px;
		i {
			text-decoration: underline;
		}
        @media (max-width: ${screens.lg}) {
            margin-bottom: 50px;
	}
	}
`;

export const FooterBlockCss = styled.div`
	display: flex;
	margin-bottom: 184px;

	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		margin: 0px 25px 130px;
	}
`;

export const FooterBlockTitleCss = styled.h4`
	display: flex;
	width: 100%;
	max-width: 200px;

	margin: 0px 12vw 0px 9.5vw;

	@media (max-width: ${screens.lg}) {
		margin: 0px 0px 50px;
	}
`;

export const FooterBlockInfoCss = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 650px;
`;

export const FooterBlockLinksCss = styled.div`
	display: flex;
	width: 70%;
	flex-wrap: wrap;

	@media (max-width: ${screens.lg}) {
		margin: 0px 0px 50px;
		width: 90%;
	}
`;
