import React, { useEffect, useState } from "react";

function Shop({ handleClick }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error status ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        alert("Check your connection");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="mainProduct">
        <div className="mainProductHeader">
          <h1>Welcome to our store</h1>
          <p>All price is in dollars</p>
        </div>
        <div className="allProduct">
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={`Product: ${item.title}`} />
                <div className="productMainDetails">
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p className="cartButton">
                    <button onClick={handleClick}>Add to cart</button>
                  </p>
                </div>
              </div>
            ))}
        </div>
        {}
      </div>
    </>
  );
}

export default Shop;
