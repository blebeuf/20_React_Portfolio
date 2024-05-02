import "../components/footer.css";
import { useLocation } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a href="https://github.com/yourusername"
          className="footer__link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername"
          className="footer__link">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://stackoverflow.com/users/youruserid"
          className="footer__link">
          <i className="fab fa-stack-overflow"></i>
        </a>
        <a href="https://itch.io/profile/yourusername"
          className="footer__link">
          <i className="fab fa-itch-io"></i>
        </a>
        <a href="https://soundcloud.com/bryan-lebeuf"
          className="footer__link">
          <i className="fab fa-soundcloud"></i>
        </a>
      </div>
    </footer>
  );
}
