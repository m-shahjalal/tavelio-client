import { useEffect, useState } from 'react';
import Card from './Card';
import './Services.css';

const Services = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		fetch('/services.json')
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((e) => console.error(e));
	}, []);
	return (
		<section className='home-service'>
			<div className='home-service-container'>
				<h1 className='service-title'>
					Comprehensive Eye Care Services
				</h1>
				<p className='service-subtitle'>
					Our facilities are equipped with state-of-the-art ophthalmic
					technology to provide the most effective treatment.
				</p>
			</div>
			<div className='service-card-container'>
				{data &&
					data?.map((item) => <Card key={item.id} item={item} />)}
			</div>
		</section>
	);
};

export default Services;
