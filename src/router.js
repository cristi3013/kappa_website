import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Homepage from './pages/homepage';
import WhoWeAre from './pages/whoweare';
import JoinUs from './pages/joinus';
import LayoutPath from './layout/index';
import Header from './components/Header/index';

import { LayoutsWrapperCss, GlobalStyle } from './layout/index.css';

export default function App() {
	return (
		<Router>
			<LayoutsWrapperCss>
				<GlobalStyle />
				<Header />

				<Switch>
					<LayoutPath exact path="/" component={Homepage} />
					<LayoutPath path="/whoweare" component={WhoWeAre} />
					<LayoutPath path="/joinus" component={JoinUs} />
				</Switch>
			</LayoutsWrapperCss>
		</Router>
	);
}
