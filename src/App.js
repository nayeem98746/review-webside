import logo from './logo.svg';
import "./App.css"
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import AllItems from './component/AllItems/AllItems';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';
import Error from './component/Error/Error';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home> 
        </Route>
        <Route path="/service">
          

        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
