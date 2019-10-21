import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Routes from './helpers/routes';
import Account from './components/Account';
import Login from './components/Login';
import PageLayout from './Layout/PageLayout';
import Error from './Layout/Error';
import {Provider} from 'react-redux';
import store from './Services/store';

function App() {


  return (

    <Provider store={store}>
      <Router>
        <div className="container-fluid">
          <Switch>

            <Route exact path={Routes.APP_LOGIN.path} >
              <Login/>
            </Route>

            <Route path={Routes.APP_ACCOUNT.path}>
              <Account/>
            </Route>

            <Route path={Routes.APP_SHOPS.path} >
              <PageLayout name={Routes.APP_SHOPS.name} />
            </Route>

            <Route path={Routes.APP_PREFFERED_SHOPS.path} >
              <PageLayout name={Routes.APP_PREFFERED_SHOPS.name} />
            </Route>
            
            <Route component={Error} >
            </Route>
            
        </Switch>
        </div>
      </Router>
    </Provider>    
  );

}

export default App;
