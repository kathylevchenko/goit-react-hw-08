import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
// import { selectNameFilter } from "../../redux/filtersSlice";
// import {selectContacts} from '../../redux/contactsSlice';
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice";


export default function ContactList (){
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.formContact}>
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            name={contact.name}
            phone={contact.phone}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
    </div>
  );
}