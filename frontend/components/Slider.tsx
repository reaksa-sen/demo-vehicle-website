import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import car from '../public/banner-bg.jpg';
import { ListBox } from './ListBox/ListBox';
import { Button } from './Button';
import { BiSearch } from 'react-icons/bi';
import { IoCarSportOutline } from 'react-icons/io5';

const item = [
  {
    car: <IoCarSportOutline size={35} />,
    title: 'Seden'
  },
  {
    car: <IoCarSportOutline size={35} />,
    title: 'Coupe'
  },
  {
    car: <IoCarSportOutline size={35} />,
    title: 'SUV'
  },
  {
    car: <IoCarSportOutline size={35} />,
    title: 'Hatcheck'
  },
  {
    car: <IoCarSportOutline size={35} />,
    title: 'Convertible'
  }
];

const ButtonCar: React.FC = () => {
  return (
    <div className="group flex w-full flex-wrap justify-center gap-y-4 gap-x-8">
      {item.map(x => (
        <>
          <div className="flex cursor-pointer flex-col items-center gap-y-5 gap-x-5">
            <div className="flex items-center rounded-full border hover:border-primary-500">
              <div className="flex h-16 w-16 items-center justify-center text-white">{x.car}</div>
            </div>
            <h1 className="text-sm text-white">{x.title}</h1>
          </div>
        </>
      ))}
    </div>
  );
};

const ListBoxs: React.FC = () => {
  return (
    <div className="mix-w-[500px] m-auto w-full px-[15px] py-[15px]">
      <div className="mb-4 flex justify-center gap-x-10 text-white">
        <h1 className="cursor-pointer">All</h1>
        <h1 className="cursor-pointer">New</h1>
        <h1 className="cursor-pointer">Used</h1>
      </div>
      <div className="flex flex-col justify-center gap-y-2 gap-x-2 rounded-xl bg-white p-5 lg:flex-row">
        <div>
          <ListBox />
        </div>
        <div>
          <ListBox />
        </div>
        <div>
          <ListBox />
        </div>
        <Button variant="light" icon={<BiSearch className="h-5 w-auto text-white" />}>
          <div className="block text-white lg:hidden">Search</div>
        </Button>
      </div>
    </div>
  );
};

const ListContactSearch: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10">
      <div className="flex h-full ">
        <div className="m-auto">
          <h1 className="mb-8 text-center text-3xl font-black text-white xl:text-5xl">
            Find Your <span className="text-primary-500">Perfect</span> Car
          </h1>
          <div className="mb-8">
            <ListBoxs />
          </div>
          <div>
            <ButtonCar />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Slider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        navigation
        pagination
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="aspect-w-4 aspect-h-3 min-h-[820px] lg:aspect-w-16 lg:aspect-h-8 lg:min-h-0 xl:aspect-h-7">
            <Image alt={'car'} layout="fill" objectFit="cover" src={car} placeholder="blur" />
            <div className="h-full w-full bg-gray-900 opacity-40" />
          </div>
        </SwiperSlide>
      </Swiper>
      <ListContactSearch />
    </div>
  );
};
