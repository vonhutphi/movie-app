import React, { useState } from "react";
import "./Comment.scss";
export default function Comment({ cmt }) {
  const [heart, setHeart] = useState(0);
  return (
    <div className="comments">
      <div className="commentInfo">
        <div className="commentName" style={{ fontWeight: "bold" }}>
          {JSON.parse(localStorage.getItem('User')).hoTen}
        </div>
        <div className="commentStar">
          {[...Array(5)].map((star, i) => {
            return (
              <i
                style={{
                  color: `${i + 1 <= cmt.rate ? "#fb4226" : "#ff000046"}`,
                }}
                className="fa fa-star star"
              ></i>
            );
          })}
        </div>
      </div>
      <div className="comment">
        {cmt.content}
      </div>
      <div className="heartEmotion">
        <i
          className="fa fa-heart mr-1 heart"
          onClick={() => {
            heart === 0 ? setHeart(1) : setHeart(0);
          }}
          style={{
            color: `${heart === 0 ? "grey" : "#FB4226"}`,
            cursor: "pointer",
          }}
        ></i>
        <span style={{ fontWeight: "bold" }}>{heart}</span>
        <span className="like ml-1">Thích</span>
      </div>
    </div>
  );
}
