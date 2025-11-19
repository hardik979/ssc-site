import React, { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 ${containerClassName}`}
    >
      {/* Loader / Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-4 border-gray-400 border-t-transparent animate-spin" />
        </div>
      )}

      {/* Fallback on error */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 text-xs">
          <span className="mb-1">Image not available</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(false);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};

export default ImageWithLoader;
