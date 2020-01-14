import styled from 'styled-components';
import { screens, colors } from '../../constants/theme';

export const DesktopMenuCss = styled.div `
	display:flex;

	ul{
		display:flex;
		li{
			margin:0px 21px;
		}
	}
	
	@media (max-width:${screens.lg}) {
		display:none;
	}
`;

export const MobileMenuCss = styled.div `
	
	display:none;
	
	
	background:${colors.black};
	@media (max-width:${screens.lg}) {
		display:${props=>props.show?'flex':'none'};
		position:fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		z-index:9;
		width:100vw;
		height:100vh;
		flex-direction:column;
		justify-content:center;
		align-items:center;

			img{
				width:70vw;
			}

		
			ul{
				display:flex;
				flex-direction:column;
				padding:0px;
				margin-top:88px;

				li{
					text-align:center;
					margin:17px 0px!important;
				}
				
			}
			

		
		
	}
`;

export const MobileToggleCss = styled.div`
	z-index:9999;
	color:${colors.white};
		&:hover{
			color:${colors.grey};
		}

	@media (max-width:${screens.lg}) {
		display:block;
	}

	display:none;
`;


export const HeaderWrapperCss = styled.div`
	left: 0px;
	right: 0px;
	top: 0px;
	padding: 0px 60px;
	height: 80px;
	position: fixed;
	display: flex;
	z-index:99;
	background:${colors.black};

	@media (max-width:${screens.lg}) {
		padding: 0px 25px;
	}

	justify-content: space-between;
	align-items: center;

	nav,
	a {
		color: ${colors.white};
		text-decoration: none;
		font-style: normal;
		font-weight: 500;
		z-index:999;
	}

	li {
		list-style: none;
	}
`;
