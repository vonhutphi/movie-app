import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from "./constant";
import Axios from "axios";
import { Toast } from '../../../components/Toast'

export const fetchAddUserApi = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
        Toast.fire({
          icon: "success",
          title: `Đăng ký thành công`,
        })
        
      })
      .catch((err) => {
        dispatch(actAddUserFailed(err));
        Toast.fire({
          icon: "error",
          title: `${err.response}`,
        });
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (err) => {
  return {
    type: ADD_USER_FAILED,
    payload: err,
  };
};
