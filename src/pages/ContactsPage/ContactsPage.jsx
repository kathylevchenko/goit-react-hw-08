import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  return (
    <div>
      <h2>ContactsPage</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
  
export default ContactsPage