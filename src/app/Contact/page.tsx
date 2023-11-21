import Header from "../../../components/utils/Header";
import Hero from "../../../components/Contact/Hero";
import Footer from "../../../components/utils/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photogenie | Contact Us",
  description:
    "Get in touch with us to discuss your photography needs in Marburg, Germany. Whether you're seeking a professional photoshoot, wish to purchase prints, or have any inquiries about our work, our Contact Us page makes it easy to connect. We're here to answer your questions and help bring your vision to life with our expertise in capturing Marburg's unique beauty. Contact us today to start your photographic journey in this picturesque city.",
};

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full h-full bg-[#2D2D2D]">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
