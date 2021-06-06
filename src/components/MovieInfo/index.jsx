import React from "react";
import './MovieInfo.scss'
export default function MovieInfo({movieDetail}) {
  return (
    <div
      className="tab-pane fade show active showTimeDetailMain"
      id="thongTin"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
        <div className="row">
                <div className="col-sm-6 header">
                    Ngày khởi chiếu
                </div>
                <div className="col-sm-6 header">
                    Nội dung
                </div>
                <div className="col-sm-6 content">
                    {movieDetail&& new Date(movieDetail.ngayKhoiChieu).toLocaleDateString()}
                </div>
                <div className="col-sm-6 content">
                    {movieDetail&&movieDetail.moTa}
                </div>
        </div>
    </div>
  );
}
