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
import TopBanner from "../TopBanner";

const CarouselContainer = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 1000 }}
    >
      <SwiperSlide>
        <TopBanner />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner />
      </SwiperSlide>
      <SwiperSlide>
        <TopBanner />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default CarouselContainer;
