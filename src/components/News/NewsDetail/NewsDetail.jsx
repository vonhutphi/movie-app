import React from "react";

export default function NewsDetail(props) {
  const { news } = props;

  return (
    <div className="news-detail col-12 col-sm-6">
      <img className="thumbnail" src={news.image} alt="" />
      <p className="title">{news.title}</p>
      <p className="desc">{news.desc}</p>
      <div className="social">
        <div className="social-like">
          <a href="#" className="like">
            <img
              src={require("./../../../assets/images/like.png").default}
              alt=""
            />
            <p>{news.like}</p>
          </a>
        </div>
        <div className="social-comment">
          <a href="#" className="comment">
            <img
              src={require("./../../../assets/images/comment.png").default}
              alt=""
            />
            <p>{news.comment}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
