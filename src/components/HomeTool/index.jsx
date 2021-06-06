import React from "react";
import "./HomeTool.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function HomeTool(props) {
  const { danhSachPhim } = props;
  return (
    <div id="homeTool" className="row d-none d-lg-flex d-xl-flex">
      <div className="selectFilm w30p ">
        <div className="dropdown selectMenu " data-toggle="dropdown">
          Phim
        </div>
        <div className="dropdown-menu menuPhim">
          {danhSachPhim &&
            danhSachPhim.map((phim, i) => {
              return (
                <Link key={i} className="dropdown-item" to='/'>
                  {phim.tenPhim}
                </Link>
              );
            })}
        </div>
      </div>
      <div className="selectCinema smallBlock">
        <div className="dropdown selectMenu " data-toggle="dropdown">
          Rạp
        </div>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/">
            Link 1
          </Link>
        </div>
      </div>
      <div className="selectDate smallBlock">
        <div className="dropdown selectMenu" data-toggle="dropdown">
          Ngày xem
        </div>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/">
            Link 1
          </Link>
        </div>
      </div>
      <div className="selectSession smallBlock">
        <div className="dropdown selectMenu" data-toggle="dropdown">
          Suất chiếu
        </div>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/">
            Link 1
          </Link>
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
const mapStateToProps = (state) => {
  return {
    danhSachPhim: state.listMovieReducer.data,
  };
};
export default connect(mapStateToProps, null)(HomeTool);
