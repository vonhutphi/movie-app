import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Booking.scss";
import { connect } from "react-redux";
import { bookTicketApi, getBookingDetailApi } from "./modules/action";
import PopUp from "../../components/PopUp";

function Booking(props) {
  const [[mins, secs], setTime] = useState([5, 0]);
  const [ticketBookedList, setTicketBookedList] = useState([]);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);
  const filmBookingDetail = useSelector(
    (state) => state.getBookingDetailReducer.data
  );
  // const bookingStatus = useSelector(
  //   (state) => state.getBookingDetailReducer.bookingStatus
  // );
  const [thongTinDatVe, setThongTinDatVe] = useState({
    maLichChieu: props.match.params.maLichChieu,
    danhSachVe: [],
    taiKhoanNguoiDung: JSON.parse(localStorage.getItem("User")).taiKhoan,
  });

  useEffect(() => {
    props.fetchBookingDetail(props.match.params.maLichChieu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const timeId = setInterval(() => {
      countDown();
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  const countDown = () => {
    if (mins === 0 && secs === 0) {
      setTime([0, 0]);
      setOpen(true);
      setContent("Bạn đã hết thời gian giữ ghế");
      setRedirect(true);
    } else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };
  const handleOpenPopUp = (open) => {
    setOpen(open);
  };
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div id="bookingTicket" className="container-fluid">
      <div className="row">
        <div className="col-9 theaterSeat p-0">
          <div className="theaterSeatHeader  d-flex justify-content-between align-items-center">
            <div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#pickSeat"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    CHỌN GHẾ & THANH TOÁN
                  </a>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#bookingDetail"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    02 KẾT QUẢ ĐẶT GHẾ
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="userInfo">
              {JSON.parse(localStorage.getItem("User")).hoTen}
            </div>
          </div>
          <div className="tab-content theaterSeatContent" id="myTabContent">
            <div
              className="tab-pane fade show active mt-3"
              id="pickSeat"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="someInfo d-flex justify-content-between">
                <div className="theaterInfo">
                  <div className="rap" style={{ fontWeight: "bold" }}>
                    {filmBookingDetail &&
                      filmBookingDetail.thongTinPhim?.tenCumRap}
                  </div>
                  <div className="theaterNumber">
                    {filmBookingDetail &&
                      filmBookingDetail.thongTinPhim?.gioChieu}{" "}
                    -{" "}
                    {filmBookingDetail &&
                      filmBookingDetail.thongTinPhim?.tenRap}
                  </div>
                </div>
                <div className="countDown">
                  <div>Thời gian giữ ghế</div>
                  <div className="timer text-center">
                    {mins}:{secs < 10 ? `0${secs}` : secs}
                  </div>
                </div>
              </div>
              <div className="screen">
                <img
                  src={require("../../assets/images/screen.png").default}
                  alt=""
                />
              </div>
              {/* <p className="text-center">Màn hình</p> */}
              <div className="seats text-center">
                {filmBookingDetail &&
                  filmBookingDetail.danhSachGhe.map((seat, indexx) => {
                    let gheVip = seat.loaiGhe === "Vip" ? "gheVip" : "";
                    let gheDaDat = seat.daDat === true ? "gheDaDat" : "";
                    let indexGheDangDat = ticketBookedList.findIndex(
                      (gheDangDat) => seat.maGhe === gheDangDat.maGhe
                    );
                    let gheDangDat = indexGheDangDat !== -1 ? "gheDangDat" : "";
                    return (
                      <>
                        <button
                          disabled={seat.daDat}
                          onClick={() => {
                            if (
                              indexGheDangDat === -1 &&
                              ticketBookedList.length < 5
                            ) {
                              let gheDat = {
                                maGhe: seat.maGhe,
                                giaVe: seat.giaVe,
                              };
                              setTicketBookedList([
                                ...ticketBookedList,
                                { ...gheDat, stt: seat.stt },
                              ]);
                              let newList = [
                                ...thongTinDatVe.danhSachVe,
                                gheDat,
                              ];
                              setThongTinDatVe({
                                ...thongTinDatVe,
                                danhSachVe: newList,
                              });
                            } else if (indexGheDangDat !== -1) {
                              let newList = [...ticketBookedList];
                              let newListTicket = [...thongTinDatVe.danhSachVe];
                              newList.splice(indexGheDangDat, 1);
                              newListTicket.splice(indexGheDangDat, 1);
                              setTicketBookedList(newList);

                              setThongTinDatVe({
                                ...thongTinDatVe,
                                danhSachVe: newListTicket,
                              });
                            } else if (ticketBookedList.length === 5) {
                              setOpen(true);
                              setContent(
                                "Mỗi khách hàng chỉ được chọn tối đa 5 ghế"
                              );
                            }
                          }}
                          className={`seat btn ${gheVip} ${gheDaDat} ${gheDangDat}`}
                          key={indexx}
                        ></button>
                        {(indexx + 1) % 16 === 0 ? <br /> : ""}
                      </>
                    );
                  })}
              </div>
              <div className="annotate d-flex justify-content-around align-items-center">
                <div className="row">
                  <div className="anno vip"></div>
                  <p>Ghế VIP</p>
                </div>
                <div className="row">
                  <div className="anno booked"></div>
                  <p>Đã đặt</p>
                </div>
                <div className="row">
                  <div className="anno notBeenBooked"></div>
                  <p>Chưa đặt</p>
                </div>
                <div className="row">
                  <div className="anno booking"></div>
                  <p>Đang đặt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 filmInfo">
          <div className="filmAddress">
            <h1 className="totalPrice text-center" style={{ color: "#1abc9c" }}>
              {new Intl.NumberFormat("de-DE").format(
                ticketBookedList.reduce((totalPrice, ticket) => {
                  return (totalPrice += ticket.giaVe);
                }, 0)
              )}{" "}
              đ
            </h1>
            <img
              src={filmBookingDetail && filmBookingDetail.thongTinPhim?.hinhAnh}
              alt=""
            />
            <p className="filmName m-0 mt-3">
              {filmBookingDetail && filmBookingDetail.thongTinPhim?.tenPhim}
            </p>
            <div className="theaterCluster">
              {filmBookingDetail && filmBookingDetail.thongTinPhim?.tenCumRap}
            </div>
            <div className="theaterAddress">
              {filmBookingDetail && filmBookingDetail.thongTinPhim?.diaChi}
            </div>
            <div className="theaterNumber">
              {filmBookingDetail && filmBookingDetail.thongTinPhim?.gioChieu} -{" "}
              {filmBookingDetail && filmBookingDetail.thongTinPhim?.tenRap}
            </div>
          </div>
          <div className="seatInfo d-flex justify-content-between">
            <p className="m-0">Ghế</p>
            <div>
              {ticketBookedList.map((ticket, i1) => {
                return (
                  <span key={i1}>
                    {i1 === 0 ? "" : ", "}
                    {ticket.stt}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="thanhTien d-flex justify-content-between">
            <p>Thành tiền: </p>
            <div>
              {new Intl.NumberFormat("de-DE").format(
                ticketBookedList.reduce((totalPrice, ticket) => {
                  return (totalPrice += ticket.giaVe);
                }, 0)
              )}{" "}
              đ
            </div>
          </div>
          <div className="datVe">
            <button
              disabled={ticketBookedList.length === 0 ? true : false}
              className={`btnDatVe btn ${
                ticketBookedList.length === 0 ? "btnChuaDat" : ""
              }`}
              onClick={() => {
                props.bookingTicket(thongTinDatVe, props);
              }}
            >
              Đặt Vé
            </button>
          </div>
        </div>
      </div>
      <PopUp
        open={open}
        handleOpenPopUp={handleOpenPopUp}
        goBack={goBack}
        content={content}
        redirect={redirect}
      />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookingDetail: (maLichChieu) => {
      dispatch(getBookingDetailApi(maLichChieu));
    },
    bookingTicket: (thongTinDatVe, props) => {
      dispatch(bookTicketApi(thongTinDatVe, props));
    },
  };
};
export default connect(null, mapDispatchToProps)(Booking);
