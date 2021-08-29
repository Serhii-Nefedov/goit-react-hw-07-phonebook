import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import styles from './SearchContacts.module.css';

export default function SearchContacts() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchContacts}>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={e =>
          dispatch(contactsOperations.filterContacts(e.target.value))
        }
      />
    </label>
  );
}