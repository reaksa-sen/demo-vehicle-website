/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const item = [
  {
    image: '/client1.png'
  },
  {
    image: '/client2.png'
  },
  {
    image: '/client3.png'
  },
  {
    image: '/client4.png'
  },
  {
    image: '/client5.png'
  }
];

export const Partnership: React.FC = () => {
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
  };
  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
  };
  return (
    <div className="container py-16 px-8">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={2}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 1
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 1
          }
        }}
      >
        <div className="flex items-center ">
          {item.map((x, i) => (
            <SwiperSlide key={i}>
              <a className="flex cursor-pointer gap-x-5 ">
                <img
                  className="h-9 w-auto object-cover grayscale hover:grayscale-0"
                  src={x.image}
                  alt={'client'}
                />
              </a>
            </SwiperSlide>
          ))}
        </div>
        {/* <div>
          <div className="my-6 flex gap-x-5">
            <SwiperButtonPrev>
              <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg">
                <HiChevronLeft />
              </div>
            </SwiperButtonPrev>
            <SwiperButtonNext>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg">
                <HiChevronRight />
              </div>
            </SwiperButtonNext>
          </div>
        </div> */}
      </Swiper>
    </div>
  );
};
