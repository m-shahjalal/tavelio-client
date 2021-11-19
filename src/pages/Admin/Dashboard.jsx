import { Col } from 'react-bootstrap';

const Dashboard = () => {
	return (
		<div className='dashboard-bg'>
			<Col className='dashboard-col'>
				<h1 className='display-3 text-white text-center pt-5'>
					<span className='pt-5'>Welcome To DashBoard</span>
				</h1>
				<p className='lead text-white p-4 text-center pt-3'>
					The one thing that your data analytics needs is advanced
					dashboards. Visually appealing advanced dashboards for
					insightful business analytics
				</p>
			</Col>
		</div>
	);
};

export default Dashboard;
