// importing banners
import TopBanner1 from "../TopBanners.jsx/TopBanner1";
import TopBanner2 from "../TopBanners.jsx/TopBanner2";
import TopBanner3 from "../TopBanners.jsx/TopBanner3";
import TopBanner4 from "../TopBanners.jsx/TopBanner4";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselContainer = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <TopBanner1 />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner2 />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner3 />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner4 />
      </SwiperSlide>
      ....
    </Swiper>
  );
};

export default CarouselContainer;
