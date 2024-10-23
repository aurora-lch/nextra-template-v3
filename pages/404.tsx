import { useRouter } from 'nextra/hooks';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);
}
