import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function SliderItem({ srcImg, altTitle }) {
  return (
    <>
      <img className="slide-img img-fluid" src={srcImg} alt={altTitle} />
      <Carousel.Caption className="slid-caption">
        <h3>Electronics Store</h3>
        <p>We have all kinds of electronics and mobile devices.</p>
        <Link variant="" className="btn" to="/Categories">
          Shop Now
        </Link>
      </Carousel.Caption>
    </>
  );
}

export default SliderItem;
