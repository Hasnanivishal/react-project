import logo from './logo.svg';
import './App.css';
import Register from './formik/Register';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './formik/Login';
import Resgistration from './components/Registration';
import Home from './components/Home';
import React from 'react';
import { ThemeContext } from './context/theme';
import About from './components/About';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Router>
      <div className="card m-3">
        <div className="form-row">
            <Link className="form-group col" to="/">Register</Link>
            <Link className="form-group col" to="/register">Resgistration</Link>
            <Link className="form-group col" to={
              {
                pathname: "/login",
                state: {
                  data: "App Page"
                }
              }
            }>Login</Link>
            <Link className="form-group col" to="/home">Home</Link>
            <Link className="form-group col" to="/about/vishal">About</Link>
        </div>
      </div>
        <Switch>
          <Route exact path="/" component={Register}/>
          <Route path="/register" render={()=> <Resgistration theme="Red"/>}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home} />
          <Route path="/about/:name" component={About} />
        </Switch>
        
        </Router>
    </ThemeContext.Provider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <Resgistration /> */}
        
    //   </header>
    // </div>
  );
}

export default App;

