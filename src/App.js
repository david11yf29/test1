import React from 'react';
import { Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </div>
  )
}

export default App;
