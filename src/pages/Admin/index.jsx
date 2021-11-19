import Sidebar from './Sidebar';
import './Admin.css';
import { Route, Switch, useRouteMatch } from 'react-router';
import OrderManage from './OrderManage';
import AddProduct from './AddProduct';

const Admin = () => {
	let { path, url } = useRouteMatch();
	return (
		<div className='main-sidebar'>
			<Sidebar url={url} />
			<div style={{ marginLeft: '220px' }}>
				<Switch>
					<Route exact path={path}>
						<h1 className='display-3 text-center pt-5'>
							Welcome To DashBoard
						</h1>
					</Route>
					<Route exact path={`${path}/manage-orders`}>
						<OrderManage />
					</Route>
					<Route exact path={`${path}/add-deals`}>
						<AddProduct />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default Admin;
