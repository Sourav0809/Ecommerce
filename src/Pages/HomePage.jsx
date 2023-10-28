import FeatureProductContainer from "../Components/HomePage/FeatureProductContainer";
import MidBanner from "../Components/HomePage/UI/MidBanner";
import TopBanner from "../Components/HomePage/UI/TopBanners.jsx/TopBanner1";
import CarouselContainer from "../Components/HomePage/UI/Carousel/CarouselContainer";
import BottomBanner from "../Components/HomePage/UI/BottomBanner";
import NewsLetter from "../Components/HomePage/UI/NewsLetter";
import Footer from "../Components/HomePage/UI/Footer";
const HomePage = () => {
  return (
    <>
      <section>
        <div>
          <CarouselContainer />
        </div>

        <div>
          <div className=" mt-20 flex flex-col justify-center items-center font-custom gap-2">
            <h1 className=" text-4xl font-semibold">Featured Product</h1>
            <h1 className=" text-xl font-serif font-light">
              Monson Collection New Modern Design
            </h1>
          </div>
        </div>

        <div>
          <FeatureProductContainer />
        </div>

        <div>
          <MidBanner />
        </div>

        <div>
          <BottomBanner />
        </div>

        <div>
          <NewsLetter />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
