import React, { useEffect, useState } from "react";

function Shop() {
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
        console.log(error);
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
                <img src={item.image} alt="product image" />
                <div className="productMainDetails">
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
                {/* <p>{item.description}</p> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
