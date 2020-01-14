import React, { useState } from 'react';
import { HeaderWrapperCss, DesktopMenuCss, MobileMenuCss, MobileToggleCss } from './index.css';
import anim from './images/menu.gif';
import { Link } from 'react-router-dom';

const Menu = () =>{
	return(
					<ul>
						<li>
							<Link to="/whoweare">Who we are</Link>
						</li>
						<li>
							<Link to="/internship">Internship</Link>
						</li>
						<li>
							<Link to="/joinus">Join us</Link>
						</li>
					</ul>
	)
}

const Header = (props) => {
	const [ show, setShow ] = useState(false);

	return (
		<HeaderWrapperCss>
			<nav>Kappa.London</nav>
			<MobileToggleCss>
				{!show && <nav onTouchEnd={() => setShow(true)}>Menu</nav>}
				{show && <nav onTouchEnd={() => setShow(false)}>&#10005; Close</nav>}
			</MobileToggleCss>
			<DesktopMenuCss><Menu/></DesktopMenuCss>
			<MobileMenuCss show={show}>
				<img src={anim} />
				<nav onClick={() => setShow(false)}>
					<Menu/>
				</nav>
			</MobileMenuCss>
		</HeaderWrapperCss>
	);
};

export default Header;
