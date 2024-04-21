import { Manrope, Farro } from "next/font/google";
import { Layout } from "@/components/Global/Layout/Layout";
import { HomePageIndex } from "@/components/Pages/HomePageIndex";

const manrope = Manrope({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout className={`${manrope.className}`}>
      <HomePageIndex />
    </Layout>
  );
}
