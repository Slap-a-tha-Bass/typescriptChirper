import * as React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Layout from './components/Layout';
import ChirpForm from './components/ChirpForm';
import Home from './views/Home';
import Details from './views/Details';
import EditForm from './components/EditForm';
import Delete from './components/Delete';

const App: React.FC<IAppProps> = () => {

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/form">
					<ChirpForm />
				</Route>
				<Route exact path="/edit/:id">
					<EditForm />
				</Route>
				<Route exact path="/details/:id">
					<Details />
				</Route>
				<Route exact path="/delete/:id">
					<Delete />
				</Route>
			</Switch>
		</Router>
	);
}

export interface IChirp {
	id?: string;
	user: string;
	message: string;
}

interface IAppProps {
}

export default App;