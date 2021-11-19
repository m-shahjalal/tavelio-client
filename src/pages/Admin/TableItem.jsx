import { Form } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';
import Axios from '../../utils/axios';

const TableItem = ({ item, DeleteHandler }) => {
	const changeHandler = (e) => {
		if (window.confirm('Are you sure you want to do?')) {
			const value = e.target.value;

			Axios.put(`/orders/${item._id}`, { status: value })
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
		}
	};

	return (
		<tr>
			<td>{item.user}</td>
			<td>{item._id}</td>
			<td>{item.product?.title}</td>
			<td>{item.product?.price}</td>
			<td style={{ width: '125px' }}>
				<Form.Select size='sm' onChange={changeHandler}>
					<option
						selected={item.status === 'pending'}
						value='pending'>
						pending
					</option>
					<option
						selected={item.status === 'approved'}
						value='approved'>
						approved
					</option>
					<option
						selected={item.status === 'completed'}
						value='completed'>
						completed
					</option>
				</Form.Select>
			</td>
			<td>
				<AiOutlineDelete
					size='20px'
					color='red'
					style={{ cursor: 'pointer' }}
					onClick={() => DeleteHandler(item._id)}
				/>
			</td>
		</tr>
	);
};

export default TableItem;
