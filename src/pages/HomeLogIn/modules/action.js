import * as ActionType from "./constant";
import Axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          dispatch(actLoginSuccess(result.data));
          localStorage.setItem("User", JSON.stringify(result.data));
          history.push("/");
        } else {
          return Promise.reject({
            response: { data: "Không có quyền truy cập" },
          });
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
        Swal.fire({
          text: err.response.data,
          icon: "error",
        });
      });
  };
};
const actLoginRequest = () => {
  return {
    type: ActionType.AUTH_PAGE_REQUEST,
  };
};
const actLoginSuccess = (data) => {
  return {
    type: ActionType.AUTH_PAGE_SUCCESS,
    payload: data,
  };
};
const actLoginFailed = (err) => {
  return {
    type: ActionType.AUTH_PAGE_FAILED,
    payload: err,
  };
};
