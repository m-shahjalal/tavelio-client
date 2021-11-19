import { Link } from 'react-router-dom';
import './Services.css';

const Card = ({ item }) => {
	const { img, name, description, id } = item;
	return (
		<div className='service-card'>
			<div className='service-card-image'>
				<img src={`http://source.unsplash.com/${img}`} alt='' />
			</div>
			<h6 className='text-xl mt-2 font-semibold'>{name}</h6>
			<p className='mt-2 mb-2 text-blueGray-500'>{description}</p>
			<Link
				className='service-card-btn'
				to={{
					pathname: `/services/${id}`,
					state: { name, description, img },
				}}>
				Details
			</Link>
		</div>
	);
};

export default Card;
