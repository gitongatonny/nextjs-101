"use client";

///Import the Server fn
//import { serverSideFunction } from "@/utils/server-utils";

//Image Slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  <br />;
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/300" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}
