import './styles.scss';
import HomePage from '../components/HomePage';
import Header from '../components/Commons/Header'
import ProductsContextProvider from '../components/Contexts/ProductsContextProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from 'react-router';
import Error from '../components/Commons/Error';
import About from '../components/Commons/About';
import Cart from '../components/Cart';


function Index() {
  console.log('page render');
  let history = useHistory();
  if (!localStorage.getItem('user')) {
    history.push('/login');
  }

  const onLogOut = () => {
    localStorage.removeItem('user');
    history.push('/login');
  }

  return (
    <Router>
      <div className="App">
        <ProductsContextProvider >
          <Header onLogOut={onLogOut} />
          <div className="App-body">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/products">
                <HomePage />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          </div>
        </ProductsContextProvider>
      </div>
    </Router>
  );
}
 
export default Index;
