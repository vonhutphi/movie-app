import React from "react";
import Slider from "react-slick";
import './HomeApp.scss'
import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";

export default function HomeApp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 1000,
  };

  return (
    <div className='col-xs-12 block' id="homeApp">
      <div className="mainHomeApp">
        <div className="row">
          <div className="col-md-6 left">
            <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
            <p className="textLeft">người yêu điện ảnh</p>
            <br />
            <p className="textSmallLeft">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <br />
            <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
            <p className="textAppUnder">
              TIX có hai phiên bản &nbsp;&nbsp;
              <a href="#">IOS</a> &nbsp;&nbsp;&&nbsp;&nbsp;
              <a href="#">Android</a>
            </p>
          </div>
          <div className="col-md-6 right">
            <img
              src={require("./../../assets/images/mobile.png").default}
              alt=""
              className="phone-img"
            />
            <Slider {...settings}>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide1.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide2.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide3.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide4.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide5.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide6.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide7.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide8.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide9.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide10.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide11.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide12.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide13.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide14.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide15.jpg").default}
                  alt=""
                />
              </div>
              <div className="itemSlide">
                <img
                  src={require("./../../assets/images/slide16.jpg").default}
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
