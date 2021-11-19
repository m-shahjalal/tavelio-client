import { useState } from 'react';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import Axios from '../../utils/axios';

const initialize = {
	title: '',
	image: '',
	price: '',
	discount: '',
	day: '',
	country: '',
};

const AddProduct = (e) => {
	const [inputs, setInputs] = useState(initialize);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const changeHandler = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess('');
		setError('');
		Axios.post('/deals', inputs)
			.then((res) => {
				console.log(res.data);
				setSuccess('Deal added successfully');
				setInputs(initialize);
			})
			.catch((err) => {
				console.log(err);
				setError('something gone wrong');
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className='mb-3'>
			<h1 className='mb-3 pt-5 text-center'>Add A Product</h1>
			<Form
				onSubmit={submitHandler}
				style={{ maxWidth: '700px', margin: 'auto' }}
				className='p-4'>
				<Form.Group className='mb-3' controlId='formGridAddress1'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						name='title'
						onChange={changeHandler}
						required
						value={inputs.title}
						placeholder='This is ...'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formGridAddress2'>
					<Form.Label>Image link</Form.Label>
					<Form.Control
						name='image'
						onChange={changeHandler}
						required
						value={inputs.image}
						placeholder='https://www.cloudinary.com/asd;fl'
					/>
				</Form.Group>

				<Row className='mb-3'>
					<Form.Group as={Col} controlId='formGridEmail'>
						<Form.Label>Price</Form.Label>
						<Form.Control
							name='price'
							onChange={changeHandler}
							required
							value={inputs.price}
							type='text'
							placeholder='$99'
						/>
					</Form.Group>

					<Form.Group as={Col} controlId='formGridPassword'>
						<Form.Label>Discount</Form.Label>
						<Form.Control
							name='discount'
							onChange={changeHandler}
							required
							value={inputs.discount}
							type='text'
							placeholder='50%'
						/>
					</Form.Group>
				</Row>

				<Row className='mb-3'>
					<Form.Group as={Col} controlId='formGridCity'>
						<Form.Label>Day</Form.Label>
						<Form.Control
							name='day'
							onChange={changeHandler}
							required
							value={inputs.day}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId='formGridZip'>
						<Form.Label>Country</Form.Label>
						<Form.Control
							name='country'
							onChange={changeHandler}
							required
							value={inputs.country}
							placeholder='australia'
						/>
					</Form.Group>
				</Row>

				<Button
					variant='primary'
					className='w-100 mt-3 mb-4'
					type='submit'>
					{loading && (
						<Spinner
							animation='border'
							size='sm'
							className='mx-2'
						/>
					)}
					Submit
				</Button>

				{success ? (
					<Alert variant='success'>{success}</Alert>
				) : error ? (
					<Alert variant='danger'>{error}</Alert>
				) : null}
			</Form>
		</div>
	);
};

export default AddProduct;
