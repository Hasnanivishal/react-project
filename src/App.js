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
              <Route exact path="/" component={Register}/>
              <Route path="/register" render={()=> <Resgistration theme="Red"/>}/>
              <Route path="/login" component={Login}/> 
              <Route path="/home" component={Home} />
              <Route path="/about/:name" component={About} />
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

