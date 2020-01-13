import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';
export const SecondSectionWrapperCss = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left:9.5vw;
`;

export const BlockCss = styled.div`
	display: flex;
	margin-bottom: 105px;
	align-items: center;

	section {
		margin: 40px 0px;
	}

    @media(max-width:${screens.lg}){
        flex-direction:column-reverse;
    }
`;

export const InfoCss = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 424px;

	margin-right: 73px;

    @media(max-width:${screens.lg}){
        margin:0px 25px;
        width:auto;
    }

	ul {
		padding-left: 0px;
		list-style-position: inside;

		li {
			color: ${colors.brown};
			margin-bottom: 13px;
			list-style: none;
			position: relative;
			padding-left: 13px;
			&:before {
				content: '■';
				position: absolute;
				left: 0px;
				top: -1px;
				font-size: 15px;
			}

			span {
				margin-left: 10px;
				color: ${colors.white};
			}
		}
	}
`;

export const ImageCss = styled.div`
	width: 100%;
	max-width: 760px;
	img {
		width: 100%;
	}
`;
