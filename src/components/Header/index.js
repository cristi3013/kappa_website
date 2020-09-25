import React, { useState, useEffect } from 'react';
import {
	HeaderWrapperCss,
	DesktopMenuCss,
	MobileMenuCss,
	MobileToggleCss,
	GlobalStyle,
} from './index.css';
import anim from './images/menu.gif';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './images/logo.svg';

const Menu = ({ ...props }) => {
	return (
		<nav {...props}>
			<ul>
				<li>
					<Link to="/whoweare">Who we are</Link>
				</li>
				<li>
					<Link to="/blog/a9c25b83de38">Latest Read</Link>
				</li>
				<li>
					<Link to="/internship">Internship</Link>
				</li>
				<li>
					<Link to="/joinus">Join us</Link>
				</li>
			</ul>
		</nav>
	);
};

const Header = (props) => {
	const [show, setShow] = useState(false);
	const [scrollPos, setScroll] = useState(0);

	useEffect(() => {
		if (!show) {
			window.scrollTo(0, scrollPos);
		}
	}, [show]);

	const lockScroll = () => {
		setScroll(window.pageYOffset);
		setShow(true);
	};

	return (
		<HeaderWrapperCss>
			<GlobalStyle show={show} />
			<Link to="/">
				<LogoSvg />
			</Link>
			<MobileToggleCss>
				{!show && <nav onTouchEnd={() => lockScroll()}>Menu</nav>}
				{show && <nav onTouchEnd={() => setShow(false)}>&#10005; Close</nav>}
			</MobileToggleCss>
			<DesktopMenuCss>
				{props.project && <Link to="/">&#10005; Close</Link>}
				{!props.project && <Menu />}
			</DesktopMenuCss>
			<MobileMenuCss show={show}>
				<img src={anim} alt="" />

				<Menu
					onClick={() => {
						setScroll(0);
						window.scrollTo(0, 0);
						setShow(false);
					}}
				/>
			</MobileMenuCss>
		</HeaderWrapperCss>
	);
};

export default Header;
