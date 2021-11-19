import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Item.css';

const Item = () => {
	const [data, setData] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetch('/services.json')
			.then((res) => res.json())
			.then((d) => setData(d.find((p) => p.id.toString() === id)))
			.catch((e) => console.error(e));
	}, [id]);

	return (
		<div className='item-component'>
			{data ? (
				<>
					<img
						className='item-image'
						src={data.img}
						alt={data.name}
					/>
					<div className='item-name'> {data.name}</div>
					<div className='item-description'> {data.description}</div>
					<Link to='/appointment' className='item-btn'>
						Book now
					</Link>
				</>
			) : (
				
			)}
		</div>
	);
};

export default Item;
