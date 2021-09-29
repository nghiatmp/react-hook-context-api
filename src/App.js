import './App.scss';
import Page from './pages';
import Login from './components/Login';
import MemoHook from './components/MemoHook';
import Pure from './components/Pure';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  console.log('app render');
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/memo-hook">
            <MemoHook />
          </Route>
          <Route path="/pure">
            <Pure />
          </Route>
          <Route>
            <Page />
          </Route>
        </Switch>
    </Router>
  );
}
 
export default App;
