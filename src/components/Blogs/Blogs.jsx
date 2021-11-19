import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from '../../utils/axios';
import './Blogs.css';

const Blogs = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		Axios.get('/Blogs')
			.then((res) => setData(res.data))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);
	return (
		<section className='light mt-5'>
			<div className='container mt-5 py-4'>
				<div
					className='h1 text-center my-5 text-dark'
					id='pageHeaderTitle'>
					Explore By Blogs
				</div>
				{loading ? (
					<div className='w-100 mx-auto d-flex justify-content-center align-items-center mt-5'>
						<Spinner animation='border' className='mt-5' />
					</div>
				) : data?.length > 0 ? (
					data.map((item) => (
						<article key={item._id} className='postcard light blue'>
							<Link
								to={{
									pathname: `/posts/${item._id}`,
									state: item,
								}}
								className='postcard__img_link text-decoration-none'
								href='#'>
								<img
									className='postcard__img'
									src={item.image}
									alt='Title'
								/>
							</Link>
							<div className='postcard__text t-dark'>
								<h1 className='postcard__title blue'>
									<Link
										to={{
											pathname: `/posts/${item._id}`,
											state: item,
										}}>
										{item.title}
									</Link>
								</h1>
								<div className='postcard__subtitle small'>
									<span>
										<i className='fas fa-calendar-alt mr-2'></i>
										{item.time}
									</span>
								</div>
								<div className='postcard__bar'></div>
								<div className='postcard__preview-txt'>
									{item.lead}
								</div>
								<ul className='postcard__tagbox'>
									<li className='tag__item'>Blog</li>
									<li className='tag__item'>{item.place}</li>
									<li className='tag__item play blue'>
										<Link
											to={{
												pathname: `/posts/${item._id}`,
												state: item,
											}}>
											Read more...
										</Link>
									</li>
								</ul>
							</div>
						</article>
					))
				) : null}
			</div>
		</section>
	);
};

export default Blogs;
