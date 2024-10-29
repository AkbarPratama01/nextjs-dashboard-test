// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirect ke halaman login
  }, [router]);

  return null; // Tidak perlu menampilkan apapun di halaman ini
};

export default Home;