import React, { Component } from "react";
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.scss'

import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
// import HomeTool from "./../HomeTool";
import './Carousel.scss'
export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <div className="nowShowing col-xs-12 	d-none d-sm-block">
        <Slider className="carousel" {...settings}>
          <div className="sliderTrailer">
            <a href="#">
              <img
                src={require("./../../assets/images/carousel3.jpg").default}
                alt=""
              />
              <div className="overlay"></div>
              <div className="play-button">
                {/* <i class="fa fa-play"></i> */}
                <img src={require('./../../assets/images/play-video.png').default} alt=""/>
              </div>
            </a>
          </div>
          <div className="sliderTrailer">
            <img
              src={require("./../../assets/images/carousel2.png").default}
              alt=""
              
            />
            <div className="overlay"></div>
          </div>
          <div className="sliderTrailer">
            <img
              src={require("./../../assets/images/carousel1.jpg").default}
              alt=""
     
            />
            <div className="overlay"></div>
          </div>
        </Slider>
        {/* <HomeTool /> */}
      </div>
    );
  }
}
