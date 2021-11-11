import emailjs from "emailjs-com";

const send = (data, setMessage, setSubmitting) => {
  const serviceID = "service_r44ncyh";
  const templateID = "fairhurstdev_contact";
  const userID = "user_cRgIAqBiRIW8jKc2eKH8d";

  emailjs
    .send(serviceID, templateID, data, userID)
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
