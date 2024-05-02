import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        {/* <h5>Get in Touch</h5>
        <h2>Contact Me</h2> */}
        <div className="contact__content">
          <div className="contact__options">
            <article className="contact__option">
              <span className="contact__icon">📧</span>
              <h4>Email</h4>
              <a href="mailto:bryanlebeuf@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <span className="contact__icon">🔗</span>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/bryanlebeuf" target="_blank">
                Connect with me
              </a>
            </article>
            <article className="contact__option">
              <span className="contact__icon">💻</span>
              <h4>GitHub</h4>
              <a href="https://www.github.com/blebeuf" target="_blank">
                Browse my projects
              </a>
            </article>
          </div>
          <form className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Type your message here"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
