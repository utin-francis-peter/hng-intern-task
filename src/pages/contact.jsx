const Contact = () => {
  return (
    <div className="contact__page container">
      <h1 className="title mb-4">Contact Me</h1>
      <p className="title__desc mb-4">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form>
        <div className="first__and__lastname">
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              required
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              required
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            id="email"
            placeholder="yourname@email.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            required
            name="message"
            id="message"
            rows={4}
            placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>
        <div className="d-flex">
          <input className="user__agreement__check" type="checkbox" />
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
