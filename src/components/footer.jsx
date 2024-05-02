import "../components/footer.css";
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link
          to="/about"
          className={currentPage === '/about' ? 'footer__link active' : 'footer__link'}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'footer__link active' : 'footer__link'}
        >
          Contact
        </Link>
        <Link
          to="/resume"
          className={currentPage === '/resume' ? 'footer__link active' : 'footer__link'}
        >
          Resume
        </Link>
        <Link
          to="/projects"
          className={currentPage === '/projects' ? 'footer__link active' : 'footer__link'}
        >
          Projects
        </Link>
      </div>
    </footer>
  );
}
