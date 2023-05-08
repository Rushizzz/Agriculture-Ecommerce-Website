import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <img src={mainImage} alt="Main" width="400" height="400" />
      <div>
        {images.map((image, index) => (
          console.log("index = ",index),
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            width="100"
            height="100"
            onClick={() => setMainImage(image) }
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;