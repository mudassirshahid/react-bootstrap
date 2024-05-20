import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Autoplay } from "swiper/modules";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import stripe from "../assets/stripe.png";
import airbnb from "../assets/airbnb.png";
import paypal from "../assets/paypal.png";
import spotify from "../assets/spotify.png";

const Slider = () => {
  return (
    <>
      <div className="container mt-md-0 pt-md-0 mt-5 py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="company text-center">
              <h3 className="trusted-company">Trusted by Companies</h3>
              <p className="company-para">
                Rapidiously morph transparent internal or "organic" sources
                whereas resource sucking e-business. Conveniently innovate
                compelling internal.
              </p>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction:true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={spotify} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slack} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stripe} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazon} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={paypal} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={airbnb} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
