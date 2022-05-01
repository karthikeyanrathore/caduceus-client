import Navbar from '../components/Navbar';
import Container from '../components/Container';

const Home = () => {
	return (
		<div className="h-screen">
			<Navbar />
			<Container screen="dashboard" />
		</div>
	);
};

export default Home;
