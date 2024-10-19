import React from "react";
import Header from "../Components/Header/Header";
import Brands from "../Components/Brands/Brands";
import FeaturedBooks from "../Components/FeaturedBooks/FeaturedBooks";
import BestSellingBook from "../Components/BestSellingBook/BestSellingBook";
import PopularBook from "../Components/PopularBooks/PopularBook";
import Quote from "../Components/gallery/Quote";
import LatestArticle from "../Components/LatestArticle/LatestArticle";

const Home = () => {
  return (
    <div>
      <Header />
      <Brands />
      <FeaturedBooks />
      <BestSellingBook />
      <PopularBook />
      <Quote /> 
      <LatestArticle />
    </div>
  );
};

export default Home;
