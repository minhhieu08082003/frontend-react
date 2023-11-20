import React, { useState, useEffect } from "react";
import "./Slider.scss"; // Import file CSS/SCSS

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      setCurrentImage(nextImage);
    }, 3000); // Thay đổi hình sau mỗi 3 giây

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImage ? "slide active" : "slide"}
        />
      ))}
    </div>
  );
};

export default Slider;
