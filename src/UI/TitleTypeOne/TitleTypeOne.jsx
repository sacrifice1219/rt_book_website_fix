import React from 'react';
import './TitleTypeOne.css';

// import image
import victor from '../../assets/victor.png';

const TitleTypeOne = ({className, Title, TitleTop}) => {
  return (
    <div className={`TitleTypeOne ${className}`}>
        <small>{TitleTop}</small>
        <div className="heading-H">
            <div className="line"></div>
            <h2>{Title}</h2>
            <div className="line"></div>
        </div>
        <img src={victor} alt="" className='victor'/>
    </div>
  )
}

export default TitleTypeOne;