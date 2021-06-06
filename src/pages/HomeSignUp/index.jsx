import React, { useState } from "react";
import "./HomeSignUp.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAddUserApi } from "./module/action";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function HomeSignUp(props) {
  let [user, setUser] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
    },
    isInvalid: {
      taiKhoan: false,
      matKhau: false,
      hoTen: false,
      email: false,
      soDt: false,
      maNhom: false,
      maLoaiNguoiDung: false,
    },
  });
  const handleOnChange = (e) => {
    const { name, value, type } = e.target;
    let newValues = {
      ...user.values,
      [name]: value,
      maNhom: "GP03",
      maLoaiNguoiDung: "KhachHang",
    };
    let newErrors = { ...user.errors };
    let newInvalid = { ...user.isInvalid };
    setUser({
      values: newValues,
      errors: newErrors,
      isInvalid: newInvalid,
    });
    if (value.trim() === "") {
      newErrors[name] = convertName(name) + " không được để trống";
      newInvalid[name] = true;
    } else {
      newErrors[name] = "";
      newInvalid[name] = false;
    }
    if (type === "email") {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
      if (!re.test(value)) {
        newErrors[name] = convertName(name) + " không đúng định dạng";
        newInvalid[name] = true;
      } else {
        newErrors[name] = "";
        newInvalid[name] = false;
      }
    }
    if (name === "soDt") {
      const re = /^[0-9]*$/;
      if (!re.test(value)) {
        newErrors[name] = "Vui lòng nhập đúng định dạng số điện thoại";
      } else {
        newErrors[name] = "";
      }
    }
  };
  const convertName = (name) => {
    switch (name) {
      case "taiKhoan":
        return "Tài khoản";
      case "matKhau":
        return "Mật khẩu";
      case "hoTen":
        return "Họ và tên";
      case "email":
        return "Email";
      case "soDt":
        return "Số điện thoại";
      case "maLoaiNguoiDung":
        return "Mã loại người dùng";
      default:
        return;
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    let valid = true;
    let { values, errors } = user;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (valid) {
      props.fetchSignUp(user.values);
      let newValue = { ...user.values };
      for (let key in newValue) {
        newValue[key] = "";
      }
      setUser({
        ...user,
        values: newValue,
      });
    } else {
      Swal.fire({
        text: "Vui lòng điền đầy đủ thông tin trước khi đăng ký!",
      });
    }
  };
  return (
    <div id="signUp">
      <div className="signUpBox">
        <div className="signUpContent">
          <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="taiKhoanDangNhap">Tài khoản</label>
              <input
                name="taiKhoan"
                className="form-control"
                id="taiKhoanDangNhap"
                onChange={handleOnChange}
                value={user.values.taiKhoan}
              />
              <span>{user.errors.taiKhoan}</span>
            </div>
            <div className="form-group">
              <label htmlFor="matKhauDangNhap">Mật khẩu</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                id="matKhauDangNhap"
                onChange={handleOnChange}
                value={user.values.matKhau}
              />
              <span>{user.errors.matKhau}</span>
            </div>
            <div className="form-group">
              <label htmlFor="hoTen">Họ và tên</label>
              <input
                name="hoTen"
                className="form-control"
                id="hoTen"
                onChange={handleOnChange}
                value={user.values.hoTen}
              />
              <span>{user.errors.hoTen}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                className="form-control"
                id="email"
                onChange={handleOnChange}
                value={user.values.email}
              />
              <span>{user.errors.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="soDt">Số điện thoại</label>
              <input
                name="soDt"
                className="form-control"
                id="soDt"
                onChange={handleOnChange}
                value={user.values.soDt}
              />
              <span>{user.errors.soDt}</span>
            </div>
            <button type="submit" className="btn signUp">
              Đăng ký
            </button>
          </form>
          <Link to={"/dang-nhap"} className="signUp-close"></Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    err: state.addUserReducer.err,
    data: state.addUserReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSignUp: (user) => {
      dispatch(fetchAddUserApi(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeSignUp);
