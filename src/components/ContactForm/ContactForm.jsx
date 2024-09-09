import { Formik, ErrorMessage, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import toast from "react-hot-toast";



export default function ContactForm (){
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
    const contactsSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      number: Yup.string()
        .min(6, "Too Short!")
        .max(12, "Too Long!")
        .required("Required"),
    });
  

const handleSubmit = (values,actions) => {
  const { name, number } = values;
  dispatch(addContact({ name, number }))
    .unwrap()
    .then(() => {
      toast.success("Contact added successfully🎉");
    })
    .catch(() => {
      toast.error("Contact add failed!");
    });
    actions.resetForm();
};

    return (
      <Formik
       initialValues={initialValues}
        className={css.contactForm}
        validationSchema={contactsSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.contactForm}>
          <div className={css.inputContainer}>
            <label >Name</label>
            <Field
              className={css.nameInput}
              type="text"
              name="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label>Number</label>
            <Field
              className={css.nameInput}
              type="tel"
              name="number"
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <button className={css.buttonSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }