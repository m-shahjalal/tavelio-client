import './Customer.css';

const Customer = () => {
	return (
		<div className='container'>
			<h1 className='text-center mb-5'>Our Statistics</h1>
			<div className='row'>
				<div className='four col-md-3'>
					<div className='counter-box colored'>
						{' '}
						<i className='fa fa-thumbs-o-up'></i>{' '}
						<span className='counter'>2147</span>
						<p>Happy Customers</p>
					</div>
				</div>
				<div className='four col-md-3'>
					<div className='counter-box'>
						{' '}
						<i className='fa fa-group'></i>{' '}
						<span className='counter'>3275</span>
						<p>Registered Members</p>
					</div>
				</div>
				<div className='four col-md-3'>
					<div className='counter-box'>
						{' '}
						<i className='fa fa-shopping-cart'></i>{' '}
						<span className='counter'>289</span>
						<p>Available Products</p>
					</div>
				</div>
				<div className='four col-md-3'>
					<div className='counter-box'>
						{' '}
						<i className='fa fa-user'></i>{' '}
						<span className='counter'>1563</span>
						<p>Saved Trees</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customer;
