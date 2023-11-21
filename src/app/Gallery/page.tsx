import Header from "../../../components/utils/Header";
import Hero from "../../../components/Gallery/Hero";
import Footer from "../../../components/utils/Footer";
import Gallery from "../../../components/Gallery/Gallery";
import Features from "../../../components/Gallery/features";
import Quotes from "../../../components/Gallery/Quotes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoGenie | Gallery",
  description:
    "Explore our curated gallery of stunning Marburg photography, featuring a diverse range of scenes from this picturesque German city. Experience Marburg's beauty through our lens with easy-to-navigate pagination and user-friendly filters. Dive into the visual splendor of historic architecture, vibrant street life, and serene landscapes captured in high-quality images. Ideal for photography enthusiasts and travelers alike, discover Marburg's unique charm in each carefully selected photograph. Join us on a visual journey through one of Germany's most photogenic destinations.",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full h-full ">
      <Header />
      <Hero />
      <Gallery />
      <Features />
      <Quotes />
      <Footer />
    </main>
  );
}
