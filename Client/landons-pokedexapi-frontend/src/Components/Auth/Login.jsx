import React, { useState } from "react";
//form imports
import { Formik } from "formik";
import * as Yup from "yup";
//style imports
import { Box } from "@chakra-ui/core";
import {
  CustomForm,
  CustomLabel,
  CustomInput,
  FormGroup,
  SubmitButton,
} from "./Styles";
//component imports
import Navbar from "../Navbar/Navbar";
import Auth from "../../Auth";

// Use Yup to set up the rules for the validation
const validationScema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Must enter an email"),
  password: Yup.string()
    .min(4, "All passwords are at least 4 characters long")
    .required("Must have a password"),
});

/** The Login Component That uses Formik to handle the form*/
export default function Login(props) {
  const [message, setMessage] = useState(Auth.getMessage());

  return (
    <div>
      <Navbar />
      <div>
        <Box fontSize="40px" my="40px" textAlign="center">
          Login to Pokedex
          <Box fontSize="20px" my="10px" color="Orange">
            {message}
          </Box>
        </Box>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationScema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            const user = {
              email: values.email,
              password: values.password,
            };
            // after logging in, push to the pokedex page
            Auth.login(() => {
              props.history.push("/pokedex");
            }, user);
            console.log(Auth.getMessage());
            setMessage(Auth.getMessage());
            resetForm();
            setSubmitting(false);
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
                <CustomLabel htmlFor="email">Email</CustomLabel>
                <CustomInput
                  className="form-control"
                  type="text"
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
              <SubmitButton type="submit" disabled={isSubmitting}>
                Login
              </SubmitButton>
            </CustomForm>
          )}
        </Formik>
      </div>
    </div>
  );
}

/** Returns my error messages */
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
