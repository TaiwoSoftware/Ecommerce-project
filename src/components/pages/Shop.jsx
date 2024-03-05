import { Link } from "react-router-dom";
import useFetch from '../auth/UseFetch';
function Shop({ handleClick }) {
  const { data } = useFetch("https://fakestoreapi.com/products");

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
                <Link to={`/products/${item.id}`}>
                  <img src={item.image} alt={`Product: ${item.title}`} />
                  <div className="productMainDetails">
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p className="cartButton">
                      <button onClick={handleClick}>Add to cart</button>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
        {}
      </div>
    </>
  );
}

export default Shop;
