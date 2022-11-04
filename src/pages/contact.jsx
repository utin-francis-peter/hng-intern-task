import { useEffect, useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  console.log(input);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    alert(
      `Congratulations ${input.firstName}. I've received your information and would reach out soonest.`
    );
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    const checkBox = document.querySelector(".user__agreement__check");
    const form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", () => {
      checkBox.checked = false;
    });
  });

  return (
    <div className="contact__page container">
      <h1 className="title">Contact Me</h1>
      <p className="title__desc mb-4">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <div className="first__and__lastname">
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              required
              type="text"
              id="first_name"
              name="firstName"
              placeholder="Enter your first name"
              value={input.firstName}
              onChange={(e) => handleChange(e)}
            />
            <p className="error__message">Please enter your first name</p>
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              required
              type="text"
              id="last_name"
              name="lastName"
              placeholder="Enter your last name"
              value={input.lastName}
              onChange={(e) => handleChange(e)}
            />
            <p className="error__message">Please enter your last name</p>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            id="email"
            name="email"
            placeholder="yourname@email.com"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
          <p className="error__message">Please enter your email</p>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            name="message"
            rows={4}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            value={input.message}
            onChange={(e) => handleChange(e)}></textarea>
          <p className="error__message">Please enter your message</p>
        </div>
        <div className="d-flex">
          <input required className="user__agreement__check" type="checkbox" />
          <label className="user__agreement" htmlFor="userAgreement">
            You agree to providing your data to Utin Francis Peter, who may
            contact you.
          </label>
        </div>
        <button className="btn btn-primary mb-3 mt-4" id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
