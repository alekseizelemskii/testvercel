'use client';

import { useEffect } from 'react';

interface IBackgroundColor {
  color: string;
}

const Index = ({ color }: IBackgroundColor): null => {
  useEffect(() => {
    document.body.style.backgroundColor = `${color}`;
  }, [color]);

  return null;
};

export default Index;
