import React, { Component } from 'react';
import { 
  Route, 
  Link,
  Switch 
} from 'react-router-dom';
import './App.css';

import Public from './components/Public';
import Private from './components/Private';
import SecretRoute from './components/SecretRoute';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div style={{width: 1000, margin: '0 auto'}}>
        <ul>
          <li><Link to='/public'> Public </Link></li>
          <li><Link to='/private'> Private </Link></li>
        </ul>

        <hr/>

        <Switch>
        <Route path='/public' component={ Public } />
          <Route path="/login" component={ Login } />
          <SecretRoute path='/private' component={ Private } />
          <Route render={() => (<div> Sorry, this page does not exist. </div>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
