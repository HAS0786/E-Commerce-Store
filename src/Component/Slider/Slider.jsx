import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css"; // Import your custom CSS for styling adjustments

const SimpleSlider = () => {
  useEffect(() => {
    // Add a CSS class to adjust overflow of the slick-list container
    const slickList = document.querySelector(".slick-list");
    if (slickList) {
      slickList.classList.add("slick-list-custom");
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container m-10">
      <Slider {...settings}>
        <div key="slide1">
          <img
            className="w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1684785617153-b57947c147c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlJTIwYWRkc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Slider Image"
          />
        </div>
        <div key="slide2">
          <img
            className="w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1681487933632-c9eda34fcaf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGNvbW1lcmNlJTIwYWRkc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Slider Image"
          />
        </div>
        <div key="slide3">
          <img
            className="w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1661582696844-cf351805c9c7?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8ZSUyMGNvbW1lcmNlJTIwYWRkc3xlbnwwfDB8fHwxNzIwMzA1MTg3fDE&ixlib=rb-4.0.3"
            alt="Slider Image"
          />
        </div>
        <div key="slide4">
          <img
            className="w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1672883552013-506440b2f11c?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGUlMjBjb21tZXJjZSUyMGFkZHN8ZW58MHwwfHx8MTcyMDMwNTE4N3wx&ixlib=rb-4.0.3"
            alt="Slider Image"
          />
        </div>
        <div key="slide5">
          <img
            className="w-full object-cover"
            src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_640.jpg"
            alt="Slider Image"
          />
        </div>
        <div key="slide6">
          <img
            className="w-full object-cover"
            src="https://media.istockphoto.com/id/1560142923/photo/online-shopping-modern-background-glowing-shopping-cart-icon-web3-colours-cgi-3d-render.jpg?s=612x612&w=0&k=20&c=UtUKPEK_F6nH2PboL_hc75D2drqJ0Tc3UwzzEhwvfRA="
            alt="Slider Image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
