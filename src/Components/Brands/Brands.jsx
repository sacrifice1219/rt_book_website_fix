import React from 'react';
import './Brands.css';

     // Brands Data.......................
     import Brand1 from '../../assets/Brands/brand1.png'
     import Brand2 from '../../assets/Brands/brand2.png'
     import Brand3 from '../../assets/Brands/brand3.png'
     import Brand4 from '../../assets/Brands/brand4.png'
     import Brand5 from '../../assets/Brands/brand5.png'



const Brands = () => {

     const brandsData =[
        {
            id: 1,
            img: Brand1,        
        },
        {
            id: 2,
            img: Brand2,        
        },
        {
            id: 3,
            img: Brand3,        
        },
        {
            id: 4,
            img: Brand4,        
        },
        {
            id: 5,
            img: Brand5,        
        },
    ];
    

  return (
    <div className='Brands'>
        <div className="container brands-container">
            {
                brandsData.map(({img}, index) =>{
                    return (
                        <div className="brand" key={index}>
                            <img src={img} alt="brandImage" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Brands;