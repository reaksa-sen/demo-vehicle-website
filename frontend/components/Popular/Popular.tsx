import { Button } from 'components/Button';
import { SubCarCard } from 'components/FeatureListing/SubFeatureCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
const Cars = [
  {
    car: '/feature6.jpg',
    carModel: 'Roll Royce ',
    price: '40,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    feature: 'Featured',
    years: '2022'
  },
  {
    car: '/feature7.jpg',
    carModel: 'Roll Royce ',
    price: '58,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2020'
  },
  {
    car: '/feature8.jpg',
    carModel: 'Roll Royce ',
    price: '58,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2021'
  },
  {
    car: '/feature9.jpg',
    carModel: 'Roll Royce ',
    price: '58,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2022'
  }
];

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};
const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};

export const Popular: React.FC = () => {
  return (
    <Swiper
      loop={true}
      navigation={true}
      spaceBetween={30}
      slidesPerView={4}
      modules={[Pagination, Navigation]}
      className="myswiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 1
        }
      }}
    >
      <div className="flex justify-center gap-14">
        {Cars.map((x, i) => (
          <SwiperSlide key={x.car}>
            <SubCarCard
              key={i}
              image={x.car}
              carModel={x.carModel}
              price={x.price}
              carperFormance={x.carperFormance}
              gasType={x.gasType}
              Featured={x.feature}
              years={x.years}
            />
          </SwiperSlide>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-x-3">
          <SwiperButtonPrev>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl">
              <HiChevronLeft />
            </div>
          </SwiperButtonPrev>
          <SwiperButtonNext>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl">
              <HiChevronRight />
            </div>
          </SwiperButtonNext>
        </div>
        <Button variant="light">View 14 Audi</Button>
      </div>
    </Swiper>
  );
};
