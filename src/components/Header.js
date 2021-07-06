import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg p-0 sticky">
          <Link className="navbar-brand" to="/">
            Vishal
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Resgistration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={
                {
                  pathname: "/login",
                  state: {
                    data: "App Page"
                  }
                }
              }>Login</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about/vishal">About</Link>
            </li>
        </ul>
        </nav>
      </div>
    );
}

export default Header;