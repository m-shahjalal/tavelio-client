import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';
import { BiLogIn, BiUserCircle } from 'react-icons/bi';

const Header = () => {
	const { user, logout } = useAuth();
	const history = useHistory();
	const logoutHandler = () => {
		logout();
		history.push('/login');
	};
	return (
		<Navbar sticky='top' bg='light' className='border-bottom' expand='lg'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<img
						className='img-fluid'
						style={{ height: '32px', marginTop: '-7px' }}
						src={logo}
						alt='logo'
					/>
					<span
						className='fw-bold mx-2 fs-4 my-1'
						style={{ color: '#3011bc', lineHeight: '30px' }}>
						Tavelio
					</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse
					className='justify-content-end'
					id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						{user ? (
							<>
								<Nav.Link as={Link} to='/dashboard'>
									ADMIN
								</Nav.Link>
								<Nav.Link as={Link} to='/orders'>
									My Orders
								</Nav.Link>
								<Nav.Link as={Link} to='/account'>
									<span>
										{user.photoURL ? (
											<img
												style={{
													height: '25px',
													marginRight: '5px',
													marginTop: '-2px',
													borderRadius: '50%',
												}}
												src={user.photoURL}
												alt='user'
											/>
										) : (
											<BiUserCircle
												size='20px'
												style={{
													marginTop: '-4px',
													marginRight: '5px',
												}}
											/>
										)}
									</span>
									<span>
										{user?.displayName || 'Account'}
									</span>
								</Nav.Link>
								<Nav.Link onClick={logoutHandler}>
									Logout
									<BiLogIn
										size='20px'
										style={{
											marginTop: '-2.5px',
										}}
									/>
								</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={Link} to='/'>
									Home
								</Nav.Link>
								<Nav.Link as={Link} to='/login'>
									Login
								</Nav.Link>
								<Nav.Link
									className='bg-danger rounded text-white'
									as={Link}
									to='/register'>
									Register
								</Nav.Link>{' '}
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
