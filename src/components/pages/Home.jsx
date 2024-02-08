import StyledDiv from "../StyledDiv";
import hangedCloths from "../images/hangedCloths.jpg";
import designer from "../images/designer.jpg";
import ImageLayout from "../ImageLayout";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <StyledDiv />
      <hr className="smallHr" />
      <div className="productContainer">
        <div className="gallery">
          <h1>Gallery</h1>
          <p>This is just a little part to see the rest visit the shop page</p>
        </div>
        <div className="firstBatch">
          <ImageLayout
            src={hangedCloths}
            alt="Collection of clothes"
            tag="$100 for each"
            name="Jackson Shirts"
            late="new"
          />
          <div className="comma">
            <ImageLayout
              src={hangedCloths}
              alt="Collection of clothes"
              tag="$100 for each"
              name="Jackson Shirts"
              late="new"
            />
          </div>
          <div className="semiColon">
            <ImageLayout
              src={hangedCloths}
              alt="Collection of clothes"
              tag="$100 for each"
              name="Jackson Shirts"
              late="new"
            />
          </div>
        </div>
        <div className="SecondBatch">
          <ImageLayout
            src={designer}
            alt="Collection of clothes"
            tag="$200 "
            name="Designer Shirts"
            late="old"
          />
          <div className="clothDesigner">
            <ImageLayout
              src={designer}
              alt="Collection of clothes"
              tag="$200"
              name="Designer Shirts"
              late="old"
            />
          </div>
        </div>
        <div className="visit">
          <p>
            <Link to="/shop">
              <button>Visit store</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
