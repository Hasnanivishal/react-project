import logo from './logo.svg';
import './App.css';
import Resgistration from './registration/Registration';
import Register from './formik/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './formik/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route exact path="/register" component={Resgistration}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <Resgistration /> */}
        
    //   </header>
    // </div>
  );
}

export default App;
