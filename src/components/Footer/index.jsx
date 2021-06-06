import React from "react";
import './Footer.scss'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div id="footer">
      <div className="footerMain">
        <div className="top row">
          <div className="tix col-sm-4">
            <p className="title">TIX</p>
            <div className="row">
              <div className="col-sm-6 col-6 noPaddingLeft">
                <Link to='/'>FAQ</Link>
                <Link to='/'>Brand Guidelines</Link>
              </div>
              <div className="col-sm-6 col-6 noPaddingLeft">
                <Link to='/'>Thỏa thuận sử dụng</Link>
                <Link to='/'>Chính sách bảo mật</Link>
              </div>
            </div>
          </div>
          <div className="partners col-sm-4">
            <p className="title">ĐỐI TÁC</p>
            <div className="row col-12 col-sm-12 linePartner noPaddingLeft">
              <Link to='/'>
                <img
                  src={require("./../../assets/images/cgv.png").default}
                  alt=""
                  style={{ backgroundColor: "#fff" }}
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/bhd.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/galaxycine.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/cinestar.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/rap-lotte.png").default}
                  alt=""
                />
              </Link>
            </div>
            <div className="row col-12 col-sm-12 linePartner noPaddingLeft">
              <Link to='/'>
                <img
                  src={require("./../../assets/images/megags.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/bt.jpg").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={
                    require("./../../assets/images/dongdacinema.png").default
                  }
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/TOUCH.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/cnx.jpg").default}
                  alt=""
                />
              </Link>
            </div>
            <div className="row col-12 col-sm-12 linePartner noPaddingLeft">
              <Link to='/'>
                <img
                  src={require("./../../assets/images/STARLIGHT.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/dcine.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={
                    require("./../../assets/images/zalopay_icon.png").default
                  }
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/payoo.jpg").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/VCB.png").default}
                  alt=""
                />
              </Link>
            </div>
            <div className="row col-12 col-sm-12 linePartner noPaddingLeft">
              <Link to='/'>
                <img
                  src={require("./../../assets/images/AGRIBANK.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/VIETTINBANK.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/IVB.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/123go.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/laban.png").default}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="social-app col-sm-4 row">
            <div className="col-sm-6 text-center">
              <p className="title">MOBILE APP</p>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/apple-logo.png").default}
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={
                    require("./../../assets/images/android-logo.png").default
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="col-sm-6 text-center">
              <p className="title">SOCIAL</p>
              <Link to='/'>
                <img
                  src={
                    require("./../../assets/images/facebook-logo.png").default
                  }
                  alt=""
                />
              </Link>
              <Link to='/'>
                <img
                  src={require("./../../assets/images/zalo-logo.png").default}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="bottom row">
          <div className="zion col-sm-1">
            <img
              src={require("./../../assets/images/zion-logo.jpg").default}
              alt=""
            />
          </div>
          <div className="contact col-sm-9">
            <p className="title">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>
              Email: <span> support@tix.vn</span>
            </p>
          </div>
          <div className="certified col-sm-2">
          <img
              src={require("./../../assets/images/d1e6bd560daa9e20131ea8a0f62e87f8.png").default}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
