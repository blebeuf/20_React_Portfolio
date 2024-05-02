import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"  // Updated to point to root
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={currentPage === '/projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
