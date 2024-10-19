import React from "react";
import { useState } from "react";
import "./PopularBook.css";

// import title props
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// import popular books data
import { galleryData } from "../../Data/Data";

const PopularBook = () => {

    
    // active button functionality
    const [activeButton, setActiveButton] = useState('all');

    // filter gallery functionality
    const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item) => item.category === activeButton);

    const handleFilterChange =(category)=>{
        setActiveButton(category)
    }

  return (
    <section className="PopularBooks">
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={"some quality items"}
          Title={"Popular Books"}
          className={"popularbooks-title"}
        />

        {/* filter button */}
        <div className="filter-buttons">
          <button className={activeButton === 'all' ? 'active' : ''} onClick={()=>handleFilterChange('all') }>All</button>
          <button className={activeButton === 'Business' ? 'active' : ''} onClick={()=>handleFilterChange('Business') }>Business</button>
          <button className={activeButton === 'Technology' ? 'active' : ''} onClick={()=>handleFilterChange('Technology') }>Technology</button>
          <button className={activeButton === 'Adventure' ? 'active' : ''} onClick={()=>handleFilterChange('Adventure') }>Adventure</button>
          <button className={activeButton === 'Romantic' ? 'active' : ''} onClick={()=>handleFilterChange('Romantic') }>Romantic</button>
          <button className={activeButton === 'Fictional' ? 'active' : ''} onClick={()=>handleFilterChange('Fictional') }>Fictional</button>
        </div>

        {/* filter books content */}
        <div className="gallery">
            {
                filterItems.map(({name, writer, price, image}, index) =>{
                    return(
                        <div className="gallery-item" key={index}>
                            <div className="popularbook-image">
                                <img src={image} alt="" />
                            </div>
                            <div className="popuplarbook-info">
                                <h4>{name}</h4>
                                <div><small>{writer}</small></div>
                                <h5><span>{price}</span></h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default PopularBook;
