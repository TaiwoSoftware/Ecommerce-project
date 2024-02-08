import React from "react";
import { useNavigate } from "react-router-dom";

function Container() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const cart = () => {
    navigate("/cart");
  };

  const shop = () => {
    navigate("/shop");
  };

  const about = () => {
    navigate("/about");
  };

  const search = () => {
    navigate("/search");
  };

  const up = () => {
    navigate("/sign");
  };

  const down = () => {
    navigate("/login");
  };
  return (
    <div className="menuContainer">
      <div className="mainContainer">
        <div className="containerNav">
          <p onClick={home}>Home</p>
          <p onClick={cart}>Cart</p>
          <p onClick={shop}>Shop</p>
          <p onClick={about}>About</p>
          <p onClick={search}>Search</p>
          <div onClick={up}>Sign up</div>
          <div onClick={down}>Log in</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
