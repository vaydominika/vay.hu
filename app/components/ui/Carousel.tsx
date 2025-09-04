"use client";

import React, { useEffect, useState, useCallback } from 'react';

type ImageItem = { src: string; alt?: string };

interface CarouselProps {
  images: ImageItem[];
  borderRadius?: string;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  borderRadius = '1rem',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const hasImages = images && images.length > 0;

  const goPrev = useCallback(() => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [hasImages, images?.length]);

  const goNext = useCallback(() => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [hasImages, images?.length]);

  const goToIndex = useCallback((index: number) => {
    if (!hasImages) return;
    setCurrentIndex(index % images.length);
  }, [hasImages, images?.length]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isLightboxOpen, goPrev, goNext]);

  if (!hasImages) {
    return (
      <div
        className={`relative w-full bg-gray-100 text-gray-500 flex items-center justify-center overflow-hidden ${className}`}
        style={{ borderRadius }}
      >
        No images
      </div>
    );
  }

  const current = images[currentIndex];

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`} style={{ borderRadius }}>
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <img
          src={current.src}
          alt={current.alt || `Image ${currentIndex + 1}`}
          className="w-full h-full object-cover cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
          draggable={false}
        />

        <button
          type="button"
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 focus:outline-none"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 focus:outline-none"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goToIndex(idx)}
                className={`${isActive ? 'w-3.5 h-3.5 bg-white' : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'} rounded-full transition-all`}
              />
            );
          })}
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsLightboxOpen(false);
          }}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={current.src}
              alt={current.alt || `Image ${currentIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
              onClick={() => setIsLightboxOpen(false)}
              draggable={false}
            />

            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-white"
            >
              ×
            </button>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
