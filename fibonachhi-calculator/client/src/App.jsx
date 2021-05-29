import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FibonacchiPage from './pages/FibonacchiPage/FibonacchiPage';

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/fibonacchi" component={FibonacchiPage} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
