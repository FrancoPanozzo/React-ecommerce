import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import React, { Component } from 'react';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop-page';
import SignInPage from './pages/sign-in';
import Header from './components/header';

function err404() {
  return <div>404 not found</div>;
}

class App extends Component {
  state = { user: null };

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route path="/" component={err404} />
        </Switch>
      </>
    );
  }
}

export default App;
