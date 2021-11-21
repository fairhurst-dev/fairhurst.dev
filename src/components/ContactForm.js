import { Button, LinearProgress, Stack, Alert } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import React, { useState } from "react";
import { Box } from "@mui/system";
import send from "../services/Email";

function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <Box sx={{ minHeight: "30em" }}>
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
        {({ submitForm, isSubmitting }) => (
          <Box
            component="form"
            sx={{
              p: 5,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              "& .MuiTextField-root": { m: 2 },
            }}
            noValidate
            autoComplete="off"
          >
            <Form>
              <Field component={TextField} label="Name" name="name" />
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
              <Field
                component={TextField}
                multiline
                rows={6}
                name="message"
                label="Message"
              />

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
