import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
