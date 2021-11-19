import { useEffect, useState } from 'react';
import { Container, Row, Spinner, Table } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import Axios from '../../utils/axios';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const { user } = useAuth();

	const DeleteHandler = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			const newData = [...data];
			const index = newData.findIndex((item) => item._id === id);
			newData.splice(index, 1);
			setData(newData);
			Axios.delete(`/orders/${id}`)
				.then((res) => {
					if (res.data.deletedCount) {
						console.log('data deleted successfully');
					}
				})
				.catch((error) => {});
		}
	};

	useEffect(() => {
		Axios.get(`/orders/${user.email}`)
			.then((res) => setData(res.data))
			.catch((e) => console.error(e))
			.finally(() => setLoading(false));
	}, [user?.email]);
	return (
		<Container className='mb-5'>
			<h1 className='text-center my-5'>My Orders</h1>
			{loading ? (
				<Row className='justify-content-md-center h-100 mb-5'>
					<Spinner animation='border' className='mt-5 m-auto' />
				</Row>
			) : data?.length ? (
				<Table striped className='mb-5 pb-5'>
					<thead>
						<tr>
							<th>Order Id</th>
							<th>Booked package</th>
							<th>Status</th>
							<th>Total Cost</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item._id}>
								<td>{item._id}</td>
								<td>{item.product?.title}</td>
								<td>{item.status}</td>
								<td>{item.product?.price}</td>
								<td>
									<AiOutlineDelete
										size='20px'
										color='red'
										style={{ cursor: 'pointer' }}
										onClick={() => DeleteHandler(item._id)}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : null}
		</Container>
	);
};

export default Orders;
