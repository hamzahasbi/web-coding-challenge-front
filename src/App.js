import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Routes from './helpers/routes';
import Account from './components/Account';
import Login from './components/Login';
import Shop from './components/Shop';
import PageLayout from './Layout/PageLayout';
import Error from './Layout/Error';
import {Provider} from 'react-redux';
import store from './Services/store';

function App() {

  const Shops = [
    {
      'key': 1,
      'name': "Avito",
      'long': 43,
      'lat': 44,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
      'image': 'http://placehold.it/700x300',

    },
    {
      'key': 2,
      'name': "Avitos",
      'long': 43,
      'lat': 44,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
      'image': 'http://placehold.it/700x300',

    },
  ];

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
              <PageLayout shops={Shops} name={Routes.APP_SHOPS.name} />
            </Route>
            <Route path={Routes.APP_PREFFERED_SHOPS.path} >
              <PageLayout shops={Shops} name={Routes.APP_PREFFERED_SHOPS.name} />
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
