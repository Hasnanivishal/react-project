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
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
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

