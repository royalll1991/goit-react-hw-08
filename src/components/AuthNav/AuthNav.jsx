import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
	return (
		<ul className={css.authNav}>
			<li>
				<NavLink className={css.authLink} to="/register">Register</NavLink>
			</li>
			<li>
				<NavLink className={css.authLink} to="/login">Login</NavLink>
			</li>
		</ul>
	);
};
export default AuthNav;