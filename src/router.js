import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Homepage from './pages/homepage';
import WhoWeAre from './pages/whoweare';
import LayoutPath from './layout/index';
import Header from './components/Header/index';

import { LayoutsWrapperCss, GlobalStyle } from './layout/index.css';

export default function App() {
	return (
		<Router>
			<LayoutsWrapperCss>
				<GlobalStyle />
				<Header>
					<nav>
						<ul>
							<li>
								<Link to="/whoweare">Who we are</Link>
							</li>
							<li>
								<Link to="/">Internship</Link>
							</li>
							<li>
								<Link to="/">Join us</Link>
							</li>
						</ul>
					</nav>
				</Header>

				<Switch>
					<LayoutPath exact path="/" component={Homepage} />
					<LayoutPath path="/whoweare" component={WhoWeAre} />
				</Switch>
			</LayoutsWrapperCss>
		</Router>
	);
}
