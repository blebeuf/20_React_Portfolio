export default function Contact() {
    return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <a href="mailto:bryanlebeuf@gmail.com" target="_blank" className="">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/bryanlebeuf"
              target="_blank"
              className=""
            >
              Connect with me
            </a>
          </article>
          <article className="contact__option">
            <h4>GitHub</h4>
            <a
              href="https://www.github.com/bryanlebeuf"
              target="_blank"
              className=""
            >
              Browse my projects
            </a>
          </article>
        </div>
        
        {/* START CONTACT FORM*/}
        <form>
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
          <button type="submit" id="contact__btn" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

