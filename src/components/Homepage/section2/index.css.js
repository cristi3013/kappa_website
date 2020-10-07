import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';
export const SecondSectionWrapperCss = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 8.33vw;

	h4 {
		margin-bottom: 100px;
		@media (max-width: ${screens.lg}) {
			margin: 0px 0px 48px 20px;
		}
	}

	@media (max-width: ${screens.lg}) {
		padding: 20px 0px 0px;
	}
`;

export const BlockCss = styled.div`
	display: flex;
	margin-bottom: 105px;
	align-items: center;

	section {
		margin: 40px 0px;
	}

	@media (max-width: ${screens.lg}) {
		flex-direction: column-reverse;
		section {
			margin: 0px;
		}
	}
`;

export const InfoCss = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 424px;

	margin-right: 73px;

	@media (max-width: ${screens.lg}) {
		margin: 0px 25px;
		width: auto;

		h2 {
			margin-top: 33px;
			margin-bottom: 0px;
		}

		a {
			margin-top: 30px;
		}
	}

	ul {
		padding-left: 0px;
		list-style-position: inside;

		li {
			color: ${colors.grey};
			margin-bottom: 13px;
			list-style: none;
			position: relative;
			padding-left: 12px;
			&:before {
				content: '■';
				position: absolute;
				left: 0px;
				top: 0px;
				font-size: 7px;
				color: ${colors.white};
			}

			span {
				color: ${colors.white};
			}
		}
	}
`;

export const ImageCss = styled.div`
	width: 58.31vw;

	@media (max-width: ${screens.lg}) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`;
