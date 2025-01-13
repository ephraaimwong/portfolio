import React, { useState } from 'react'
import './HeadShotCollage.css'

const HeadShotCollage = ({images}) => {
    const [currIdx, setCurrIdx] = useState(0);

    const nextImg = () => {
        setCurrIdx((prevIdx) => (prevIdx + 1) % images.length);
    };
    
    const prevImg = () => {
        setCurrIdx((prevIdx) =>
            prevIdx === 0 ? images.length - 1 : prevIdx - 1
          );
    };

    const goToImage = (index) => {
        setCurrIdx(index);
      };

  return (

    <div className='collage-container'>
        <button className='button-nav left' onClick={prevImg}>
            {/* &#10094; left arrow */}
        </button>
      <div className='collage-wrapper'>


        <img
          src={images[currIdx]}
          alt={`Slide ${currIdx + 1}`}
          className="collage-item"
        />

  
      </div>
            <button className="button-nav right" onClick={nextImg}>
            {/* &#10095; Right arrow */}
        </button>

        <div className='dots-container'>
            {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currIdx ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
    </div>
    </div>
  )
}

export default HeadShotCollage
