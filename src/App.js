import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <header>
          <h1>BUY SHOES n stuff</h1>
        </header>
        <main>
          <div className="products-list">
            <div className="product">
              <img src="https://gina-leee-portfolio.s3.us-east-2.amazonaws.com/stock-images/shoes-1.jpg" />
              <div className="content">
                <h2>Shoes 1</h2>
                <p>$20.00</p>
                <button>ADD TO CART</button>
              </div>
            </div>
            <div className="product">
              <img src="https://gina-leee-portfolio.s3.us-east-2.amazonaws.com/stock-images/shoes-2.jpg" />
              <div className="content">
                <h2>Shoes 2</h2>
                <p>$30.00</p>
                <button>ADD TO CART</button>
              </div>
            </div>
            <div className="product">
              <img src="https://gina-leee-portfolio.s3.us-east-2.amazonaws.com/stock-images/shoes-3.jpg" />
              <div className="content">
                <h2>Shoes 3</h2>
                <p>$40.00</p>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default hot(module)(App);