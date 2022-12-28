import Image from 'next/image';
import { FiStar } from 'react-icons/fi';
import { FaImages } from 'react-icons/fa';
import { Button } from 'components/Button';

interface CarCar {
  image: any;
  carmodel: string;
  price: string;
  carperformance: string;
  gastype: string;
  fwdorawd?: string;
  Featured?: string;
  years: string;
}

export const CarCard: React.FC<CarCar> = props => {
  const { image, carmodel, price, carperformance, gastype, fwdorawd, Featured, years } = props;
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-t-xl">
      <div className="aspect-w-3 aspect-h-[1.57] lg:aspect-h-[2.70] xl:aspect-h-[2.48]">
        <Image
          src={image}
          alt="img"
          layout="fill"
          objectFit="cover"
          className=" transition-all duration-500 group-hover:scale-105"
        />
        <div className=" absolute  flex w-full items-end bg-gradient-to-t from-gray-900 to-transparent opacity-60">
          <div className="flex h-12 w-full items-center justify-between px-5 text-xl text-gray-50">
            <FiStar />
            <div className="flex items-center gap-x-1">
              <FaImages />7
            </div>
          </div>
        </div>
      </div>
      {Featured && (
        <div className="text absolute top-5 -left-32 -rotate-45 bg-primary-500 py-2 px-32 text-white">
          {Featured}
        </div>
      )}
      <div className=" rounded-b-xl bg-gray-800">
        <div className="mx-5 border-b-2 border-gray-500 text-xl text-white">
          <p className="pt-3 line-clamp-1">{carmodel}</p>
          <p className="pt-1 pb-2 text-2xl font-bold">{price}</p>
        </div>
        <div className="mx-5 my-3 flex items-center gap-x-4 pt-1 pb-6 text-gray-400 ">
          <Button variant="light" size="slim">
            {years}
          </Button>
          <p className="text-sm">{carperformance}</p>
          <p className="text-sm">{gastype}</p>
          <p className="text-sm">{fwdorawd}</p>
        </div>
      </div>
    </div>
  );
};
