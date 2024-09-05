import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css"



export default function Contact({ id, name, phone}){
  const dispatch = useDispatch();
  const onDeleteContact=(id)=>{
 dispatch(deleteContact(id));
} 

    return (
        <div className={css.fullList}>
          <div className={css.listItemContainer}>
            <p className={css.spanItem}>
              <FaUser />{name} </p>
            <p className={css.spanItem}> 
              <FaPhone />
              {phone}</p>
          </div>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </div>
      );
    }