import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"

const ContactsPage = () => {
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