import { useState, useEffect } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width };
};

export default useResize;