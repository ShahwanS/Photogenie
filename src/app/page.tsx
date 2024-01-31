import Carousel from "../../components/homepage/Carousel";
import Header from "../../components/utils/Header";
import Primarysection from "../../components/homepage/Primarysection";
import Secondary from "../../components/homepage/Secondary";
import FAQ from "../../components/homepage/FAQ";
import Footer from "../../components/utils/Footer";
import Gallery from "../../components/homepage/Gallery";
import Quotes from "../../components/homepage/Quotes";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full h-full ">
      <Header />
      <Primarysection />
      <Carousel />
      <Secondary />
      <Gallery />
      <Quotes />
      <FAQ />
      <Footer />
    </main>
  );
}
