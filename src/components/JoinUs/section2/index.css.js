import styled, { css } from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const JoinUsSecondSectionWrapperCss = styled.div`
	display: flex;
	padding-left: 8.33vw;
	padding-top: 0px;
	padding-bottom: 150px;

	align-items: flex-start;

	@media (max-width: ${screens.lg}) {
		flex-direction: column;
		padding: 25px;
	}

	h4 {
		width: 16.66vw;
		margin-right: 8.33vw;

		@media (max-width: ${screens.lg}) {
			width: 100%;
			margin-right: 0px;
		}
	}
`;

export const BlocksCss = styled.div`
	width: 50vw;

	@media (max-width: ${screens.lg}) {
		width: 100%;
		margin-right: 0px;
	}
`;

export const InfoBlockCss = styled.div`@media (max-width: ${screens.lg}) {}`;

export const InfoBlockHeaderCss = styled.div`
	display: flex;

	@media (max-width: ${screens.lg}) {
	}
`;

export const InfoBlockTitleCss = styled.div`
	h3 {
		margin-top: 15px;
		text-decoration: none;
		border-bottom: 2px solid ${colors.grey};
		padding: 0px 7px 7px;
		display: inline-block;
		margin-bottom: 5px;
		cursor: pointer;
	}

	p {
		color: ${colors.grey}!important;
		word-spacing: 14px;

		i {
			font-style: normal;
			word-spacing: 5px;
		}

		@media (max-width: ${screens.lg}) {
			margin-bottom: 0px;
		}
	}

	@media (max-width: ${screens.lg}) {
	}
`;

export const InfoBlockContentCss = styled.div`
	overflow: hidden;
	height: 0px;

	& a {
		margin-top: 57px;
	}

	& p {
		padding-left: 20px;
	}

	height:0px;
	/*height: ${(props) => (props.show ? props.childrenHeight + 50 + 'px' : '0px')};*/
	/*transition: all 0.7s;*/

	margin-bottom: 78px;

	ul {
		padding: 0px;
		list-style-position: inside;

		li {
			margin-bottom: 13px;
			list-style: none;
			position: relative;
			padding-left: 20px;
			&:before {
				color: ${colors.blue};
				content: '■';
				position: absolute;
				left: 0px;
				top: 0px;
				font-size: 8px;
			}
		}
	}

	h4 {
		margin: 57px 0px 21px;
	}

	@media (max-width: ${screens.lg}) {
	}
`;

export const IconCss = styled.div`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	border: 2px solid ${colors.white};
	cursor: pointer;
	margin-top: 15px;
	margin-right: 24px;
	margin-left: -65px;

	transition: transform 0.3s;
	transform: rotate(180deg);
	position: relative;

	&::before {
		content: '';

		display: block;
		width: 18px;
		height: 0px;
		border-bottom: solid 2px ${colors.white};
		position: absolute;
		bottom: 18px;
		left: 10px;
		transform: rotate(90deg);
		transition: width 0.3s;
	}

	&::after {
		content: '';
		display: block;
		width: 18px;
		height: 0px;
		left: 10px;
		border-bottom: solid 2px ${colors.white};
		position: absolute;
		bottom: 18px;
	}

	${(props) =>
		props.show &&
		css`
			transform: rotate(0deg);

			&::before {
				content: '';
				display: block;
				width: 0px;
				height: 0px;
				border-bottom: solid 2px ${colors.white};
				position: absolute;
				left: 10px;
				bottom: 18px;
				transform: rotate(90deg);
			}
		`} @media (max-width: ${screens.lg}) {
		min-width: 38px;
		margin-left: 0px;
		margin-right: 20px;
	}
`;
