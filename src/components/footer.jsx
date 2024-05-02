export default function Footer() {
    return (
    <footer className="footer">
      <div className="container footer__container">
        <Link to="/about" className="footer__link">About</Link>
        <Link to="/contact" className="footer__link">Contact</Link>
        <Link to="/resume" className="footer__link">Resume</Link>
        <Link to="/projects" className="footer__link">Projects</Link>
      </div>
    </footer>
  );
}
