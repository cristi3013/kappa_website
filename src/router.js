import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Switch, Link, useLocation  } from 'react-router-dom';

import Homepage from './pages/homepage';
import WhoWeAre from './pages/whoweare';
import JoinUs from './pages/joinus';
import Internship from './pages/internship';
import Nova from './pages/nova';
import Bryant from './pages/bryant';
import LayoutPath from './layout/index';

import { LayoutsWrapperCss, GlobalStyle } from './layout/index.css';

function ScrollToTop() {
		const { pathname } = useLocation();
	useEffect(() => {
			window.scrollTo(0, 0);
			}, [pathname]);

			return null;
	}

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<LayoutsWrapperCss>
				<GlobalStyle />

				<Switch>
					<LayoutPath exact path="/" component={Homepage} blocks={[ 1, 2, 3 ]} />
					<LayoutPath path="/bryant" component={Bryant} project={true} blocks={[ 1, 2, 3 ]} />
					<LayoutPath path="/nova" component={Nova} project={true} blocks={[ 1, 2, 3 ]} />
					<LayoutPath path="/whoweare" component={WhoWeAre} blocks={[ 2, 3 ]} />
					<LayoutPath path="/joinus" component={JoinUs} blocks={[ 2,1,3 ]} />
					<LayoutPath path="/internship" component={Internship} blocks={[ 1, 3 ]} />
				</Switch>
			</LayoutsWrapperCss>
		</Router>
	);
}
