import '../styles/Header.css';

function Header() {
  return (
    <header className="app-header">
      <h1 className="logo">
        Dev <span className="logo-accent">Insights</span>
      </h1>
      <nav>
        <a className="nav-link" href="#new-post">
          New Post
        </a>
      </nav>
    </header>
  );
}

export default Header;
