import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configStore';
import DashboardScreen from './modules/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={DashboardScreen} />
          </div>
        </Router>
      </Provider>
    )
  }
}
