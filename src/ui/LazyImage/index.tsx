import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type LazyImageProps = {
  image: {
    alt: string;
    src: string;
    className?: string;
    transitionDelay?: string;
  };
};

const LazyImage: React.FC<LazyImageProps> = ({ image }) => (
  <LazyLoadImage
    className={image.className}
    alt={image.alt}
    effect="blur"
    wrapperProps={{
      style: { transitionDelay: image.transitionDelay ?? "0s" },
    }}
    src={image.src}
  />
);

export default LazyImage;
