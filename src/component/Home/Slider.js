import Carousel from "react-bootstrap/Carousel";
import bg1 from "./HomeImages/bg1.jpg";
import bg2 from "./HomeImages/bg4.jpg";
import bg3 from "./HomeImages/bg7.jpg";
import bg4 from "./HomeImages/bg3.jpg";
import bg5 from "./HomeImages/bg6.jpg";
import SliderItem from "./sliderItem";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <SliderItem srcImg={bg1} altTitle="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <SliderItem srcImg={bg2} altTitle="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <SliderItem srcImg={bg3} altTitle="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <SliderItem srcImg={bg4} altTitle="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <SliderItem srcImg={bg5} altTitle="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
