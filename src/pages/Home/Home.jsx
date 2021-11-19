import Blogs from '../../components/Blogs/Blogs';
import Customer from '../../components/Customer/Customer';
import Deals from '../../components/Deals/Deals';
import Hero from '../../components/Hero/Hero';
import './Home.css';

const Home = () => {
	return (
		<>
			<Hero />
			<Deals />
			<Customer />
			<Blogs />
		</>
	);
};

export default Home;
