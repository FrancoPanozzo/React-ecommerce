import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from './redux/user/user.actions';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop-page';
import SignInPage from './pages/sign-in';
import CheckoutPage from './pages/checkout';
import Header from './components/header';
import { selectUser } from './redux/user/user.selectors';

function err404() {
  return <div>404 not found</div>;
}

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);

        userRef.onSnapshot((snap) => {
          setUser({
            id: snap.id,
            ...snap.data(),
          });
        });
      } else {
        setUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pay" component={CheckoutPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.user ? <Redirect to="/" /> : <SignInPage />
            }
          />
          <Route path="/" component={err404} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: selectUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
