import React from "react";
import NewsDetail from "../NewsDetail/NewsDetail";
import ListNews from "../ListNews/ListNews";

export default function NewsItem(props) {
  const { item } = props;
  const renderBigNews = () => {
    return item.data.bigNews.map((news, index) => {
      return <NewsDetail key={index} news={news} />;
    });
  };
  const renderSmallNews = () => {
    return item.data.smallNews.map((news, index) => {
      return <NewsDetail key={index} news={news} />;
    });
  };
  const renderListNews = () => {
    return item.data.list.map((item, index) => {
      return <ListNews key={index} news={item} />;
    });
  };
  const isActive = (id) => {
    if (id === "dienAnh") {
      return "tab-pane fade show active";
    }
    return "tab-pane fade show";
  };
  return (
    <div
      className={isActive(item.id)}
      id={item.id}
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="big-news news-item">{renderBigNews()}</div>
      <div className="news-bottom row ">
        <div className="small-news col-12 col-sm-8 news-item">
          {renderSmallNews()}
        </div>
        <div className="list-news col-12 col-sm-4">{renderListNews()}</div>
      </div>
    </div>
  );
}
