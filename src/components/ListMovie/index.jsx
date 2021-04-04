import React, { useEffect } from "react";
import ItemFilm from "./ItemFilm/ItemFilm";
import { connect } from "react-redux";
import { actListMovieApi } from "./modules/action";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";
// import Loader from "../Loader";
import './ListMovie.scss'

function ListMovie(props) {
  // console.log(props);
  useEffect(() => {
    return props.fetchListMovie();
  }, []);
  const renderHTML = () => {
    const { loading, data } = props;
    // if (loading) return <Loader />;
    return (
      data &&
      data.map((item) => {
        return (
          <ItemFilm
            key={item.maPhim}
            movie={item}
          />
        );
      })
    );
  };
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
  };
  return (
    <div id="listMovie" className="col-xs-12">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="dangChieu-tab"
            data-toggle="tab"
            href="#dangChieu"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Đang chiếu
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="sapChieu-tab"
            data-toggle="tab"
            href="#sapChieu"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Sắp chiếu
          </a>
        </li>
      </ul>
      <div className="tab-content" id="listFilm">
        <div
          className="tab-pane fade show active "
          id="dangChieu"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Slider {...settings}>
            {renderHTML()}
          </Slider>
        </div>
        <div
          className="tab-pane fade row"
          id="sapChieu"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Slider {...settings}>
            {renderHTML()}
          </Slider>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListMovie: () => {
      dispatch(actListMovieApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
