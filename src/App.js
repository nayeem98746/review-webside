import "./App.css"

import { BrowserRouter as Router, a, Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';
import Error from './component/Error/Error';
import Service from './component/Service/Service';
import MenuBar from './component/MenuBar/MenuBar';
import About from "./component/About/About";

function App() {
  
  return (
    <div className="App">
     
    <Router>
    <MenuBar></MenuBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home> 
        </Route>
        <Route path="/service">
        
          <Service></Service>
        </Route>
        <Route  path="/">
          <Home></Home>

        </Route>
        <Route  path="/about">
          <About></About>

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
