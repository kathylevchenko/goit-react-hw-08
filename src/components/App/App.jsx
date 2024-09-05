import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import css from "./App.module.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage";


export default function App(){
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);



  useEffect(()=>{
    dispatch(fetchContacts());
  },[dispatch])

  return (
    <div className={css.mainContainer}>
      <h1 className={css.headerText}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader/>}
      {isError && <ErrorMessage/>}
      <ContactList/>
    </div>
  );
}
