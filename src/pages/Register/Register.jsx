import { useEffect, useState } from 'react';
import { Alert, Col, Row, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
	const history = useHistory();
	const {
		registerWithEmail,
		user,
		loading,
		googleLoading,
		signInUsingGoogle,
	} = useAuth();
	const { state } = useLocation();
	const redirectToLocation = state?.from?.pathname || '/';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		if (password === confirmPassword && email) {
			setError('');
			registerWithEmail(email, password);
		} else {
			setError('Please fill the form accurately');
		}
	};

	useEffect(() => {
		user && history.push(redirectToLocation);
	}, [user, history, redirectToLocation]);

	return (
		<div className='container login'>
			<Row>
				<Col xs={12} sm={12}>
					<div className='login-form bg-light mt-4 p-4 login-card'>
						<form onSubmit={submitHandler} className='row g-3'>
							<h4>Join today</h4>
							<div className='col-12'>
								<input
									type='email'
									name='Your email'
									className='form-control'
									placeholder='Username'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='col-12'>
								<input
									type='password'
									name='password'
									className='form-control'
									placeholder='Your Password'
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<div className='col-12'>
								<input
									type='password'
									name='password'
									className='form-control'
									placeholder='Your Password'
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								/>
							</div>

							<div className='col-12'>
								<button
									type='submit'
									className='btn btn-dark float-end w-100 mt-3'>
									{loading && (
										<Spinner size='sm' animation='border' />
									)}{' '}
									Sign up
								</button>
							</div>
							<div className='col-12'>
								<button
									onClick={signInUsingGoogle}
									className='btn btn-danger float-end w-100'>
									{googleLoading && (
										<Spinner size='sm' animation='border' />
									)}{' '}
									Sign in With google
								</button>
							</div>
						</form>
						<hr className='mt-4' />
						{error && <Alert variant='danger'>{error}</Alert>}
						<div className='col-12'>
							<p className='text-center mb-0'>
								Have not account yet?{' '}
								<Link to='/register'>Register</Link>
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Register;
