import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Homepage from './pages/homepage';
import WhoWeAre from './pages/whoweare';
import JoinUs from './pages/joinus';
import Internship from './pages/internship';
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
					<LayoutPath exact path="/" component={Homepage}  blocks={[1,2,3]}/>
					<LayoutPath path="/whoweare" component={WhoWeAre}  blocks={[2,3]}/>
					<LayoutPath path="/joinus" component={JoinUs}  blocks={[1,3]}/>
					<LayoutPath path="/internship" component={Internship}  blocks={[1,3]}/>
				</Switch>
			</LayoutsWrapperCss>
		</Router>
	);
}
