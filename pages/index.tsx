import { Manrope, Farro } from "next/font/google";
import { Layout } from "@/components/Global/Layout/Layout";
import { HomePageIndex } from "@/components/Pages/HomePageIndex";
import Head from "next/head";

const manrope = Manrope({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Growthlobby : Digital solution for your business or project{" "}
        </title>
        <meta
          name="description"
          content="Growthlobby Website design and development agency"
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
