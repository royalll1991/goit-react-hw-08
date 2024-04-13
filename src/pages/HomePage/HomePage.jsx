import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<>
			<h1>Your Phone Book</h1>
			<p>
            welcome, this site was created to store your contacts and use them conveniently. Log in or <Link to="/register"> register</Link>  to get started!
			</p>
		</>
	);
};

export default HomePage;