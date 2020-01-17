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
	margin-bottom: 154px;

	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		margin: 0px 25px 100px;
	}
`;

export const FooterBlockTitleCss = styled.h4`
	display: flex;
	width: 100%;
	max-width: 16.66vw;

	margin: 0px 8.33vw;

	@media (max-width: ${screens.lg}) {
		margin: 0px 0px 50px;
		max-width: 100%;
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

	p {
		border-bottom: 2px solid ${colors.grey};

		height: fit-content;
		padding: 0px 0px 4px;
		margin-top: -2px;
		margin-right: 50px;
		margin-bottom: 20px;
	}

	@media (max-width: ${screens.lg}) {
		margin: 0px;
		width: 90%;
	}
`;
