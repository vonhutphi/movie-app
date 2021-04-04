import React from "react";

export default function ListNews(props) {
  const { news } = props;

  return (
    <div className="list-item row">
      <div className="list-img">
        <img src={news.image} alt="" />
      </div>
      <p className="list-title col-9">{news.title}</p>
    </div>
  );
}
