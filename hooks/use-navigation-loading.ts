'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useNavigationLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return isLoading;
};