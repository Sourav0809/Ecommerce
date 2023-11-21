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

const Carousel = ({ Image }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div className=" border shadow-xl  rounded-md w-[75%] m-auto h-[35rem] min-[600px]:w-[30rem] min-[600px]:h-[40rem]  flex justify-center items-center  gap-2 bg-green-100  ">
          <div className=" h-full w-full p-4 ">
            <img
              className=" w-full h-full rounded-md "
              src={Image[0]}
              alt="Carousel Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" border shadow-xl rounded-md w-[75%] m-auto h-[35rem] min-[600px]:w-[30rem] min-[600px]:h-[40rem]  flex flex-col gap-2 bg-green-100  ">
          <div className=" h-full w-full p-4">
            <img
              className=" w-full h-full rounded-md "
              src={Image[1]}
              alt="Carousel Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" border shadow-xl rounded-md w-[75%] m-auto h-[35rem] min-[600px]:w-[30rem] min-[600px]:h-[40rem]  flex flex-col gap-2 bg-green-100  ">
          <div className=" h-full w-full p-4">
            <img
              className=" w-full h-full rounded-md "
              src={Image[2]}
              alt="Carousel Image"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
