import emailjs from "@emailjs/browser";

const send = (data, setMessage, setSubmitting) => {
  const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  emailjs
    .send(serviceID, templateID, data, {
      publicKey: publicKey,
    })
    .then(
      (response) => {
        setMessage({
          text: "Your message has successfully been sent",
          severity: "success",
        });
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        setMessage({
          text: "Error, your message can't be sent.",
          severity: "error",
        });
        console.log("FAILED...", err);
      }
    )
    .finally(setSubmitting(false));
};

export default send;
