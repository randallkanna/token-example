import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxPromise from "redux-promise";
import App from './App';
import Nav from './RollNav';
import ViewToken from './ViewToken'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import reducers from "./reducers";
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/view" component={ViewToken}/>
      </Switch>
    </div>
  </Router>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
