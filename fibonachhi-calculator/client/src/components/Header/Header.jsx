import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/fibonacchi"><Icon /></Link>
			</nav>
		</header>
	);
};

export default Header;
