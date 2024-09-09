import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useId } from "react";
import * as Yup from "yup";
// import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(100, "Too Long!"),
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldStyle}>
          <label className={css.label}>
            Username
            <Field   className={css.nameInput} type="text" name="name" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            Email
            <Field  className={css.nameInput} type="email" name="email" />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            Password
            <Field  className={css.nameInput} type="password" name="password" />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>
          <button type="submit" className={css.btn}>
            Register
          </button>
         
        </div>
      </Form>
    </Formik>
  );
}