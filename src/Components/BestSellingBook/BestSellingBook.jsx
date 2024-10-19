import React from "react";

import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

import "./BestSellingBook.css";

import TreeShape from "../../assets/treeShape.png";



// import link from react
import { Link } from "react-router-dom";

// import icon
import { BsArrowRight } from "react-icons/bs";

      // Selling Data.......................
      import sellingBookimage from '../../assets/SellingBookImage/sellingBook.png';



const BestSellingBook = () => {

   const sellingBooksData =[
    {
        id: 1,
        img: sellingBookimage,
        infoTitleTop: 'By Timbur Hood',
        infoTitle: 'Birds gonna be happy',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac',
        price: '$ 45.00',
        shopbtnLink: "*",
    }
];

  return (
    <section className="BestSellingBook">
      <div className="treeshape">
        <img src={TreeShape} alt="" />
      </div>

      {sellingBooksData.map(
        ({ img,infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => {
          return (
            <div className="container bestselling-container" key={index}>
                {/* left */}
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>
              {/* right */}
              <div className="selling-book-right">
                <TitleTypeTwo Title={"Best selling book"} className='sellingBookTitle'/>
                <div><small>{infoTitleTop}</small></div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5><span>{price}</span></h5>
                <Link to={shopbtnLink} className='btn'>
                 <small>Shop it now</small>
                 <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default BestSellingBook;
