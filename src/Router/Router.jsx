import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Pages
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

//import components
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

import React from "react";
import BookStore from "../Components/Shop/Shop";
import LatestArticle from "../Components/LatestArticle/LatestArticle";
import FeaturedBooks from "../Components/FeaturedBooks/FeaturedBooks";
import Quote from "../Components/gallery/Quote";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/Bookstore" element={<BookStore />} />
        <Route path="/articles" element={<LatestArticle />} />
        <Route path="/about" element={<FeaturedBooks/>}/>
        <Route path="contact" element={<Quote />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
