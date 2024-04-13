import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';


const SearchBar = () => {
	const dispatch = useDispatch();
	const filterValue = useSelector(selectNameFilter);

	return (
		<div className={css.findBox}>
			<p className={css.text}>Find contacts by name</p>
			<input
				onChange={event => dispatch(changeFilter(event.target.value))}
				className={css.findInput}
				type="text"
				value={filterValue}
				placeholder="Search by name"
			/>
		</div>
	);
};
export default SearchBar;