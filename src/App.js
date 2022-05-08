import { useEffect, useState } from "react";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import axios from "axios";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import apiKey from "./data/config";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const newsApi = async () => {
    try {
      const news = await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`
        )
        .catch((err) => console.log("err", err));
      setArticles(news.data.articles);
      setTotalResults(news.data.totalResults);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    newsApi();
  }, [category, totalResults]);
  return (
    <div>
      <TopNavBar setCategory={setCategory} />
      <NewsFeed articles={articles} totalResults={totalResults} />
      <Footer />
    </div>
  );
}

export default App;
