import React, { useEffect } from "react";
import "./ShowTime.scss";
import { Tabs } from "antd";
import { connect } from "react-redux";
import { getTheaterSystemListAction } from "./modules/action";
import moment from "moment";
import { Link } from "react-router-dom";
const { TabPane } = Tabs;
function ShowTime(props) {
  const { theaterSystemArray } = props;
  useEffect(() => {
    props.fetchTheaterSystemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const checkLichchieu = (phim) => {
    let mangLC = [];
    // if(phim.MaPhim === maPhim){
    phim.lstLichChieuTheoPhim.forEach((tgc) => {
      let thoiGian = new Date(tgc.ngayChieuGioChieu);
      // console.log('thoiGian',thoiGian)
      let thoiGianChieu = moment(thoiGian).format("DD.MM.YYYY");
      var now = moment(new Date().toLocaleDateString()).format("DD.MM.YYYY"); //todays date
      // console.log("now", now);
      var startDate = moment(thoiGianChieu, "DD.MM.YYYY");
      // console.log("startDate", startDate);
      var endDate = moment(now, "DD.MM.YYYY");
      // console.log("endDate", endDate);
      var duration = endDate.diff(startDate, "days");
      // console.log('duration',duration)
      if (duration === 0) {
        mangLC.push(duration);
      }
    });
    // console.log("mangLC ", mangLC);
    if (mangLC.length > 0) {
      return true;
    }
    return false;
  };
  const convertTime12To24 = (time12) => {
    let [time, modifier] = time12.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12" || hours === "24") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };
  const calculateEndTime = (time, minutes) => {
    let [startHour, startMin] = time.split(":");
    let hour;
    if (minutes > 60) {
      hour = Math.ceil(minutes / 60) + parseInt(startHour, 10);
    } else {
      hour = Math.floor(minutes / 60) + parseInt(startHour, 10);
    }
    if (hour >= 24) {
      hour = hour - 24;
    }
    let minute = (minutes % 60) + parseInt(startMin, 10);
    if (minute > 59) {
      minute = minute - 59;
    }
    return `${hour < 10 ? `0${hour}` : hour}:${minute}`;
  };
  const renderShowTime = () => {
    return (
      theaterSystemArray &&
      theaterSystemArray.map((theater, index) => {
        return (
          <TabPane
            style={{ outline: "none" }}
            tab={<img className="showTimeImg" src={theater.logo} alt="" />}
            key={index}
          >
            <Tabs tabPosition="left" defaultActiveKey="0">
              {theater.cumRap &&
                theater.cumRap.map((rap, index2) => {
                  return (
                    <TabPane
                      tab={
                        <div className="cineAddress text-left">
                          <p className="cineName m-0">{rap.tenCumRap}</p>
                          <p className="address m-0">{rap.diaChi}</p>
                          <p className="detail m-0">[chi tiết]</p>
                        </div>
                      }
                      key={index2}
                    >
                      <div className="showTimeContent">
                        {theater.mangLichChieu &&
                          theater.mangLichChieu[0].lstCumRap.map((lc) => {
                            if (lc.maCumRap === rap.maCumRap) {
                              return (
                                lc.danhSachPhim &&
                                lc.danhSachPhim.map((phim, index4) => {
                                  // console.log("phim", phim);

                                  if (checkLichchieu(phim)) {
                                    return (
                                      <div
                                        className="showTimeInfo"
                                        key={index4}
                                      >
                                        <div
                                          className="movieInfo"
                                          data-toggle="collapse"
                                          data-target={`#${phim.tenPhim.replace(
                                            /\s+/g,
                                            ""
                                          )}`}
                                          aria-expanded="true"
                                        >
                                          <img src={phim.hinhAnh} alt="" />
                                          <div className="filmInfo">
                                            <p className="movieTitle">
                                              <span className="rated">P </span>
                                              {phim.tenPhim}
                                            </p>
                                            <p className="movieLength">
                                              117 phút - TIX 9 - IMDb 0
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          className="movieSession collapse show"
                                          id={phim.tenPhim.replace(/\s+/g, "")}
                                        >
                                          <div className="listTypeTime">
                                            <div className="version">
                                              2D Digital
                                            </div>
                                            <div className="sessions">
                                              {phim &&
                                                phim.lstLichChieuTheoPhim.map(
                                                  (tgc, index5) => {
                                                    let thoiGian = new Date(
                                                      tgc.ngayChieuGioChieu
                                                    );

                                                    let thoiGianChieu =
                                                      moment(thoiGian).format(
                                                        "DD.MM.YYYY"
                                                      );
                                                    var now = moment(
                                                      new Date().toLocaleDateString()
                                                    ).format("DD.MM.YYYY"); //todays date

                                                    var startDate = moment(
                                                      thoiGianChieu,
                                                      "DD.MM.YYYY"
                                                    );

                                                    var endDate = moment(
                                                      now,
                                                      "DD.MM.YYYY"
                                                    );

                                                    var duration = endDate.diff(
                                                      startDate,
                                                      "days"
                                                    );

                                                    if (duration === 0) {
                                                      return (
                                                        <Link
                                                          to={`/dat-ve/${tgc.maLichChieu}`}
                                                          className="session"
                                                          key={index5}
                                                        >
                                                          <span className="startTime">
                                                            {convertTime12To24(
                                                              new Date(
                                                                tgc.ngayChieuGioChieu
                                                              ).toLocaleTimeString()
                                                            )}
                                                            {/* {moment(new Date(tgc.ngayChieuGioChieu.to))} */}
                                                            {/* {new Date(tgc.ngayChieuGioChieu).toLocaleTimeString()} */}
                                                          </span>
                                                          ~
                                                          <span className="endTime">
                                                            {calculateEndTime(
                                                              convertTime12To24(
                                                                new Date(
                                                                  tgc.ngayChieuGioChieu
                                                                ).toLocaleTimeString()
                                                              ),
                                                              "117"
                                                            )}
                                                          </span>
                                                        </Link>
                                                      );
                                                    } else {
                                                      return "";
                                                    }
                                                  }
                                                )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  } else {
                                    return "";
                                  }
                                })
                              );
                            } else return null;
                          })}
                      </div>
                    </TabPane>
                  );
                })}
            </Tabs>
          </TabPane>
        );
      })
    );
  };
  return (
    <div id="showTime">
      <div className="showTimeMain">
        <Tabs tabPosition="left">{renderShowTime()}</Tabs>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    theaterSystemArray: state.TheaterSystemManagementReducer.theaterSystemArray,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTheaterSystemList: () => {
      dispatch(getTheaterSystemListAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTime);
