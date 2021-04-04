import React, { useEffect } from "react";
import "./ShowTime.scss";
import { Tabs } from "antd";
import { connect } from "react-redux";
import { getTheaterSystemListAction } from "./modules/action";
import moment from "moment";
const { TabPane } = Tabs;
function ShowTime(props) {
  const { theaterSystemArray } = props;
  useEffect(() => {
    props.fetchTheaterSystemList();
  }, []);
  const checkLichchieu = (phim) => {
    let mangLC = [];
    // if(phim.MaPhim === maPhim){
    phim.lstLichChieuTheoPhim.map((tgc, index) => {
      let thoiGianChieu = moment(new Date(tgc.ngayChieuGioChieu)).format(
        "DD.MM.YYYY"
      );

      var now = moment(new Date()).format("DD.MM.YYYY"); //todays date
      // console.log('now', now, "thoiGianChieu", thoiGianChieu);
      var startDate = moment(thoiGianChieu, "DD.MM.YYYY");
      var endDate = moment(now, "DD.MM.YYYY");
      var duration = endDate.diff(startDate, "days");

      if (duration === 0) {
        mangLC.push(duration);
      }
    });
    // console.log(mangLC);
    // }
    if (mangLC.length > 0) {
      return true;
    }
    return false;
  };
  const convertTime12To24 = (time12) => {
    let [time, modifier] = time12.split(" ");
    let [hours, minutes, seconds] = time.split(":");
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
    let hour = Math.floor(minutes / 60) + parseInt(startHour, 10);
    let minute = (minutes % 60) + parseInt(startMin, 10);

    return `${hour}:${minute}`;
  };
  const renderShowTime = () => {
    return (
      theaterSystemArray &&
      theaterSystemArray.map((theater, index) => {
        return (
          <TabPane
            style={{outline: 'none'}}
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
                          theater.mangLichChieu[0].lstCumRap.map(
                            (lc, index3) => {
                              if (lc.maCumRap === rap.maCumRap) {
                                return (
                                  lc.danhSachPhim &&
                                  lc.danhSachPhim.map((phim, index4) => {
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
                                                <span className="rated">
                                                  P{" "}
                                                </span>
                                                {phim.tenPhim}
                                              </p>
                                              <p className="movieLength">
                                                117 phút - TIX 9 - IMDb 0
                                              </p>
                                            </div>
                                          </div>
                                          <div
                                            className="movieSession collapse show"
                                            id={phim.tenPhim.replace(
                                              /\s+/g,
                                              ""
                                            )}
                                          >
                                            <div className="listTypeTime">
                                              <div className="version">
                                                2D Digital
                                              </div>
                                              <div className="sessions">
                                                {phim &&
                                                  phim.lstLichChieuTheoPhim.map(
                                                    (tgc, index5) => {
                                                      return (
                                                        <a
                                                          href="#"
                                                          className="session"
                                                        >
                                                          <span className="startTime">
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
                                                        </a>
                                                      );
                                                    }
                                                  )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  })
                                );
                              }
                            }
                          )}
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
