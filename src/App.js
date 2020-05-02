import React from "react";
import Home from './Components/Home'
import { Route, Link, Switch } from 'react-router-dom';
import PizzaForm from './Components/OrderMenu'
import '../src/App.css'

const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='navLinks'>
          <Link to='/'>Home</Link>
          <Link to ='/order'>Order Here!</Link>
        </div>
        </nav>
        <p>Your favorite imaginary pizza place!</p>
      
      <Switch>
       
        <Route path='/order'>
          <PizzaForm />
        </Route>
        <Route path ='/'>
          <Home />
        </Route>

      </Switch>
        
    </div>
  );
};
export default App;
