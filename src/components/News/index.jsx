import React, { useState } from "react";
import { newsDienAnh } from "./NewsData/dienAnh";
import NewsItem from "./NewsItem/NewsItem";
import './News.scss'
export default function News() {
  const renderNews = () => {
    return newsDienAnh.map((item, index) => {
      return <NewsItem key={index} item={item} />;
    });
  };
  return (
    <div id="news">
      <div className="newsMain">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="dienAnh-tab"
              data-toggle="tab"
              href="#dienAnh"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Điện ảnh 24h
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="review-tab"
              data-toggle="tab"
              href="#review"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Review
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="khuyenMai-tab"
              data-toggle="tab"
              href="#khuyenMai"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Khuyến mãi
            </a>
          </li>
        </ul>
        <div className="tab-content">{renderNews()}</div>
        <div className="seeMore">
          <button className="btnSeeMore">Xem thêm</button>
        </div>
      </div>
    </div>
  );
}
