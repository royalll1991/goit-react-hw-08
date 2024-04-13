import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import css from './LoginPage.module.css';

const LoginPage = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<div className={css.box}>
			<LoginForm />
			{!isLoggedIn && (
				<p className={css.text}>
					If you are not yet registered, click <Link to="/register">here</Link>{' '}
					please!;)
				</p>
			)}
		</div>
	);
};

export default LoginPage;