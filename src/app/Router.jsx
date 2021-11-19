import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Account from '../pages/Account/Account';
import Admin from '../pages/Admin';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Orders from '../pages/Orders/Orders';
import Post from '../pages/Post/Post';
import Purchase from '../pages/Purchase/Purchase';
import Register from '../pages/Register/Register';
import Private from './PrivateRouter';

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/posts/:id' component={Post} />
				<Private exact path='/purchase'>
					<Purchase />
				</Private>
				<Private exact path='/orders'>
					<Orders />
				</Private>
				<Private path='/dashboard'>
					<Admin />
				</Private>
				<Private path='/account'>
					<Account />
				</Private>
				<Route path='*' component={NotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
