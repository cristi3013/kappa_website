import styled, { createGlobalStyle } from 'styled-components';
import { screens, fonts,colors } from '../constants/theme';



export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  body {
    font-family: ${fonts.primary};
    background-color:${colors.black};
  }
`

export const LayoutsWrapperCss = styled.div`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	li,
	nav,
	button {
		font-family: ${fonts.primary};
	}

	h1 {
		font-style: normal;
		font-weight: normal;
		font-size: 32px;
		line-height: 42px;

		@media (max-width: ${screens.lg}) {
			font-style: normal;
			font-weight: normal;
			font-size: 26px;
			line-height: 34px;
		}
	}

	h2 {
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		line-height: 36px;

		@media (max-width: ${screens.lg}) {
			font-style: normal;
			font-weight: normal;
			font-size: 24px;
			line-height: 31px;
		}
	}

	h3 {
		font-style: italic;
		font-weight: normal;
		font-size: 28px;
		line-height: 36px;
		@media (max-width: ${screens.lg}) {
			font-style: italic;
			font-weight: normal;
			font-size: 24px;
			line-height: 31px;
		}
	}

	h4 {
		font-style: italic;
		font-weight: normal;
		font-size: 18px;
		line-height: 23px;
		@media (max-width: ${screens.lg}) {
			font-style: italic;
			font-weight: normal;
			font-size: 16px;
			line-height: 21px;
		}
	}

	p {
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 27px;

		@media (max-width: ${screens.lg}) {
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 27px;
		}
	}

	li {
		font-style: italic;
		font-weight: normal;
		font-size: 18px;
		line-height: 23px;
		letter-spacing: 0.03em;
		@media (max-width: ${screens.lg}) {
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 28px;
		}
	}

	nav {
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 23px;
		@media (max-width: ${screens.lg}) {
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 21px;
		}
	}

	.numbers {
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 23px;
		@media (max-width: ${screens.lg}) {
			font-style: normal;
			font-weight: 600;
			font-size: 18px;
			line-height: 23px;
		}
	}
`;
