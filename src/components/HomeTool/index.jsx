import React from "react";
import './HomeTool.scss'
export default function HomeTool() {
  return (
    <div id="homeTool" className="row d-none d-lg-flex d-xl-flex">
      <div className="selectFilm w30p ">
        <div className="dropdown selectMenu " data-toggle="dropdown">
          Phim  
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
      <div className="selectCinema smallBlock">
        <div className="dropdown selectMenu " data-toggle="dropdown">
          Rạp
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
      <div className="selectDate smallBlock">
        <div className="dropdown selectMenu" data-toggle="dropdown">
          Ngày xem
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
      <div className="selectSession smallBlock">
        <div className="dropdown selectMenu" data-toggle="dropdown">
          Suất chiếu
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
      <div className="buyTicket smallBlock">
        <button id="btnBuy" className="btn btn-primary">
          Mua vé ngay
        </button>
      </div>
    </div>
  );
}
