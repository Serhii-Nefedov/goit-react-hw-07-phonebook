import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import styles from './ContactsList.module.css';

export default function ContactsList() {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const loading = useSelector(contactsSelectors.isLoading);
  const error = useSelector(contactsSelectors.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.DB_fetchContacts());
  }, [dispatch]);

  async function deleteItem(id) {
    dispatch(contactsOperations.deleteContact(id));
    await dispatch(contactsOperations.DB_deleteContact(id));
  }

  return (
    <>
      <div className={styles.LoadingWrapper}>
        {loading && <div className={styles.Synhron}>server connection...</div>}
        {error && <div className={styles.Synhron}>{error.message}, no conection to server</div>}
      </div>
      <ul className={styles.ContactsList}>
        {filteredContacts &&
          filteredContacts.map(contact => (
            <li className={styles.item} key={contact.id}>
              {contact.name}
              {': '}
              {contact.number}
              <button
                onClick={() => {
                  deleteItem(contact.id);
                }}
              >
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}