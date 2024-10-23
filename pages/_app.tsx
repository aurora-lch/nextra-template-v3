import '../global.css';
import { NextUIProvider } from '@nextui-org/system';
import { usePathname } from 'next/navigation';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });
  const pathname = usePathname();
  const isIndex = pathname.startsWith('/index') || pathname === '/';

  return (
    <>
      <motion.div
        className='progress-bar'
        style={{
          scaleX,
          display: isIndex ? 'none' : 'block'
        }}
      />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
}
