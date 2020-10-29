import HomePage from './pages/homepage';
import ShopPage from './pages/shop-page';
import SignInPage from './pages/sign-in';
import Header from './components/header';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function err404() {
  return <div>404 not found</div>;
}
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route path="/" component={err404} />
      </Switch>
    </>
  );
}

export default App;
