import { Container } from "@mui/material";
import React from "react";
import NewsArticle from "../NewsArticle/NewsCard";
import "./newsFeed.css";

const NewsFeed = ({ articles, totalResults }) => {
  console.log(articles);
  return (
    <Container maxWidth="md">
      <div className="download-message">
        <span>For the best experience use inshorts app on your smartphone</span>
        <img
          src="https://assets.inshorts.com/website_assets/images/appstore.png"
          alt="app store"
          height="80%"
        />
        <img
          src="https://assets.inshorts.com/website_assets/images/playstore.png"
          alt="play store"
          height="80%"
        />
      </div>
      {articles &&
        articles.map((art, ind) => (
          <NewsArticle newsItem={art} key={art.title} />
        ))}
    </Container>
  );
};

export default NewsFeed;
