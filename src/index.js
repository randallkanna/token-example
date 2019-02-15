import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
import './index.css';
import App from './App';
import Nav from './RollNav';
import ViewToken from './ViewToken'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer)

ReactDOM.render(
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/view" component={ViewToken}/>
      </Switch>
    </div>
  </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
