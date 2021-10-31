import { Button, LinearProgress, Stack } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import React from "react";
import { Box } from "@mui/system";

function ContactForm() {
  return (
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values);
        }, 1000);
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
            <Stack justifyContent="center" alignItems="center" direction="row">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                size="large"
              >
                Submit
              </Button>
            </Stack>
          </Form>
        </Box>
      )}
    </Formik>
  );
}

export default ContactForm;
