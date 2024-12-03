import React, { useEffect } from 'react';

interface BackgroundImageProps {
  image: any;
  position: string;
  size: string;
  repeat?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  image,
  position,
  size,
  repeat = 'no-repeat',
}): null => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${image.src}')`;
    document.body.style.backgroundSize = size;
    document.body.style.backgroundRepeat = repeat;
    document.body.style.backgroundPosition = position;
    document.body.style.minHeight = '100vh';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundSize = 'auto';
      document.body.style.backgroundPosition = 'top center';
      document.body.style.minHeight = 'none';
      document.body.style.overflow = 'auto';
    };
  }, [image]);

  return null;
};

export default BackgroundImage;
