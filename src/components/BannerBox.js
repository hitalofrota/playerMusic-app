import React, { useState, useEffect } from 'react';
import './style/bannerStyle.css';

function BannerBox({ banners }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="banner-box">
      <img
        className="banner-image"
        src={banners[currentBannerIndex]}
        alt="Banner"
      />
    </div>
  );
}

export default BannerBox;