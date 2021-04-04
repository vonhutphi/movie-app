import React from "react";
import logo from "./../../assets/images/web-logo.png";
import './NavBarHome.scss'
export default function NavbarHome() {
  return (
    <div className="navbarHeader">
      <img src={logo} alt="" className="web-logo" />
      <ul>
        <li>
          <a href="#listMovie">Lịch chiếu</a>
        </li>
        <li>
          <a href="#">Cụm rạp</a>
        </li>
        <li>
          <a href="#">Tin tức</a>
        </li>
        <li>
          <a href="#">Ứng dụng</a>
        </li>
      </ul>
      <div className="nav-right">
        <div className="account">
          <a href="#">
            <p>
              <img
                src={require("./../../assets/images/avatar.png").default}
                alt=""
                className="user-img"
              />
              Đăng Nhập
            </p>
          </a>
        </div>
        <div className="selectLocation dropdown">
          <img
            src={require("./../../assets/images/location-header.png").default}
            alt="location-icon"
            className="location-icon"
          />
          <div className="selectMenu" data-toggle="dropdown">
            Hồ Chí Minh
          </div>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Link 1
            </a>
            <a className="dropdown-item" href="#">
              Link 2
            </a>
            <a className="dropdown-item" href="#">
              Link 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
