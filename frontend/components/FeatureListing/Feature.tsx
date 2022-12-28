import { CarCard } from 'components/FeatureListing/FeatureCard';
import { SubCarCard } from 'components/FeatureListing/SubFeatureCard';
import Car from '../../public/feature1.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Button } from 'components/Button';
import Link from 'next/link';

const Cars = [
  {
    car: '/feature2.jpg',
    carModel: 'Roll Royce ',
    price: '40,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2019'
  },
  {
    car: '/feature3.jpg',
    carModel: 'Roll Royce ',
    price: '58,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2021'
  }
];
const Car1 = [
  {
    car: '/feature4.jpg',
    carModel: 'Roll Royce ',
    price: '30,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2021'
  },
  {
    car: '/feature5.jpg',
    carModel: 'Roll Royce ',
    price: '62,000$',
    carperFormance: 'Automatic',
    gasType: 'Diesel',
    fwdorawd: 'Front Wheel Drive',
    years: '2020'
  }
];

const Icon = [
  {
    icon: <FaFacebookF />,
    href: '/'
  },
  {
    icon: <AiOutlineTwitter />,
    href: '/'
  },
  {
    icon: <AiOutlineInstagram />,
    href: '/'
  }
];

export const Feature: React.FC = () => {
  return (
    <>
      <div className=" mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-2 lg:row-span-2">
          <CarCard
            image={Car}
            carmodel="Roll Royce "
            price="40,000$"
            carperformance="Automatic"
            gastype="Diesel"
            Featured="Featured"
            years="2020"
          />
        </div>
        {Cars.map((x, i) => (
          <div key={i} className="col-span-1 ">
            <SubCarCard
              image={x.car}
              carModel={x.carModel}
              price={x.price}
              carperFormance={x.carperFormance}
              gasType={x.gasType}
              years={x.years}
            />
          </div>
        ))}
        {Car1.map((x, i) => (
          <div
            key={i}
            className="col-span-1 hidden sm:block last:sm:hidden md:hidden lg:block lg:last:block"
          >
            <SubCarCard
              key={i}
              image={x.car}
              carModel={x.carModel}
              price={x.price}
              carperFormance={x.carperFormance}
              gasType={x.gasType}
              years={x.years}
            />
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-col justify-center sm:flex-row sm:justify-between">
        <div className="mb-10 flex flex-col items-center md:flex-col md:justify-center lg:flex-row lg:justify-start">
          <p className="mb-5 mr-3 font-sans font-semibold text-gray-400 md:mb-5 lg:mb-0">
            Follow us
          </p>
          <div className="flex gap-7 md:gap-7 lg:gap-3">
            {Icon.map((x, i) => (
              <Link href={x.href} key={i}>
                <a
                  target={'_blank'}
                  className="flex h-10 w-10 cursor-pointer  items-center justify-center rounded-full bg-gray-200 text-xl hover:bg-gray-300"
                >
                  {x.icon}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Button variant="light">View 29 New</Button>
        </div>
      </div>
    </>
  );
};
