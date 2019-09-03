import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import DashboardScreen from './modules/Dashboard';

const store = configureStore();

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
