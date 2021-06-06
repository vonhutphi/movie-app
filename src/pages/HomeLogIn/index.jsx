import React, { useState } from "react";
import "./HomeLogIn.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actLoginApi } from "./modules/action";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
function HomeLogIn(props) {
  // const [isLoggedIn, setLogIn] = useState(false);
  const [user, setUser] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const convertName = (name) => {
    switch (name) {
      case "taiKhoan":
        return "Tài khoản";
      case "matKhau":
        return "Mật khẩu";
      default:
        return;
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...user.errors };
    let newValues = { ...user.values, [name]: value };

    setUser({
      values: newValues,
      errors: newErrors,
    });
    if (value.trim() === "") {
      newErrors[name] = convertName(name) + " không được để trống";
    } else {
      newErrors[name] = "";
    }
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    
    const { values } = user;
    for (let key in values) {
      if (values[key].trim() === "") {
        Swal.fire({
          text: "Vui lòng điền đầy đủ thông tin trước khi đăng nhập!",
        });
      } else {
        props.fetchUserLogIn(user.values, props.history);
      }
    }
  };

  return (
    <div id="logIn">
      <div className="logInBox">
        <div className="logInContent">
          <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
          <form onSubmit={handleLogIn}>
            <div className="form-group">
              <label htmlFor="taiKhoanDangNhap">Tài khoản</label>
              <input
                name="taiKhoan"
                className="form-control"
                id="taiKhoanDangNhap"
                onChange={handleOnChange}
              />
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {user.errors.taiKhoan}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="matKhauDangNhap">Mật khẩu</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                id="matKhauDangNhap"
                onChange={handleOnChange}
              />
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {user.errors.matKhau}
              </span>
            </div>
            <button type="submit" className="btn logIn">
              Đăng nhập
            </button>
          </form>

          <Link to={"/dang-ky"} className="btn signUp">
            Tạo tài khoản
          </Link>

          <Link to={"/"} className="logIn-close"></Link>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserLogIn: (user, history) => {
      dispatch(actLoginApi(user, history));
    },
  };
};
export default connect(null, mapDispatchToProps)(HomeLogIn);
