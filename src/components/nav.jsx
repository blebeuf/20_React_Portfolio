export default function Nav() {
    return (
    <nav className="nav">
      <div className="container nav__container">
        <Link to="/about" className="nav__link">About</Link>
        <Link to="/contact" className="nav__link">Contact</Link>
        <Link to="/resume" className="nav__link">Resume</Link>
        <Link to="/projects" className="nav__link">Projects</Link>
      </div>
    </nav>
  );
}

