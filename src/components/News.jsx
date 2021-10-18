import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetBingNewsQuery } from "../services/bingNewsApi";

const News = ({ showLess }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: bingNews } = useGetBingNewsQuery({
    newsCategory: newsCategory,
    count: showLess ? 6 : 20,
  });
  const { data } = useGetCryptosQuery(100);

  if (!bingNews?.value) return "Loading...";

  return (
    <div className="container">
      <div className="container-header">
        <h2>Most popular crypto currencies</h2>
        {!showLess && (
          <select
            className="input"
            placeholder="Select a cryptocurrency"
            optionFilterProp="children"
            onChange={(e) => setNewsCategory(e.currentTarget.value)}
          >
            <option value="Cryptocurrency">Cryptocurrency</option>
            {data?.data?.coins.map((coin) => (
              <option value={coin.name}>{coin.name}</option>
            ))}
          </select>
        )}
      </div>
      <div className="news-cards-wrapper">
        {bingNews.value.map((article) => (
          <div className="news-card">
            <div className="news-card-header">
              <h3 className="news-card-header-title">{article.name}</h3>
              <img
                className="news-card-header-img"
                src={article?.image?.thumbnail?.contentUrl}
                alt=""
              />
            </div>
            <p className="news-card-description">{article.description}</p>
            <a className="news-card-text news-card-link" href={article.url}>
              🔗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
