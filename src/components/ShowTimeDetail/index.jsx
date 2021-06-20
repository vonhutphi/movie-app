import React, { useEffect } from "react";
import { Tabs } from "antd";
import "./ShowTimeDetail.scss";
import moment from "moment";
import { connect } from "react-redux";
import { getTheaterSystemListAction } from "../ShowTime/modules/action";
import { Link } from "react-router-dom";
function ShowTimeDetail({ movieDetail, theaterSystemArray, ...props }) {
  const { TabPane } = Tabs;

  useEffect(() => {
    props.fetchTheaterSystemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const convertTime12To24 = (time12) => {
    let [time, modifier] = time12.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
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
  const renderShowTimeDetail = (theaterSystemArray) => {
    return (
      <Tabs tabPosition="left" defaultActiveKey="1">
        {theaterSystemArray.map((theater, index) => {
          return (
            <TabPane
              key={index}
              tab={
                <div className="text-left">
                  <img className="showTimeImg " src={theater.logo} alt="" />
                  <p className="d-inline-block SystemName">
                    {theater.tenHeThongRap}
                  </p>
                </div>
              }
            >
              {renderLichChieu(theater)}
            </TabPane>
          );
        })}
      </Tabs>
    );
  };
  const renderLichChieu = (theater) => {
    let dates = [];

    const current = moment();
    for (let i = 0; i < 14; i++) {
      dates.push(current.format("YYYY-MM-DD"));
      current.add(1, "day");
    }
    // console.log("dates", dates);
    return (
      <div className="showtime__detail">
        <Tabs defaultActiveKey="0">
          {dates.map((date, index2) => {
            return (
              <TabPane
                key={index2}
                tab={
                  <div className="col-sm-2">
                    <div className="text-center">
                      {moment(date).format("DD/MM")}
                      <br />
                      {moment(date).format("ddd")}
                    </div>
                  </div>
                }
              >
                {renderChiTietLichChieu(theater, date)}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  };
  const renderChiTietLichChieu = (theater, date) => {
    return (
      movieDetail &&
      movieDetail.heThongRapChieu.map((rap, index) => {
        if (rap.maHeThongRap === theater.maHeThongRap) {
          return rap.cumRapChieu.map((lc, i) => {
            return (
              <div className="filmShowTimeDetail">
                <div key={i} className="TheatetClusterName">
                  {lc.tenCumRap}
                </div>
                <div className="movieSession collapse show">
                  <div className="listTypeTime">
                    <div className="version">2D Digital</div>
                    <div className="sessions">
                      {lc &&
                        lc.lichChieuPhim.map((tgc, index5) => {
                          let thoigian = new Date(tgc.ngayChieuGioChieu);
                          let thoiGianChieu =
                            moment(thoigian).format("DD.MM.YYYY");

                          // console.log(thoigian)
                          // console.log(thoiGianChieu);
                          // let thoiGianView = new Date(tgc.NgayChieuGioChieu);
                          var now = moment(date).format("DD.MM.YYYY"); //todays date
                          // console.log(now)
                          var startDate = moment(thoiGianChieu, "DD.MM.YYYY");
                          var endDate = moment(now, "DD.MM.YYYY");
                          var duration = endDate.diff(startDate, "days");
                          // console.log(duration)
                          var parseTime = (timeString) =>
                            moment(timeString, "HH:mm");
                          let timeCurrent = moment(new Date()).format("HH:mm");
                          // console.log(timeCurrent)
                          let timeLC = moment(thoigian).format("HH:mm");

                          let nowRealTime = moment(new Date()).format(
                            "DD.MM.YYYY"
                          );
                          // console.log('nowRealTime',nowRealTime)
                          let endDateRealTime = moment(
                            nowRealTime,
                            "DD.MM.YYYY"
                          );
                          // console.log('endDateTime',endDateRealTime)
                          // console.log('thoigianchieu',startDate)
                          let durationRealTime = endDateRealTime.diff(
                            startDate,
                            "days"
                          );
                          // console.log('durationReal',durationRealTime)
                          let isDisabled =
                            parseTime(timeLC).isBefore(
                              parseTime(timeCurrent)
                            ) && durationRealTime === 0;
                          if (duration === 0) {
                            return (
                              <Link
                                key={index5}
                                to={
                                  localStorage.getItem("User")
                                    ? `/dat-ve/${tgc.maLichChieu}`
                                    : "/dang-nhap"
                                }
                                className="session"
                                disabled={isDisabled}
                                onClick={() => {
                                  console.log(tgc.maLichChieu);
                                }}
                              >
                                <span
                                  className={`startTime ${
                                    isDisabled ? "btnIsDisabled" : ""
                                  }`}
                                >
                                  {convertTime12To24(
                                    new Date(
                                      tgc.ngayChieuGioChieu
                                    ).toLocaleTimeString()
                                  )}
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
                            return null;
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        } else {
          return null;
        }
      })
    );
  };
  return (
    <div
      className="tab-pane fade show showTimeDetailMain"
      id="lichChieu"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="showtime__frame__detail">
        {renderShowTimeDetail(theaterSystemArray)}
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
export default connect(mapStateToProps, mapDispatchToProps)(ShowTimeDetail);
