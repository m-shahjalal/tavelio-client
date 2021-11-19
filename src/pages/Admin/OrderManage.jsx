import { useEffect, useState } from 'react';
import { Container, Row, Spinner, Table } from 'react-bootstrap';

import useAuth from '../../hooks/useAuth';
import Axios from '../../utils/axios';
import TableItem from './TableItem';

const OrderManage = () => {
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
		Axios.get(`/orders`)
			.then((res) => setData(res.data))
			.catch((e) => console.error(e))
			.finally(() => setLoading(false));
	}, [user?.email]);
	return (
		<Container>
			<h1 className='text-center pt-3'>All orders</h1>
			{loading ? (
				<Row className='justify-content-md-center h-100'>
					<Spinner animation='border' className='mt-5 m-auto' />
				</Row>
			) : data?.length ? (
				<Table responsive striped>
					<thead>
						<tr>
							<th>User</th>
							<th>Order Id</th>
							<th>Booked package</th>
							<th>Total Cost</th>
							<th>Status</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<TableItem
								DeleteHandler={DeleteHandler}
								key={item._id}
								item={item}
							/>
						))}
					</tbody>
				</Table>
			) : null}
		</Container>
	);
};

export default OrderManage;
