import { Link } from 'react-router-dom'

const Menu = () => {

  const insta = "https://www.instagram.com/yeju.io/"
  const git = "https://github.com/BboGyoung"
    
  return(
    <header className="bd-header">
        <Link className="title is-3 m-0" to="/" exact>
        <i className="fas fa-home has-text-danger" />
          <span>
            HOME
          </span> 
        </Link>
        <nav className="bd-nav">
        <Link className="bd-nav-item bd-theme-docs is-docs" to="/foods" exact>
        <span className="icon">
        <i className="fa-solid fa-computer" />
        </span>
          <span className="bd-nav-item-name has-text-weight-bold">
          DEV
          </span> 
        </Link>
        <Link className="bd-nav-item bd-theme-expo is-expo" to="/foods" exact>
        <span className="icon">
        <i className="fa-solid fa-bowl-food" />
        </span>
          <span className="bd-nav-item-name has-text-weight-bold">
            FOOD
          </span> 
        </Link>
        <Link className="bd-nav-item bd-theme-sponsor is-sponsor" to="/foods" exact>
        <span className="icon">
        <i className="fa-solid fa-user" />
        </span>
          <span className="bd-nav-item-name has-text-weight-bold">
            GUESTBOOK
          </span> 
        </Link>
        <div className="bd-nav-icons">
        <button className="bd-nav-item bd-theme-github is-github is-icon" onClick={()=>{window.open(git)}}>
        <span className="icon">
        <i class="fa-brands fa-github-alt fa-lg"></i>
        </span>
        </button>
        <button className="bd-nav-item bd-theme-github is-github is-icon" onClick={()=>{window.open(insta)}}>
        <span className="icon insta">
        <i class="fa-brands fa-instagram fa-lg"></i>
        </span>
        </button>
        </div>
        </nav>
      </header>
    );
};

export default Menu;