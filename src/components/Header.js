import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
      setUser(localStorage.getItem('userInfo'));
    }, [location])

    const logOut = () => {
      dispatch({
        type: 'CLEAR'
      });
    }

    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg p-0 sticky">
          <Link className="navbar-brand" to="/">
            Vishal
          </Link>
          <ul className="navbar-nav ml-auto">
            {
              user == null && <>
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
              </>
            }
            {
              user != null && <>
                    <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about/vishal">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/todo">TODO List</Link>
                    </li>
                    <button onClick={logOut}>Log Out</button>
              </>
            }
      
        </ul>
        </nav>
      </div>
    );
}

export default Header;