import { Manrope, Farro } from "next/font/google";
import { Layout } from "@/components/Global/Layout/Layout";
import { HomePageIndex } from "@/components/Pages/HomePageIndex";
import Head from "next/head";
import { useEffect } from "react";

const manrope = Manrope({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "normal"],
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66585c01981b6c5647766acd/1hv4ieqet';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  
  return (
    <>
      <Head>
        <title>
          Growthlobby : Digital solution for your business or project
        </title>
        <meta
          name="description"
          content="Growthlobby : A software/website/mobile frontend design and development agency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/tab.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/tab.png"
        />
      </Head>

      <Layout className={`${manrope.className}`}>
        <HomePageIndex />
      </Layout>
    </>
  );
}
