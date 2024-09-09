import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/slice";


export default function ContactList (){
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.formContact}>
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
    </div>
  );
}