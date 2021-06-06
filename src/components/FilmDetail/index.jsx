import React from "react";
import moment from "moment";
import "./FilmDetail.scss";

export default function FilmDetail({ movieDetail }) {
  return (
    <div className="phimInfo">
      <div className="thongTinChiTietPhim row">
        <div className="filmDetailImage col-sm-3">
          <img src={movieDetail && movieDetail.hinhAnh} alt="" />
        </div>
        <div className="filmDetailInfo col-sm-5">
          <p className="filmDate">
            {movieDetail &&
              moment(
                new Date(movieDetail.ngayKhoiChieu).toLocaleDateString()
              ).format("DD.MM.YYYY")}
          </p>
          <p className="filmTitle">
            <span className="rated">P</span>
            {movieDetail && movieDetail.tenPhim}
          </p>
          <p className="filmLength">100 phút - 6.7 IMDb - 2D/Digital</p>
          <button className="btnMuaVe">Mua vé</button>
        </div>
      </div>
      <div className="filmBg">
        <div
          className="phimBg"
          // style={{
          //   backgroundImage: `url(${movieDetail && movieDetail.hinhAnh})`,
          // }}
        >
          <img src={movieDetail && movieDetail.hinhAnh} alt="" />
        </div>
        <div className="phimBgLayer"></div>
      </div>
    </div>
  );
}
