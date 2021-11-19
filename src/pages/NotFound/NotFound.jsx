import { Button } from 'react-bootstrap';
import { BiHomeAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
	const history = useHistory();
	return (
		<section className='error-page section'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 offset-lg-3 col-12'>
						<div className='error-inner'>
							<h1>
								404
								<span>
									Oop's sorry we can't find that page!
								</span>
							</h1>
							<p>
								Something is not right here. we are making
								change this page, please give us time and try
								again later,
							</p>
							<Button
								onClick={() => history.goBack()}
								variant='danger'
								className='mx-2'>
								<BiLeftArrowAlt
									size='16px'
									style={{
										marginTop: '-2px',
										marginRight: '5px',
									}}
								/>{' '}
								Go Back
							</Button>
							<Button onClick={() => history.push('/')}>
								<BiHomeAlt
									size='16px'
									style={{
										marginTop: '-4px',
										marginRight: '5px',
									}}
								/>
								Home
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
