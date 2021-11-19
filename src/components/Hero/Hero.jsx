import './Hero.css';
import { Button } from 'react-bootstrap';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='container col-xxl-8 px-4 py-5'>
				<div className='row flex-lg-row align-items-center g-5 py-5'>
					<div className='col-lg-6'>
						<h1 className='display-5 fw-bold lh-1 text-light mb-3'>
							Make Your Mind Super Cool Today
						</h1>
						<p className='lead text-light'>
							Quickly make you tours with us, The world most
							popular place and tourist attraction will make you
							live with your favorite things and stuffs
						</p>
						<div className='d-grid gap-2 d-md-flex justify-content-md-start'>
							<Button variant='primary' size='lg'>
								See The Tours
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
