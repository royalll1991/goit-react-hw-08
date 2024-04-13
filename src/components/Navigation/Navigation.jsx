import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<nav>
			<ul className={css.navList}>
				<li>
					<NavLink className={css.navLink} to="/">Home</NavLink>
				</li>
				{isLoggedIn && (
					<li>
						<NavLink className={css.navLink} to="/contacts">Contacts</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};
export default Navigation;