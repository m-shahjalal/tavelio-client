import { useState } from 'react';
import { Col, Form, Row, Button, Spinner } from 'react-bootstrap';
import { AiOutlineTags } from 'react-icons/ai';
import { BiCurrentLocation, BiCalendar, BiMoney } from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Axios from '../../utils/axios';
import './Purchase.css';

const initialize = {
	name: '',
	email: '',
	address: '',
	city: '',
	state: '',
	zip: '',
	status: 'pending',
};

const Purchase = () => {
	const { state } = useLocation();
	const [inputs, setInputs] = useState(initialize);
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	if (!state) history.goBack();
	const { user } = useAuth();

	const changeHandler = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setLoading(true);

		const postBody = {
			ship: {
				name: inputs.name || user.displayName,
				email: user.email,
				address: inputs.address,
				city: inputs.city,
				state: inputs.state,
				zip: inputs.zip,
			},
			product: state,
			user: user.email,
			status: 'pending',
		};

		Axios.post('/orders', postBody)
			.then((res) => {
				if (res.data.acknowledged) history.push('/orders');
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => setLoading(false));
	};

	if (!state) {
		return (
			<h1 className='my-5 py-5 text-center'>
				Your application state is empty
			</h1>
		);
	}
	return (
		<div className='purchase'>
			<h1 className='my-5 text-center '>Your purchase Details</h1>
			<div className='card mx-auto'>
				<img className='mx-auto pic' src={state.image} alt='order' />
				<div className='card-title'>
					<div className='d-flex px-4'>
						<p className='item lead text-dark'>{state.title}</p>
					</div>
					<Row className='mt-1'>
						<Col>
							<p className='fw-bold px-4 text-dark d-inline text-dark'>
								<BiMoney
									size='18px'
									style={{
										marginRight: '4px',
										marginTop: '-2px',
									}}
								/>
								{state.price}
							</p>
						</Col>
						<Col>
							<div className=''>
								<AiOutlineTags size='20px' />
								<p className='d-inline'>{state.discount}</p>
								<span>Off</span>
							</div>
						</Col>
					</Row>
					<Row className='mt-3 mb-3  px-4 justify-content-between'>
						<Col>
							<BiCurrentLocation
								size='18px'
								style={{
									marginRight: '4px',
									marginTop: '-2px',
								}}
							/>
							<span>{state.country}</span>
						</Col>
						<Col>
							<BiCalendar
								size='18px'
								style={{
									marginRight: '4px',
									marginTop: '-2px',
								}}
							/>
							<span>{state.days}</span>
						</Col>
					</Row>
				</div>
				<div className='card-body'>
					<h3 className='text-muted mt-5  text-center'>
						Shipping address
					</h3>
					<Form onSubmit={submitHandler} className='card-body'>
						<Form.Group className='mb-3'>
							<Form.Control
								type='text'
								name='name'
								value={user?.displayName || inputs.name}
								disabled={user?.displayName || false}
								placeholder='Your Name'
								onChange={changeHandler}
								required
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Control
								type='Email'
								name='email'
								placeholder='Your email'
								value={user?.email}
								disabled={user?.email}
								onChange={changeHandler}
								required
							/>
						</Form.Group>

						<Form.Group
							className='mb-3'
							onChange={changeHandler}
							value={inputs.address}
							name='address'
							required>
							<Form.Control placeholder='Address' />
						</Form.Group>

						<Row className='mb-3'>
							<Form.Group
								xs={12}
								sm={6}
								md={4}
								as={Col}
								className='mb-3'
								controlId='formGridCity'>
								<Form.Control
									onChange={changeHandler}
									name='city'
									value={inputs.city}
									placeholder='city'
									required
								/>
							</Form.Group>

							<Form.Group
								xs={12}
								sm={6}
								md={4}
								as={Col}
								className='mb-3'
								controlId='formGridState'>
								<Form.Control
									onChange={changeHandler}
									name='state'
									value={inputs.state}
									placeholder='state'
									required
								/>
							</Form.Group>

							<Form.Group
								xs={12}
								sm={12}
								md={4}
								as={Col}
								className='mb-3'
								controlId='formGridZip'>
								<Form.Control
									onChange={changeHandler}
									name='zip'
									value={inputs.zip}
									placeholder='Zip'
									required
								/>
							</Form.Group>
						</Row>
						<Row className='px-2 mt-2'>
							<Button type='submit' className='w-100'>
								{loading && (
									<Spinner
										size='sm'
										className='mx-2'
										animation='border'
									/>
								)}
								Order Now
							</Button>
						</Row>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
