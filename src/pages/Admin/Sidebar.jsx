import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = ({ url }) => {
	const { user } = useAuth();
	return (
		<section className='sidebar'>
			<div
				class='d-flex h-100 flex-column flex-shrink-0 p-3 text-dark bg-light'
				style={{ width: '220px' }}>
				<ul class='nav nav-pills flex-column mb-auto h-100vh'>
					<li class='nav-item'>
						<Link to={`${url}`} className='nav-link text-dark'>
							DashBoard
						</Link>
					</li>
					<li class='nav-item'>
						<Link
							to={`${url}/manage-orders`}
							className='nav-link text-dark'>
							Manage Orders
						</Link>
					</li>
					<li class='nav-item'>
						<Link
							to={`${url}/add-deals`}
							className='nav-link text-dark'>
							Add Deals
						</Link>
					</li>
					<li class='nav-item'>
						<Link to={`${url}`} className='nav-link text-muted'>
							Manage users
						</Link>
					</li>
					<li class='nav-item'>
						<Link to={`${url}`} className='nav-link text-muted'>
							Statistics
						</Link>
					</li>
					<li class='nav-item'>
						<Link to={`${url}`} className='nav-link text-muted'>
							Admins management
						</Link>
					</li>
				</ul>
				<hr />
				<div class='dropdown'>
					<img
						src={user.photoURL}
						alt=''
						width='32'
						height='32'
						class='rounded-circle me-2'
					/>
					<strong>{user.displayName || user.email}</strong>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
