'use client';

import { useState } from 'react';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

export default function ImageCarousel({ images, alt = 'Carousel image' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div className={styles['carousel-empty']}>No images provided</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles['carousel-container']}>
      <div className={styles['carousel-wrapper']}>
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className={styles['carousel-image']}
        />
        
        {images.length > 1 && (
          <>
            <button
              className={`${styles['carousel-button']} ${styles['carousel-button-prev']}`}
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles['carousel-button']} ${styles['carousel-button-next']}`}
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className={styles['carousel-indicators']}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles['indicator']} ${
                index === currentIndex ? styles['indicator-active'] : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
          <span className={styles['image-counter']}>
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
