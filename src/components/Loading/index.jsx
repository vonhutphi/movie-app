import React from "react";
import "./Loading.scss";
import logo from "./../../assets/images/web-logo.png";
export default function Loading() {
  return (
    <>
      <div
        id="loading"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="loadingImg">
          <img src={logo} alt="" />
        </div>
      </div>
      )
    </>
  );
}
