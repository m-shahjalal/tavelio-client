import { Link } from 'react-router-dom';
import { BiPaperPlane } from 'react-icons/bi';

const Footer = () => (
	<footer className='w-100 py-4 flex-shrink-0 border-top'>
		<div className='container py-4'>
			<div className='row gy-4 gx-5'>
				<div className='col-lg-4 col-md-6'>
					<h3 className='color-custom fw-bold '>Tavelio</h3>
					<p className='small text-muted'>
						Quickly make you tours with us, The world most popular
						place and tourist attraction will make you live with
						your favorite things and stuffs
					</p>
					<p className='small text-muted mb-0'>
						&copy; Copyrights. All rights reserved.{' '}
						<Link
							className='text-primary text-decoration-none'
							to='#'>
							tavelio.com
						</Link>
					</p>
				</div>
				<div className='col-lg-2 col-md-6'>
					<h5 className='text-gray mb-3'>Quick links</h5>
					<ul className='list-unstyled text-muted'>
						<li>
							<Link className='text-decoration-none' to='#'>
								Home
							</Link>
						</li>
						<li>
							<Link className='text-decoration-none' to='#'>
								About
							</Link>
						</li>
						<li>
							<Link className='text-decoration-none' to='#'>
								Get started
							</Link>
						</li>
						<li>
							<Link className='text-decoration-none' to='#'>
								FAQ
							</Link>
						</li>
					</ul>
				</div>
				<div className='col-lg-2 col-md-6'>
					<h5 className='text-gray mb-3'>Quick links</h5>
					<ul className='list-unstyled text-muted'>
						<li>
							<Link className='text-decoration-none' to='#'>
								Get Help
							</Link>
						</li>
						<li>
							<Link className='text-decoration-none' to='#'>
								complain
							</Link>
						</li>
						<li>
							<Link className='text-decoration-none' to='#'>
								Get touch
							</Link>
						</li>
						<li>
							<Link className='text-decoration-none' to='#'>
								Others
							</Link>
						</li>
					</ul>
				</div>
				<div className='col-lg-4 col-md-6'>
					<h5 className='text-gray mb-3'>Newsletter</h5>
					<p className='small text-muted'>
						Do subscribe to get notifications about our flash deals
						and posts to your inbox.
					</p>
					<form action='#'>
						<div className='input-group mb-3'>
							<input
								className='form-control'
								type='text'
								placeholder="Recipient's username"
								aria-label="Recipient's username"
								aria-describedby='button-addon2'
							/>
							<button
								className='btn btn-primary'
								id='button-addon2'
								type='button'>
								<BiPaperPlane />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
