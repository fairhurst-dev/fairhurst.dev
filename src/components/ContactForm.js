import { Button, LinearProgress, Stack, Alert } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import React, { useState } from "react";
import { Box } from "@mui/system";
import send from "../services/Email";

function ContactForm() {
  const [message, setMessage] = useState("");

  const formStyle = {
    m: 2,
    fontWeight: "600",
  };

  return (
    <Box sx={{ minHeight: "30em", display: "flex" }}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.message) {
            errors.message = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          send(values, setMessage, setSubmitting);
          resetForm();
        }}
      >
        {({ submitForm, isSubmitting, values }) => (
          <Box
            sx={{ display: "flex", alignItems: "center", fontFamily: "varta" }}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Form>
              {console.log("values are ", values)}
              <Box
                sx={{
                  p: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Field
                  sx={formStyle}
                  component={TextField}
                  label="Name"
                  name="name"
                  color="secondary"
                  variant="filled"
                />
                <Field
                  sx={formStyle}
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  variant="filled"
                  color="secondary"
                />
                <Field
                  sx={formStyle}
                  component={TextField}
                  multiline
                  rows={6}
                  variant="filled"
                  name="message"
                  label="Message"
                  color="secondary"
                />
              </Box>

              <br />

              {isSubmitting && <LinearProgress />}
              <br />
              <Stack
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                sx={{ m: 3 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  size="large"
                  sx={{ fontWeight: "600" }}
                >
                  Submit
                </Button>
                {message && (
                  <Alert severity={message.severity}>{message.text}</Alert>
                )}
              </Stack>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
}

export default ContactForm;
