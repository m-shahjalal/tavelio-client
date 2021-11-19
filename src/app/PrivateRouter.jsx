import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRouter = ({ children, ...rest }) => {
	const { user, loading } = useAuth();
	return loading ? (
		<Row className='justify-content-md-center min-vh-100'>
			<Spinner animation='border' className='mt-5 m-auto' />
		</Row>
	) : (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRouter;
