/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// const item = [
//   {
//     image: '/client1.png'
//   },
//   {
//     image: '/client2.png'
//   },
//   {
//     image: '/client3.png'
//   },
//   {
//     image: '/client4.png'
//   },
//   {
//     image: '/client5.png'
//   }
// ];

// export const Partnership: React.FC = () => {
//   const SwiperButtonNext = ({ children }) => {
//     const swiper = useSwiper();
//     return <button onClick={() => swiper.slideNext()}>{children}</button>;
//   };
//   const SwiperButtonPrev = ({ children }) => {
//     const swiper = useSwiper();
//     return <button onClick={() => swiper.slidePrev()}>{children}</button>;
//   };

//   return (
// <div className="container px-8 py-16">
//   <Swiper
//     loop={true}
//     navigation={true}
//     // spaceBetween={10}
//     slidesPerView={1}
//     modules={[Pagination, Navigation]}
//     breakpoints={{
//       640: {
//         slidesPerView: 1,
//         slidesPerGroup: 1
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//         slidesPerGroup: 1
//       },
//       1024: {
//         slidesPerView: 4,
//         spaceBetween: 10,
//         slidesPerGroup: 1
//       }
//     }}
//   >
//      <div className="flex items-center  justify-center ">
//      {item.map((x, i) => (
//             <SwiperSlide key={i}>
//               <a>
//                 <img
//                   className="h-10 w-auto cursor-pointer object-cover grayscale hover:grayscale-0"
//                   src={x.image}
//                   alt={'client'}
//                 />
//               </a>
//             </SwiperSlide>
//           ))}
//         </div>
//         {/* <div>
//           <div className="my-6 flex gap-x-5">
//             <SwiperButtonPrev>
//               <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg">
//                 <HiChevronLeft />
//               </div>
//             </SwiperButtonPrev>
//             <SwiperButtonNext>
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg">
//                 <HiChevronRight />
//               </div>
//             </SwiperButtonNext>
//           </div>
//         </div> */}
//       </Swiper>
//     </div>
//   );
// };

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import classNames from 'classnames';
import { Title } from 'components/Title';
import { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData | string;
  alt?: string;
  isInverted?: boolean;
  className?: string;
}

const PartnerItem: React.FC<Props> = ({ src, alt, className, isInverted }) => (
  <div className="flex min-h-[100px] items-center">
    <img
      src={src as never}
      alt={alt}
      className={classNames(
        'cursor-pointer opacity-70 grayscale hover:grayscale-0',
        className,
        isInverted ? 'invert' : 'gold-logo'
      )}
    />
  </div>
);

export const Partners = () => (
  <div className="">
    <div className="mx-auto py-10 px-4 sm:px-6 lg:py-10 lg:px-8">
      <div className="pb-4 text-center">
        <Title variant="h2">Our Partners</Title>
      </div>
      <div className="flex flex-wrap items-center justify-center dark:hidden">
        <Swiper
          loop={true}
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1
            }
          }}
        >
          <SwiperSlide>
            <PartnerItem src="/client1.png" alt="client" />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem src="/client2.png" alt="client" />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem src="/client3.png" alt="client" />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem src="/client4.png" alt="client" />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerItem src="/client5.png" alt="client" />
          </SwiperSlide>
        </Swiper>
        {/* <PartnerItem src="/client1.png" alt="client" />
        <PartnerItem src="client2.png" alt="client" />
        <PartnerItem src="client3.png" alt="client" />
        <PartnerItem src="client4.png" alt="client" />
        <PartnerItem src="client5.png" alt="client" /> */}
      </div>
    </div>
  </div>
);
