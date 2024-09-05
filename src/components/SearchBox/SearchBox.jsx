import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
const handleFilter = (e) => {
  const name = e.target.value.trim();
  dispatch(changeFilter(name));
};
    return (
      <div>
        <label  className={css.label}>Find contacts by name</label>
        <input
          className={css.filterInput}
          type="text"
          value={filterValue}
          onChange={handleFilter}
        />
      </div>
    );
  }