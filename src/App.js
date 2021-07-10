import './App.css';
import Register from './formik/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './formik/Login';
import Resgistration from './components/Registration';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';
import { ThemeContext } from './context/theme';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import AuthorizedLink from './routing/AuthorizedLink';
import UnAuthorizedLink from './routing/UnAuthorizedLink';
import TodoList from './components/TodoList';

function App() {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) dispatch({ type: "USER", payload: user });
  },[]);

  return (
    <ThemeContext.Provider value="dark">
      <Router>
      <div className="wrapper">
        <Header />
        <div className="content-box">
          <Switch>
              <UnAuthorizedLink exact path="/" component={Register}></UnAuthorizedLink>
              <UnAuthorizedLink path="/register" component={Resgistration}></UnAuthorizedLink>
              <UnAuthorizedLink path="/login" component={Login} ></UnAuthorizedLink>
              <AuthorizedLink path="/home" component={Home} ></AuthorizedLink>
              <AuthorizedLink path="/about/:name" component={About}></AuthorizedLink>
              <AuthorizedLink path="/todo" component={TodoList}></AuthorizedLink>
          </Switch>
          <Footer />
        </div>
      </div>
          
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

