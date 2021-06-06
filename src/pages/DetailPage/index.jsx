import React, { useEffect } from "react";
import { connect } from "react-redux";
import FilmDetail from "../../components/FilmDetail";
import ShowTimeDetail from "../../components/ShowTimeDetail";
import MovieInfo from "../../components/MovieInfo";
import { actGetMovieDetailApi } from "./modules/action";
import "./DetailPage.scss";
import NavbarHome from "../../components/NavBarHome";
import Footer from "../../components/Footer";
import FilmRating from "../../components/FilmRating";
function DetailPage(props) {
  const { movieDetail } = props;

  useEffect(() => {
    props.fetchMovieDetail(props.match.params.maPhim);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="detailPage">
      <NavbarHome />
      <div className="detailMain ">
        <FilmDetail movieDetail={movieDetail} />
        <ul className="nav nav-tabs" id="myTabDetail" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="thongTin-tab"
              data-toggle="tab"
              href="#thongTin"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Thông tin
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="lichChieu-tab"
              data-toggle="tab"
              href="#lichChieu"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Lịch Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="danhGia-tab"
              data-toggle="tab"
              href="#danhGia"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Đánh giá
            </a>
          </li>
        </ul>
        <div
          className="tab-content"
          style={{
            maxWidth: "940px",
            margin: 'auto'
          }}
        >
          <ShowTimeDetail movieDetail={movieDetail} />
          <MovieInfo movieDetail={movieDetail} />
          <FilmRating />
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.getMovieDetailReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetail: (maPhim) => {
      dispatch(actGetMovieDetailApi(maPhim));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
