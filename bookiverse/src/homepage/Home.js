import React, { useState, useEffect } from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCarousel(prevShow => !prevShow);
    }, 20000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-container">
      

      {showCarousel && (
        <div className="carousel-overlay">
          <div className="carousel-modal">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src={require('../images/image1.jpg')} alt="Image 1" />
              </div>
              <div>
              <img src={require('../images/image2.jpg')} alt="Image 2" />
              </div>
              <div>
              <img src={require('../images/image3.jpg')} alt="Image 3" />
              </div>

            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
