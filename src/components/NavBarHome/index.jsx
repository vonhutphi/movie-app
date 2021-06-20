import React, { useState } from "react";
import logo from "./../../assets/images/web-logo.png";
import "./NavBarHome.scss";
import { Link } from "react-router-dom";
import { tinhThanh } from "./cityProvince.js";
export default function NavbarHome() {
  const [city, setCity] = useState("Hồ Chí Minh");
  const [logOut, setLogOut] = useState(false);
  return (
    <div className="navbarHeader">
      <Link to="/">
        <img src={logo} alt="" className="web-logo" />
      </Link>

      <ul>
        <li>
          <a href="#listMovie">Lịch chiếu</a>
        </li>
        <li>
          <a href="#showTime">Cụm rạp</a>
        </li>
        <li>
          <a href="#news">Tin tức</a>
        </li>
        <li>
          <a href="#homeApp">Ứng dụng</a>
        </li>
      </ul>
      <div className="nav-right">
        <div
          className="account"
          onMouseEnter={() => setLogOut(true)}
          onMouseLeave={() => setLogOut(false)}
        >
          <Link to={!localStorage.getItem("User") ? "/dang-nhap" : "/"}>
            <p>
              <img
                src={require("./../../assets/images/avatar.png").default}
                alt=""
                className="user-img"
              />

              {localStorage.getItem("User")
                ? JSON.parse(localStorage.getItem("User")).hoTen
                : "Đăng nhập"}
            </p>
          </Link>
          {localStorage.getItem("User") && (
            <div
              className="logOutButton"
              style={{
                display: `${logOut ? "block" : "none"}`,
              }}
            >
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
        <div className="selectLocation dropdown">
          <img
            src={require("./../../assets/images/location-header.png").default}
            alt="location-icon"
            className="location-icon"
          />
          <div className="selectMenu" data-toggle="dropdown">
            {city}
          </div>
          <div
            className="dropdown-menu"
            style={{
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {tinhThanh.map((city, i) => {
              return (
                <Link
                  to="/"
                  key={i}
                  className="dropdown-item"
                  onClick={() => setCity(city.Title)}
                >
                  {city.Title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
