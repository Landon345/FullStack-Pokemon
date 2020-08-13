import React from "react";
//form imports
import { Formik } from "formik";
import * as Yup from "yup";
//style imports
import {
  CustomForm,
  CustomLabel,
  CustomInput,
  FormGroup,
  SubmitButton,
} from "./Styles";
import { Box } from "@chakra-ui/core";
//component imports
import Navbar from "../Navbar/Navbar";
import Auth from "../../Auth";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(200, "Must be shorter than 100 characters")
    .required("Must enter a name"),
  password: Yup.string()
    .min(4, "Must be 4 characters in length")
    .max(200, "Must be shorter than 200")
    .required("Must have password"),
  // makes sure that the Password and the Password Confirmation match.
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Must have password Confirmation"),
});
/** A register component using Formik and Yup for validation */
export default function Register(props) {
  return (
    <Box>
      <Navbar />

      <Box fontSize="40px" my="40px" textAlign="center">
        Register for a pokedex
      </Box>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const newUser = {
            email: values.email,
            name: values.name,
            password: values.password,
          };

          Auth.register(() => {
            props.history.push("/pokedex");
          }, newUser);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <CustomForm onSubmit={handleSubmit}>
            <FormGroup>
              <CustomLabel htmlFor="name">Name</CustomLabel>
              <CustomInput
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <Error touched={touched.name} message={errors.name} />
            </FormGroup>
            <FormGroup>
              <CustomLabel htmlFor="email">Email</CustomLabel>
              <CustomInput
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Error touched={touched.email} message={errors.email} />
            </FormGroup>
            <FormGroup>
              <CustomLabel htmlFor="password">Password</CustomLabel>
              <CustomInput
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Error touched={touched.password} message={errors.password} />
            </FormGroup>
            <FormGroup>
              <CustomLabel htmlFor="passwordConfirmation">
                Password Confirmation
              </CustomLabel>
              <CustomInput
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
              />
              <Error
                touched={touched.passwordConfirmation}
                message={errors.passwordConfirmation}
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Register
            </SubmitButton>
          </CustomForm>
        )}
      </Formik>
    </Box>
  );
}

/** My custom error messages if Yup validation fails. */
function Error({ touched, message }) {
  const errorMessage = () => {
    if (!touched) {
      return <div style={{ color: "tomato", textAlign: "left" }}>&nbsp;</div>;
    } else if (message) {
      return (
        <div style={{ color: "tomato", textAlign: "left" }}>{message}</div>
      );
    } else {
      return <div style={{ color: "green", textAlign: "left" }}>all good</div>;
    }
  };

  return <Box mb="40px">{errorMessage()}</Box>;
}
