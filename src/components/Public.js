import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import Airport from './Airport';
import City from './City';
import Courses from './Courses';
import Contact from './Contact';
import CustomLink from './CustomLink';

const routes = [
	{
		path: '/public/home',
		exact: false,
		leftbar: () => <Home />,
		main: () => <h2>Home</h2>
	},
	{
		path: '/public/airports',
		exact: false,
		leftbar: () => <Airport />,
		main: () => <h2>Airport</h2>
	},
	{
		path: '/public/cities',
		exact: false,
		leftbar: () => <City />,
		main: () => <h2>Cities</h2>
	},
	{
		path: '/public/contact',
		exact: false,
		leftbar: () => < Contact />,
		main: () => <h2>Contact</h2>
	},
];

const Public = () => (
	<div style={{ display: 'flex' }}>
		<div style={{
			padding: '10px',
			width: '40%',
			background: '#154981'
		}}>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				<li><CustomLink to="/public/home">Home</CustomLink></li>
				<li><Link to="/public/airports">Airports</Link></li>
				<li><Link to="/public/cities">Cities</Link></li>
				<li><Link to="/public/courses">Courses</Link></li>
				<li><CustomLink to="/public/contact">Contact</CustomLink></li>
			</ul>
			{routes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.leftbar}
				/>
			))}
			<Route path="/public/courses" component={Courses}/>
		</div>
	</div>
)

export default Public;