import { useParams } from "react-router-dom";
import UseFetch from "../auth/UseFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = UseFetch("https://fakestoreapi.com/products/" + id);
  console.log(data);
  return (
    <div className="product-details">
      {data && (
        <article>
          <img src={data.image} alt="" />
          <div>
            <p>{data.title}</p>
            <p>{data.price}</p>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
