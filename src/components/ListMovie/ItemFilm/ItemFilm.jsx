import React from "react";
import "./ItemFilm.scss";

export default function ItemFilm(props) {
  const { tenPhim, hinhAnh, danhGia, movie } = props;
  // console.log(movie);
  return (
    <div className="item-film col-xs-3">
      <div className="item-film-detail">
        <div className="film-img">
          <img className="film-image" src={movie.hinhAnh} alt="" />
          <div className="rating">
            {movie.danhGia}
            <div className="rated-star">
              <img
                src={require("./../../../assets/images/star1.png").default}
                alt=""
              />
              <img
                src={require("./../../../assets/images/star1.png").default}
                alt=""
              />
              <img
                src={require("./../../../assets/images/star1.png").default}
                alt=""
              />
              <img
                src={require("./../../../assets/images/star1.png").default}
                alt=""
              />
              <img
                src={require("./../../../assets/images/star1.2.png").default}
                alt=""
              />
            </div>
          </div>
          <div className="play-button">
            <img
              src={require("./../../../assets/images/play-video.png").default}
              alt=""
            />
          </div>
          <div className="overlay"></div>
        </div>

        <div className="film-info">
          <div className="film-title">
            <p className="film-name">
              <span class="rated">P</span>
              {movie.tenPhim}
            </p>
            <p className="length">115 phút</p>
          </div>
          <button id="btnBuyTicket">Mua vé</button>
        </div>
      </div>
    </div>
  );
}
