import React, { Component } from 'react';
import './App.css';
import MainContent from './containers/MainContent/MainContent';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Favorites from './containers/Favorites/Favorites';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import About from './containers/About/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route path="/" exact component={MainContent} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/shoppingCart" exact component={ShoppingCart} />
        <Route path="/about" exact component={About} />
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
