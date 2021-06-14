import React, { useState, useEffect } from "react";
import "./HomeTool.scss";
import { Link } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { actGetMovieDetailApi } from "../../pages/DetailPage/modules/action";
import moment from "moment";
function HomeTool(props) {
  const { danhSachPhim, movieDetail } = props;
  const [film, setFilm] = useState(null);
  const [theater, setTheater] = useState(null);
  const [time, setTime] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    film && props.fetchMovieDetail(film.maPhim);
    setTheater(null);
    setTime(null);
    setTheater(null)
    setDay(null)
  }, [film]);
  const renderTheater = () => {
    let theaterArr = [];
    movieDetail &&
      movieDetail.heThongRapChieu.forEach((rap) => {
        // console.log(rap);
        rap.cumRapChieu.forEach((lc) => {
          // console.log(lc.tenCumRap);
          theaterArr.push(lc);
        });
      });
    return theaterArr.map((lc, idx) => {
      return (
        <div className="dropdown-item" key={idx} onClick={() => setTheater(lc)}>
          {lc.tenCumRap}
        </div>
      );
    });
  };
  const renderDay = () => {
    let dates = [];
    const current = moment();
    for (let i = 0; i < 14; i++) {
      dates.push(current.format("YYYY-MM-DD"));
      current.add(1, "day");
    }
    return (
      theater &&
      dates.map((date, ix) => {
        // console.log(date);
        return (
          <div className="dropdown-item" key={ix} onClick={() => setDay(date)}>
            {moment(date).format("DD/MM")} - {moment(date).format("ddd")}
          </div>
        );
      })
    );
  };
  const renderTime = () => {
    return (
      theater &&
      theater.lichChieuPhim.map((tgc, i) => {
        // console.log(
        //   moment(tgc.ngayChieuGioChieu).format("ddd")
        // );
        const startDate = moment(day, "YYYY-MM-DD");
        const endDate = moment(tgc.ngayChieuGioChieu, "YYYY-MM-DD");
        // console.log("start", startDate, " end", endDate);
        // console.log("diff", moment.duration(startDate.diff(endDate)).asDays());
        var duration = endDate.diff(startDate, "days");
        // console.log("dur", duration);
        
        if (duration === 0) {
          return (
            <div key={i} className="dropdown-item" onClick={() => setTime(tgc)}>
              {moment(tgc.ngayChieuGioChieu).format("HH:mm")}
            </div>
          );
        }
      })
    );
  };

  return (
    <div id="homeTool" className="row d-none d-lg-flex d-xl-flex">
      <div className="selectFilm w30p ">
        <div className="dropdown selectMenu " data-toggle="dropdown">
          {film ? film.tenPhim : "Phim"}
        </div>
        <div className="dropdown-menu menuPhim">
          {danhSachPhim &&
            danhSachPhim.map((phim, i) => {
              return (
                <Link
                  onClick={() => setFilm(phim)}
                  key={i}
                  className="dropdown-item"
                  to="/"
                >
                  {phim.tenPhim}
                </Link>
              );
            })}
        </div>
      </div>
      <div className="selectCinema smallBlock">
        <div className="dropdown selectMenu " data-toggle="dropdown">
          {theater ? theater.tenCumRap : "Rạp"}
        </div>
        <div className="dropdown-menu">{renderTheater()}</div>
      </div>
      <div className="selectDate smallBlock">
        <div className="dropdown selectMenu" data-toggle="dropdown">
          {day
            ? `${moment(day).format("DD/MM")} - ${moment(day).format("ddd")}`
            : "Ngày xem"}
        </div>
        <div className="dropdown-menu">{renderDay()}</div>
      </div>
      <div className="selectSession smallBlock">
        <div className="dropdown selectMenu" data-toggle="dropdown">
          {time
            ? `${moment(time.ngayChieuGioChieu).format("HH:mm")}`
            : "Suất chiếu"}
        </div>
        <div className="dropdown-menu">{renderTime()}</div>
      </div>
      <div className="buyTicket smallBlock">
        <button
          id="btnBuy"
          className="btn btn-primary"
          onClick={()=>props.goToBookingPage(time.maLichChieu)}
        >
          Mua vé ngay
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    danhSachPhim: state.listMovieReducer.data,
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeTool);
