import './Account.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

import {
	BsDribbble,
	BsFacebook,
	BsGoogle,
	BsInstagram,
	BsLinkedin,
} from 'react-icons/bs';

const Account = () => {
	const { user } = useAuth();
	return (
		<div class='container my-5'>
			<div class='row d-flex justify-content-center'>
				<div class='col-md-7'>
					<div class='card p-3 py-4'>
						<div class='text-center'>
							<img
								src={user.photoURL}
								width='100'
								class='rounded-circle'
								alt='cover'
							/>
						</div>
						<div class='text-center mt-3'>
							<h5 class='mt-2 mb-0'>
								{user.displayName || user.email}
							</h5>
							<span>A delighted man to make changes</span>
							<div class='px-4 mt-1'>
								<p class='fonts'>
									Consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna
									aliqua. Ut enim ad minim veniam, quis
									nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat.
								</p>
							</div>
							<ul class='social-list'>
								<li>
									<BsFacebook />
								</li>
								<li>
									<BsDribbble />
								</li>
								<li>
									<BsInstagram />
								</li>
								<li>
									<BsLinkedin />
								</li>
								<li>
									<BsGoogle />
								</li>
							</ul>
							<div class='buttons'>
								<button class='btn btn-outline-primary px-4'>
									<Link className='text-dark' to='/dashboard'>
										Dashboard
									</Link>
								</button>
								<button class='btn btn-primary mx-1 px-4 ms-3'>
									<Link className='text-white' to='/'>
										Go Outing
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
