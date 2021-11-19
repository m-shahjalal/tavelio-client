import Sidebar from './Sidebar';
import './Admin.css';
import { Route, Switch, useRouteMatch } from 'react-router';
import OrderManage from './OrderManage';
import AddProduct from './AddProduct';
import './Admin.css';
import Dashboard from './Dashboard';

const Admin = () => {
	let { path, url } = useRouteMatch();
	return (
		<div className='main-sidebar'>
			<Sidebar url={url} />
			<div style={{ marginLeft: '220px' }}>
				<Switch>
					<Route exact path={path}>
						<Dashboard />
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
