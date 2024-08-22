// ProtectRoute.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return children;
};

export default ProtectRoute;
