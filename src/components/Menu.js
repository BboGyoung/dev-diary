import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";

const Menu = () => {
  const insta = "https://www.instagram.com/yeju.io/";
  const git = "https://github.com/BboGyoung";

  return (
    <header className="bd-header">
      <Link className="title is-3 m-0 is-flex" to="/">
        <i className="fas fa-home has-text-danger" />
        <span className="ml-2">HOME</span>
      </Link>
      <nav className="bd-nav">
        {Nav.map((nav) => {
          return (
            <NavLink
              key={nav.name}
              activeClassName="is-active"
              className={`bd-nav-item ${nav.color}`}
              to={nav.path}
            >
              <span className="icon">
                <i className={`fa-solid ${nav.icon}`} />
              </span>
              <span className="bd-nav-item-name has-text-weight-bold">
                {nav.name}
              </span>
            </NavLink>
          );
        })}
        <div className="bd-nav-icons">
          <button
            className="bd-nav-item bd-theme-github is-github is-icon"
            onClick={() => {
              window.open(git);
            }}
          >
            <span className="icon">
              <i className="fa-brands fa-github-alt fa-lg"></i>
            </span>
          </button>
          <button
            className="bd-nav-item bd-theme-github is-github is-icon"
            onClick={() => {
              window.open(insta);
            }}
          >
            <span className="icon insta">
              <i className="fa-brands fa-instagram fa-lg"></i>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
