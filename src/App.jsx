import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Search from "./components/pages/Search";
import SignIn from "./components/pages/SignIn";
import LogIn from "./components/LogIn";
import Hamburger from "./components/Hamburger";
import AddToCart from "./components/pages/AddToCart";
function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <main>
      <Router>
        <header>
          <h1>
            <Link to="/">Dresser-Glam</Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <span className="cartContainer">
                <li className="cartNumber">
                  <Link to="/cart">Cart</Link>
                  {cartCount === 0 ? (
                    <div className="isZero">
                      <AddToCart cartCount={cartCount} />
                    </div>
                  ) : (
                    <div className="isOne">
                      <AddToCart cartCount={cartCount} />
                    </div>
                  )}
                </li>
              </span>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
          <div className="buttons">
            <Link to="/sign">
              <button>Sign up</button>
            </Link>
            <Link to="/login">
              <button>Log in</button>
            </Link>
          </div>
          <Hamburger />
        </header>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                handleClick={(e) => {
                  console.log(e.target);
                  setCartCount(cartCount + 1);
                }}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
