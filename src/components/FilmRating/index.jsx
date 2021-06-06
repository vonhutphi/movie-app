import React, { useState } from "react";
import Comment from "../Comment";
import "./FilmRating.scss";
import { Link } from "react-router-dom";
export default function FilmRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  let [comments, setComments] = useState([]);
  let [comment, setComment] = useState({
    content: "",
    rate: 0,
  });

  return (
    <div
      id="danhGia"
      className="tab-pane fade show"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="commentSection">
        <div className="commentHead">
          <p className="thought m-0">Bạn nghĩ gì về phim này?</p>
          <div className="rating__star">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    style={{
                      display: "none",
                    }}
                    type="radio"
                    name="rating"
                    id=""
                    value={ratingValue}
                    onClick={() => {
                      setRating(ratingValue);
                      setComment({
                        ...comment,
                        rate: ratingValue,
                      });
                    }}
                  />
                  <i
                    style={{
                      color: `${
                        ratingValue <= (rating || hover)
                          ? "#fb4226"
                          : "#ff000046"
                      }`,
                    }}
                    className="fa fa-star star"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  ></i>
                </label>
              );
            })}
          </div>
        </div>
        {localStorage.getItem("User") ? (
          <>
            <div className="inputSection">
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                value={comment.content}
                placeholder="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                onChange={(e) =>
                  setComment({
                    ...comment,
                    content: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="submitComment">
              <button
                className="btn btnSubmitComment"
                onClick={() => {
                  let newComments = [...comments, comment];
                  setComments(newComments);
                  setComment({
                    ...comment,
                    content: " ",
                  });
                  setRating(null);
                }}
                disabled={!(rating && comment.content.trim())}
              >
                Đăng
              </button>
            </div>
          </>
        ) : (
          <div>
            <Link to="/dang-nhap" className="btn btnLogInToCmt">
              Đăng nhập để bình luận
            </Link>
          </div>
        )}
      </div>
      {comments.length > 0 &&
        comments.map((cmt, index) => {
          return <Comment cmt={cmt} index={index} />;
        })}
    </div>
  );
}
