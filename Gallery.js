import React, { useState } from 'react';
import { images } from './imageList';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <img src={images[currentIndex].url} alt={images[currentIndex].description} />
      <p>{images[currentIndex].description}</p>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
      <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
    </div>
  );
}

export default Gallery;
