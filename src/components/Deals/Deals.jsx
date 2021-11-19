import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from '../../utils/axios';
import { FcCalendar, FcGlobe } from 'react-icons/fc';
import { AiOutlineTags } from 'react-icons/ai';
import './Deals.css';

const Deals = () => {
	const [deals, setDeals] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		Axios.get('/deals')
			.then((res) => setDeals(res.data))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);
	return (
		<Container className='my-5 py-5'>
			<Row className='justify-content-md-center mb-4'>
				<h1 className='text-center my-3 fw-bold'>Flash Deals</h1>
				<p className='lead text-center text-secondary'>
					Enjoy the benefits of our packages to the sites where our
					visitors have more fun. Properly arranged with low costing.
				</p>
			</Row>
			{loading ? (
				<Row className='justify-content-md-center'>
					<Spinner animation='border' className='mt-5 m-auto' />
				</Row>
			) : deals?.length > 0 ? (
				<Row
					xs={1}
					md={2}
					lg={3}
					className='g-4 justify-content-md-center'>
					{deals.map((item) => (
						<Col key={item._id}>
							<Card className='relative custom-card h-100 justify-content-between'>
								<Card.Img
									height='300px'
									variant='top'
									src={item.image}
								/>
								<Card.Body className='d-flex flex-column justify-content-around'>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text as='div'>
										<Row className='mt-3'>
											<Col>
												<FcGlobe
													size='22px'
													style={{
														marginRight: '4px',
														marginTop: '-2px',
													}}
												/>
												<span>{item.country}</span>
											</Col>
											<Col>
												<FcCalendar
													size='22px'
													style={{
														marginRight: '4px',
														marginTop: '-2px',
													}}
												/>
												<span>{item.days}</span>
											</Col>
										</Row>
										<Row className='mt-3'>
											<Col>
												<h2 className='fw-bold color-custom d-inline'>
													{item.price}
												</h2>
												<span className='text-secondary'>
													Only
												</span>
											</Col>
											<Col>
												<div className='custom-badge'>
													<AiOutlineTags size='25px' />
													<h5 className='d-inline'>
														{item.discount}
													</h5>
													<span>Off</span>
												</div>
											</Col>
										</Row>
									</Card.Text>
									<Button
										as={Link}
										to={{
											state: item,
											pathname: '/purchase',
										}}
										className='mt-3'
										variant='outline-danger'>
										Book Now
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			) : null}
		</Container>
	);
};

export default Deals;
