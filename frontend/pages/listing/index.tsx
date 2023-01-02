/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { RxDotFilled } from 'react-icons/rx';
import { AiOutlineStar } from 'react-icons/ai';
import { Title } from 'components/Title';
import { CarInformation } from 'components/Listing/CarInformation';
import { Vehiclehistory } from 'components/Listing/Vehiclehistory';
import { Popular } from 'components/Popular/Popular';
import Image from 'next/image';
import { SendMessage } from 'components/Listing/SendMessage';

const Carinformationdata = [
  {
    carlistinfo: '2018'
  },
  {
    icon: <RxDotFilled className="text-2xl text-orange-500" />,
    carlistinfo: '190,000 miles'
  },
  {
    icon: <RxDotFilled className="text-2xl text-orange-500" />,
    carlistinfo: 'SUV'
  },
  {
    icon: <RxDotFilled className="text-2xl text-orange-500" />,
    carlistinfo: 'Diesel'
  }
];

const slid = [
  {
    car: '/1.jpg'
  },
  {
    car: '/2.jpg'
  },
  {
    car: '/3.jpg'
  },
  {
    car: '/4.jpg'
  },
  {
    car: '/5.jpg'
  },
  {
    car: '/6.jpg'
  }
];
const ListingGallery: NextPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="container mt-28 px-8">
      <div className="grid grid-cols-2 md:gap-0 lg:gap-16 xl:grid-cols-5">
        <div className="col-span-3">
          <div className="mb-7 hidden lg:block">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <div>
                {slid.map((x, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={x.car}
                      alt="car"
                      width={1}
                      height={0.6}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <div>
                {slid.map((x, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={x.car}
                      alt="car"
                      width={1}
                      height={0.6}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className="mb-6 block border-b-2 pb-3 xl:hidden">
            <Title variant="h3" fontweight="thin">
              Porsche Macan 5-door SUV blue
            </Title>
            <div className="mt-2 flex gap-x-2 ">
              {Carinformationdata.map(items => (
                <div key={items.carlistinfo} className="flex">
                  {items.icon} {items.carlistinfo}
                </div>
              ))}
            </div>
          </div>
          <div className="block xl:hidden">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <div>
                {slid.map((x, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={x.car}
                      alt="car"
                      width={1}
                      height={0.6}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <div>
                {slid.map((x, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={x.car}
                      alt="car"
                      width={1}
                      height={0.6}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          <div className="block justify-between pt-6 sm:flex xl:hidden">
            <Title variant="h2" color="primary">
              $14.000
            </Title>
            <div className="mt-2 flex items-center gap-x-1 text-2xl text-gray-400">
              <AiOutlineStar />
              <span className="text-base">Add to favorite</span>
            </div>
          </div>
          <div className="mb-8 block xl:hidden">
            <div className="mb-8 mt-2 hidden  gap-x-2 lg:hidden ">
              {Carinformationdata.map(items => (
                <div key={items.carlistinfo} className="flex ">
                  {items.icon} {items.carlistinfo}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-9">
            <div className="mb-5 block xl:hidden">
              <CarInformation />
            </div>
            <Title variant="h4">Description</Title>
            <p className="pb-5 pt-6">
              How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.
              As for Passepartout, he thought Mr. Foggs manoeuvre simply glorious. The captain had
              said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.
            </p>
            <p className="pb-4 line-clamp-3">
              If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind
              did not veer round to the east, if no accident happened to the boat or its machinery,
              the Henrietta might cross the three
            </p>
            <span className="text-orange-500 underline ">Show more</span>
          </div>
          <Vehiclehistory />
        </div>
        <div className="col-span-2">
          <div className="mb-6 hidden xl:block">
            <Title variant="h3" fontweight="thin">
              Porsche Macan 5-door SUV blue
            </Title>
            <div className="mt-2 flex gap-x-2 border-b-2 pb-4">
              {Carinformationdata.map(items => (
                <div key={items.carlistinfo} className="flex">
                  {items.icon} {items.carlistinfo}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden xl:block">
            <CarInformation />
          </div>
        </div>
      </div>
      {/*SendMessage */}
      <div className="my-7">
        <SendMessage />
      </div>

      <div className="my-10">
        <div className="mb-5">
          <Title variant="h4"> Related listings</Title>
        </div>
        <Popular />
      </div>
    </div>
  );
};

export default ListingGallery;
