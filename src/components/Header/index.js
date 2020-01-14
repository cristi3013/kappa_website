import React, { useState } from 'react';
import { HeaderWrapperCss,DesktopMenuCss,MobileMenuCss,MobileToggleCss } from './index.css';
import anim from './images/menu.gif';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
	const [show,setShow] = useState(false);

	return (
		<HeaderWrapperCss>
			<nav>Kappa.London</nav>
			<MobileToggleCss>
				{!show&&<nav onTouchEnd={()=>setShow(true)}>Menu</nav>}
				{show&&<nav onTouchEnd={()=>setShow(false)}>&#10005; Close</nav>}
			</MobileToggleCss>
			<DesktopMenuCss>{children}</DesktopMenuCss>
			<MobileMenuCss show={show}>
			<img src={anim}/>
			<nav onClick={()=>setShow(false)}>
						<ul>
							<li >
								<Link to="/whoweare" >Who we are</Link>
							</li>
							<li>
								<Link to="/">Internship</Link>
							</li>
							<li>
								<Link to="/">Join us</Link>
							</li>
						</ul>
				</nav>
			
			</MobileMenuCss>
		</HeaderWrapperCss>
	);
};

export default Header;
