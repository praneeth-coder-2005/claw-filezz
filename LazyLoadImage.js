import React from 'react';

const LazyLoadImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} loading="lazy" />
  );
};

export default LazyLoadImage;
