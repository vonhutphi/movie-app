import * as ActionType from "./constant";
import Axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export const getBookingDetailApi = (maLichChieu) => {
  return (dispatch) => {
    dispatch(getBookingDetailRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(getBookingDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getBookingDetailFailed(err));
      });
  };
};
export const bookTicketApi = (thongTinDatVe, props) => {
  let accessToken = JSON.parse(localStorage.getItem("User")).accessToken;
  return (dispatch) => {
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch({
          type: ActionType.BOOK_TICKET,
          payload: res.data,
        });
        Swal.fire({
          icon: "success",
          text: res.data,
        }).then((res) => {
          props.history.push('/');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getBookingDetailRequest = () => {
  return {
    type: ActionType.GET_BOOKING_DETAIL_REQUEST,
  };
};
const getBookingDetailSuccess = (data) => {
  return {
    type: ActionType.GET_BOOKING_DETAIL_SUCCESS,
    payload: data,
  };
};
const getBookingDetailFailed = (err) => {
  return {
    type: ActionType.GET_BOOKING_DETAIL_FAILED,
    payload: err,
  };
};
