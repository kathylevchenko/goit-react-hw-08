import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css"
import toast from "react-hot-toast";



export default function Contact({ id, name, number}){
  const dispatch = useDispatch();
  const onDeleteContact=(id)=>{
dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
  };
    return (
        <div className={css.fullList}>
          <div className={css.listItemContainer}>
            <p className={css.spanItem}>
              <FaUser />{name} </p>
            <p className={css.spanItem}> 
              <FaPhone />
              {number}</p>
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