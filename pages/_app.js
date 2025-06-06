import "../styles/globals.scss";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  // Initialize Google Analytics
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-1NKJ0CGKE8');
  }, []);

  return (
    <>
      <Head>
        <title>Mik Development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1NKJ0CGKE8"></script>
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;