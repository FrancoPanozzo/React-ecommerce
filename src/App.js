import HomePage from './pages/homepage';
import ShopPage from './pages/shop-page';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function err404() {
  return <div>404 not found</div>;
}
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/" component={err404} />
      </Switch>
    </>
  );
}

export default App;
